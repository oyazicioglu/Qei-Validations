import { IValidator } from "../validators/IValidator";
import { ValidatorError } from "./Validation.Error";

export interface IValidation {
    setValidatiors(validators: IValidator[]): void;
    addValidattor(validator: IValidator): void;
    removeValidator(validator: IValidator): void;
    validateAll(): ValidationResult;
}

export interface ValidationResult {
    isValid: boolean;
    errors?: ValidatorError[];
}