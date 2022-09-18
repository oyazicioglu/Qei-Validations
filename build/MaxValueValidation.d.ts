import { IValidation, ValidationError } from './IValidation';
export declare class MaxValueValidation implements IValidation {
    max: number;
    value: number;
    name: string;
    constructor(max: number, value: number, name: string);
    validate(): ValidationError;
    getValue(): number;
}
