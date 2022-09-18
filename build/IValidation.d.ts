import { BaseError } from 'qei-response';
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
export declare class ValidationError extends BaseError implements IValueObject<BaseErrorObject> {
    constructor(errorNumber: number, message?: string);
    ToValueObject(): BaseErrorObject;
}
