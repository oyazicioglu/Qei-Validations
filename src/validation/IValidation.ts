import { IValidator } from '../validators/IValidator';
import { ValidatorError } from '../validators/Validator.Error';

export interface IValidation {
    validators: IValidator[];
    setValidatiors(validators: IValidator[]): void;
    addValidattor(validator: IValidator): void;
    removeValidator(validator: IValidator): void;
    validateAll(): ValidationResult;
}

export interface ValidationResult {
    isValid: boolean;
    errors?: ValidatorError[];
}
