define(["require", "exports", "./../services/utilities", "flatpickr", "jquery", "./../models/index"], function (require, exports, utilities_1, flatpickr, $, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /*
     * An example of a date picker editor using Flatpickr
     * https://chmln.github.io/flatpickr
     */
    var DateEditor = /** @class */ (function () {
        function DateEditor(args) {
            this.args = args;
            this.init();
        }
        DateEditor.prototype.init = function () {
            var _this = this;
            var pickerOptions = {
                defaultDate: this.args.item[this.args.column.field] || null,
                altInput: true,
                altFormat: utilities_1.mapFlatpickrDateFormatWithFieldType(this.args.type || index_1.FieldType.dateIso),
                onChange: function (selectedDates, dateStr, instance) {
                    _this.save();
                },
            };
            this.$input = $("<input type=\"text\" value=\"" + this.defaultDate + "\" class=\"editor-text\" />");
            this.$input.appendTo(this.args.container);
            this.$input.focus().val(this.defaultDate).select();
            this.flatInstance = flatpickr(this.$input[0], pickerOptions);
            this.flatInstance.open();
        };
        DateEditor.prototype.destroy = function () {
            //this.flatInstance.destroy();
            this.$input.remove();
        };
        DateEditor.prototype.show = function () {
            this.flatInstance.open();
        };
        DateEditor.prototype.hide = function () {
            this.flatInstance.close();
        };
        DateEditor.prototype.focus = function () {
            this.$input.focus();
        };
        DateEditor.prototype.save = function () {
            this.args.commitChanges();
        };
        DateEditor.prototype.loadValue = function (item) {
            this.defaultDate = item[this.args.column.field];
            this.$input.val(this.defaultDate);
            this.$input.select();
        };
        DateEditor.prototype.serializeValue = function () {
            return this.$input.val();
        };
        DateEditor.prototype.applyValue = function (item, state) {
            item[this.args.column.field] = state;
        };
        DateEditor.prototype.isValueChanged = function () {
            return (!(this.$input.val() === '' && this.defaultDate == null)) && (this.$input.val() !== this.defaultDate);
        };
        DateEditor.prototype.validate = function () {
            if (this.args.column.validator) {
                var validationResults = this.args.column.validator(this.$input.val(), this.args);
                if (!validationResults.valid) {
                    return validationResults;
                }
            }
            return {
                valid: true,
                msg: null
            };
        };
        return DateEditor;
    }());
    exports.DateEditor = DateEditor;
});
//# sourceMappingURL=dateEditor.js.map