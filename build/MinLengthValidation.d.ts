import { IValidation, ValidationError } from './IValidation';
export declare class MinLengthValidation implements IValidation {
    minLength: number;
    value: string;
    name: string;
    constructor(minLength: number, value: string, name: string);
    validate(): ValidationError;
    getLength(): number;
}
