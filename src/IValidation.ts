import { BaseError, ErrorType } from 'qei-response';
import { BaseErrorObject } from 'qei-response';
import { IValueObject } from 'qei-response';

export interface IValidation {
    name: string;
    value: any;
    validate(): ValidationError;
}

export interface IValidationResult {
    isValid: boolean;
    errors: ValidationError[];
}

export class ValidationError extends BaseError implements IValueObject<BaseErrorObject> {
    constructor(errorNumber: number, message?: string) {
        super(errorNumber, message as string, ErrorType.WARNING);
    }

    ToValueObject(): BaseErrorObject {
        return {
            ErrorNumber: this.ErrorNumber,
            ErrorType: this.Type,
            Message: this.Message,
        };
    }
}
