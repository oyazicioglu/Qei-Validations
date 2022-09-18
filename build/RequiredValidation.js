"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredValidation = void 0;
const IValidation_1 = require("./IValidation");
class RequiredValidation {
    constructor(value, name) {
        this.value = value;
        this.name = name;
    }
    validate() {
        const isValid = this.value !== undefined && this.value !== '' && this.value !== null;
        return new IValidation_1.ValidationError(2005, isValid ? undefined : `${this.name} is required.`);
    }
}
exports.RequiredValidation = RequiredValidation;
