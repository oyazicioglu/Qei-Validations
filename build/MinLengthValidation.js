"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinLengthValidation = void 0;
const IValidation_1 = require("./IValidation");
class MinLengthValidation {
    constructor(minLength, value, name) {
        this.minLength = minLength;
        this.value = value;
        this.name = name;
    }
    validate() {
        const isValid = !!this.value && this.value.length >= this.minLength;
        return new IValidation_1.ValidationError(2004, isValid ? undefined : `${this.name} must be at least ${this.minLength} characters long.`);
    }
    getLength() {
        return this.minLength;
    }
}
exports.MinLengthValidation = MinLengthValidation;
