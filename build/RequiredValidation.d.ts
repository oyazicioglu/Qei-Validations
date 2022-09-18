import { IValidation, ValidationError } from './IValidation';
export declare class RequiredValidation implements IValidation {
    value: string;
    name: string;
    constructor(value: string, name: string);
    validate(): ValidationError;
}
