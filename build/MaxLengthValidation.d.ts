import { IValidation, ValidationError } from './IValidation';
export declare class MaxLengthValidation implements IValidation {
    #private;
    maxLength: number;
    value: string;
    name: string;
    constructor(maxLength: number, value: string, name: string);
    validate(): ValidationError;
    getLength(): number;
}
