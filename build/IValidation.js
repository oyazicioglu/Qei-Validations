"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = void 0;
const qei_response_1 = require("qei-response");
class ValidationError extends qei_response_1.BaseError {
    constructor(errorNumber, message) {
        super(errorNumber, message, qei_response_1.ErrorType.WARNING);
    }
    ToValueObject() {
        return {
            ErrorNumber: this.ErrorNumber,
            ErrorType: this.Type,
            Message: this.Message,
        };
    }
}
exports.ValidationError = ValidationError;
