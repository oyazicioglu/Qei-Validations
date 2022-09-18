import { IValidation, ValidationError } from './IValidation';
export declare class MinValueValidation implements IValidation {
    min: number;
    value: number;
    name: string;
    constructor(min: number, value: number, name: string);
    validate(): ValidationError;
    getValue(): number;
}
