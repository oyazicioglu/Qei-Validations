"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxValueValidation = void 0;
const IValidation_1 = require("./IValidation");
class MaxValueValidation {
    constructor(max, value, name) {
        this.max = max;
        this.value = value;
        this.name = name;
    }
    validate() {
        const isValid = this.value !== undefined && this.value <= this.max;
        return new IValidation_1.ValidationError(2003, isValid ? undefined : `${this.name} must be less then ${this.max}.`);
    }
    getValue() {
        return this.max;
    }
}
exports.MaxValueValidation = MaxValueValidation;
