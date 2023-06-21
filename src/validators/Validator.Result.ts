import { ValidatorError } from "../validation/Validation.Error";

export interface ValidatorResult {
    isValid: boolean;
    error?: ValidatorError;
}