"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
class Validator {
    constructor(validations) {
        this._validations = validations;
    }
    Run() {
        let isValid = true;
        let errors = [];
        this._validations.forEach((validation) => {
            const validationResult = validation.validate();
            if (validationResult.Message) {
                isValid = false;
                errors.push(validationResult);
            }
        });
        return {
            errors,
            isValid,
        };
    }
}
exports.Validator = Validator;
