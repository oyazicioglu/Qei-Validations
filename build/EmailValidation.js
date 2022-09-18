"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailValidation = void 0;
const IValidation_1 = require("./IValidation");
class EmailValidation {
    constructor(value, name) {
        this.value = value;
        this.name = name;
    }
    validate() {
        const isValid = !!this.value &&
            !!this.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return new IValidation_1.ValidationError(2001, isValid ? undefined : `${this.name} is not a valid email address.`);
    }
}
exports.EmailValidation = EmailValidation;
