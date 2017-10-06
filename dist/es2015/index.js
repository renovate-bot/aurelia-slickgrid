import { PLATFORM } from 'aurelia-pal';
import { AuSlickgridCustomElement } from './au-slickgrid';
import { SlickgridConfig } from './slickgrid-config';
import { CaseType } from './models/caseType';
import { FormElementType } from './models/formElementType';
import { FieldType } from './models/fieldType';
import { FilterConditions } from './filter-conditions';
import { FilterTemplates } from './filter-templates';
import { Formatters } from './formatters';
import { Sorters } from './sorters';
import { FilterService } from './services/filter.service';
import { MouseService } from './services/mouse.service';
import { ResizerService } from './services/resizer.service';
import { SortService } from './services/sort.service';
import { GridOdataService } from './services/grid-odata.service';
export function configure(aurelia, callback) {
    aurelia.globalResources(PLATFORM.moduleName('./au-slickgrid'));
    const config = new SlickgridConfig();
    if (typeof callback === 'function') {
        callback(config);
    }
}
export { AuSlickgridCustomElement, CaseType, FormElementType, FieldType, FilterConditions, FilterTemplates, Formatters, Sorters, FilterService, MouseService, ResizerService, SortService, GridOdataService, SlickgridConfig };
