import { ValidatorError } from './Validator.Error';

export interface ValidatorResult {
    isValid: boolean;
    error?: ValidatorError;
}
