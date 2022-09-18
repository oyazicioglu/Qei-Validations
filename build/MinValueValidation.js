"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinValueValidation = void 0;
const IValidation_1 = require("./IValidation");
class MinValueValidation {
    constructor(min, value, name) {
        this.min = min;
        this.value = value;
        this.name = name;
    }
    validate() {
        const isValid = this.value !== undefined && this.value >= this.min;
        return new IValidation_1.ValidationError(2005, isValid ? undefined : `${this.name} must be higher then ${this.min}.`);
    }
    getValue() {
        return this.min;
    }
}
exports.MinValueValidation = MinValueValidation;
