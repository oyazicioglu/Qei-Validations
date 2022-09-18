import { IValidation, ValidationError } from './IValidation';
export declare class EmailValidation implements IValidation {
    value: string;
    name: string;
    constructor(value: string, name: string);
    validate(): ValidationError;
}
