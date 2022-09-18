import { IValidation, ValidationError } from './IValidation';

export class MinValueValidation implements IValidation {
    constructor(public min: number, public value: number, public name: string) {}

    validate(): ValidationError {
        const isValid = this.value !== undefined && this.value >= this.min;
        return new ValidationError(2005, isValid ? undefined : `${this.name} must be higher then ${this.min}.`);
    }

    getValue() {
        return this.min;
    }
}
