define(["require", "exports", "./filterUtilities"], function (require, exports, filterUtilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stringFilterCondition = function (options) {
        // make sure the both search & cell value are string
        // and make them lower case for case insensitive filtering
        var cellValue = options.cellValue.toString().toLowerCase();
        var searchTerm = options.searchTerm.toString().toLowerCase();
        if (options.operator === '*') {
            return cellValue.endsWith(searchTerm);
        }
        else if (options.operator === '' && options.cellValueLastChar === '*') {
            return cellValue.startsWith(searchTerm);
        }
        else if (options.operator === '') {
            return cellValue.includes(searchTerm);
        }
        return filterUtilities_1.testFilterCondition(options.operator || '==', cellValue, searchTerm);
    };
});
