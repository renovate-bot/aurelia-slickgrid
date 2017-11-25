var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { FilterService } from './filter.service';
let ControlAndPluginService = class ControlAndPluginService {
    constructor(ea, filterService, gridExtraService) {
        this.ea = ea;
        this.filterService = filterService;
        this.gridExtraService = gridExtraService;
    }
    /**
     * Attach/Create different Controls or Plugins after the Grid is created
     * @param {any} grid
     * @param {Column[]} columnDefinitions
     * @param {GridOptions} options
     * @param {any} dataView
     */
    attachDifferentControlOrPlugins(grid, columnDefinitions, options, dataView) {
        this._grid = grid;
        this._dataView = dataView;
        this._visibleColumns = columnDefinitions;
        if (options.enableColumnPicker) {
            this.columnPickerControl = new Slick.Controls.ColumnPicker(columnDefinitions, grid, options);
        }
        if (options.enableGridMenu) {
            this.prepareGridMenu(grid, options);
            this.gridMenuControl = new Slick.Controls.GridMenu(columnDefinitions, grid, options);
            if (options.gridMenu) {
                this.gridMenuControl.onBeforeMenuShow.subscribe((e, args) => {
                    if (options.gridMenu && typeof options.gridMenu.onBeforeMenuShow === 'function') {
                        options.gridMenu.onBeforeMenuShow(e, args);
                    }
                });
                this.gridMenuControl.onCommand.subscribe((e, args) => {
                    if (options.gridMenu && typeof options.gridMenu.onCommand === 'function') {
                        options.gridMenu.onCommand(e, args);
                    }
                });
                this.gridMenuControl.onMenuClose.subscribe((e, args) => {
                    if (options.gridMenu && typeof options.gridMenu.onMenuClose === 'function') {
                        options.gridMenu.onMenuClose(e, args);
                    }
                });
            }
        }
        if (options.enableAutoTooltip) {
            this.autoTooltipPlugin = new Slick.AutoTooltips(options.autoTooltipOptions || {});
            grid.registerPlugin(this.autoTooltipPlugin);
        }
        if (options.enableCheckboxSelector) {
            // when enabling the Checkbox Selector Plugin, we need to also watch onClick events to perform certain actions
            // the selector column has to be create BEFORE the grid (else it behaves oddly), but we can only watch grid events AFTER the grid is created
            grid.registerPlugin(this.checkboxSelectorPlugin);
            // this also requires the Row Selection Model to be registered as well
            if (!this.rowSelectionPlugin) {
                this.rowSelectionPlugin = new Slick.RowSelectionModel(options.rowSelectionOptions || {});
                grid.setSelectionModel(this.rowSelectionPlugin);
            }
        }
        if (options.enableRowSelection) {
            this.rowSelectionPlugin = new Slick.RowSelectionModel(options.rowSelectionOptions || {});
            grid.setSelectionModel(this.rowSelectionPlugin);
        }
        if (options.enableHeaderButton) {
            this.headerButtonsPlugin = new Slick.Plugins.HeaderButtons(options.headerButton || {});
            grid.registerPlugin(this.headerButtonsPlugin);
            this.headerButtonsPlugin.onCommand.subscribe((e, args) => {
                if (options.headerButton && typeof options.headerButton.onCommand === 'function') {
                    options.headerButton.onCommand(e, args);
                }
            });
        }
        if (options.enableHeaderMenu) {
            this.headerMenuPlugin = new Slick.Plugins.HeaderMenu(options.headerMenu || {});
            grid.registerPlugin(this.headerMenuPlugin);
            this.headerMenuPlugin.onCommand.subscribe((e, args) => {
                if (options.headerMenu && typeof options.headerMenu.onCommand === 'function') {
                    options.headerMenu.onCommand(e, args);
                }
            });
            this.headerMenuPlugin.onCommand.subscribe((e, args) => {
                if (options.headerMenu && typeof options.headerMenu.onBeforeMenuShow === 'function') {
                    options.headerMenu.onBeforeMenuShow(e, args);
                }
            });
        }
        if (options.registerPlugins !== undefined) {
            if (Array.isArray(options.registerPlugins)) {
                options.registerPlugins.forEach((plugin) => {
                    grid.registerPlugin(plugin);
                });
            }
            else {
                grid.registerPlugin(options.registerPlugins);
            }
        }
    }
    hideColumn(column) {
        if (this._grid && this._visibleColumns) {
            const columnIndex = this._grid.getColumnIndex(column.id);
            this._visibleColumns = this.removeColumnByIndex(this._visibleColumns, columnIndex);
            this._grid.setColumns(this._visibleColumns);
        }
    }
    removeColumnByIndex(array, index) {
        return array.filter((el, i) => {
            return index !== i;
        });
    }
    autoResizeColumns() {
        this._grid.autosizeColumns();
    }
    destroy() {
        this._grid = null;
        this._dataView = null;
        this._visibleColumns = [];
        if (this.columnPickerControl) {
            this.columnPickerControl.destroy();
            this.columnPickerControl = null;
        }
        if (this.gridMenuControl) {
            this.gridMenuControl.destroy();
            this.gridMenuControl = null;
        }
        if (this.rowSelectionPlugin) {
            this.rowSelectionPlugin.destroy();
            this.rowSelectionPlugin = null;
        }
        if (this.checkboxSelectorPlugin) {
            this.checkboxSelectorPlugin.destroy();
            this.checkboxSelectorPlugin = null;
        }
        if (this.autoTooltipPlugin) {
            this.autoTooltipPlugin.destroy();
            this.autoTooltipPlugin = null;
        }
        if (this.headerButtonsPlugin) {
            this.headerButtonsPlugin.destroy();
            this.headerButtonsPlugin = null;
        }
        if (this.headerMenuPlugin) {
            this.headerMenuPlugin.destroy();
            this.headerMenuPlugin = null;
        }
    }
    addGridMenuCustomCommands(grid, options) {
        if (options.enableFiltering) {
            if (options && options.gridMenu && options.gridMenu.customItems && options.gridMenu.customItems.filter((item) => item.command === 'clear-filter').length === 0) {
                options.gridMenu.customItems.push({
                    iconCssClass: 'fa fa-filter text-danger',
                    title: 'Clear All Filters',
                    disabled: false,
                    command: 'clear-filter'
                });
            }
            if (options && options.gridMenu && options.gridMenu.customItems && options.gridMenu.customItems.filter((item) => item.command === 'toggle-filter').length === 0) {
                options.gridMenu.customItems.push({
                    iconCssClass: 'fa fa-random',
                    title: 'Toggle Filter Row',
                    disabled: false,
                    command: 'toggle-filter'
                });
            }
            if (options.gridMenu) {
                options.gridMenu.onCommand = (e, args) => {
                    if (args.command === 'toggle-filter') {
                        grid.setHeaderRowVisibility(!grid.getOptions().showHeaderRow);
                    }
                    else if (args.command === 'toggle-toppanel') {
                        grid.setTopPanelVisibility(!grid.getOptions().showTopPanel);
                    }
                    else if (args.command === 'clear-filter') {
                        this.filterService.clearFilters();
                        this._dataView.refresh();
                    }
                    else {
                        alert('Command: ' + args.command);
                    }
                };
            }
        }
        // remove the custom command title if there's no command
        if (options && options.gridMenu && options.gridMenu.customItems && options.gridMenu.customItems.length > 0) {
            options.gridMenu.customTitle = options.gridMenu.customTitle || 'Commands';
        }
    }
    prepareGridMenu(grid, options) {
        options.gridMenu = options.gridMenu || {};
        options.gridMenu.columnTitle = options.gridMenu.columnTitle || 'Columns';
        options.gridMenu.iconCssClass = options.gridMenu.iconCssClass || 'fa fa-bars';
        options.gridMenu.menuWidth = options.gridMenu.menuWidth || 18;
        options.gridMenu.customTitle = options.gridMenu.customTitle || undefined;
        options.gridMenu.customItems = options.gridMenu.customItems || [];
        this.addGridMenuCustomCommands(grid, options);
        // options.gridMenu.resizeOnShowHeaderRow = options.showHeaderRow;
    }
    /**
     * Attach/Create different plugins before the Grid creation.
     * For example the multi-select have to be added to the column definition before the grid is created to work properly
     * @param {Column[]} columnDefinitions
     * @param {GridOptions} options
     */
    createPluginBeforeGridCreation(columnDefinitions, options) {
        if (options.enableCheckboxSelector) {
            this.checkboxSelectorPlugin = new Slick.CheckboxSelectColumn(options.checkboxSelector || {});
            columnDefinitions.unshift(this.checkboxSelectorPlugin.getColumnDefinition());
        }
    }
};
ControlAndPluginService = __decorate([
    inject(EventAggregator, FilterService)
], ControlAndPluginService);
export { ControlAndPluginService };
//# sourceMappingURL=controlAndPlugin.service.js.map