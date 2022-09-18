"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationUtils = void 0;
const EmailValidation_1 = require("../EmailValidation");
const MaxLengthValidation_1 = require("../MaxLengthValidation");
const MinLengthValidation_1 = require("../MinLengthValidation");
const RequiredValidation_1 = require("../RequiredValidation");
class ValidationUtils {
    static GetRequiredValidation(value, name) {
        return new RequiredValidation_1.RequiredValidation(value, name);
    }
    static GetEmailValidations(value, name) {
        return new EmailValidation_1.EmailValidation(value, name);
    }
    static GetRequiredEmailValidations(value, name) {
        return [this.GetRequiredValidation(value, name), new EmailValidation_1.EmailValidation(value, name)];
    }
    static GetMinLengthValidations(value, name, minLength) {
        return new MinLengthValidation_1.MinLengthValidation(minLength, value, name);
    }
    static GetMaxLengthValidations(value, name, maxLength) {
        return new MaxLengthValidation_1.MaxLengthValidation(maxLength, value, name);
    }
    static GetRequiredMinLengthValidations(value, name, minLength) {
        return [this.GetRequiredValidation(value, name), this.GetMinLengthValidations(value, name, minLength)];
    }
    static GetRequiredMaxLengthValidations(value, name, maxLength) {
        return [this.GetRequiredValidation(value, name), this.GetMaxLengthValidations(value, name, maxLength)];
    }
    static GetMinMaxLengthValidations(value, name, minLength, maxLength) {
        return [this.GetMinLengthValidations(value, name, minLength), this.GetMaxLengthValidations(value, name, maxLength)];
    }
    static GetRequiredMinMaxLengthValidations(value, name, minLength, maxLength) {
        return [
            this.GetRequiredValidation(value, name),
            this.GetMinLengthValidations(value, name, minLength),
            this.GetMaxLengthValidations(value, name, maxLength),
        ];
    }
}
exports.ValidationUtils = ValidationUtils;
