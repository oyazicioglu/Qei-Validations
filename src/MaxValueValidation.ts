import { IValidation, ValidationError } from './IValidation';

export class MaxValueValidation implements IValidation {
    constructor(public max: number, public value: number, public name: string) {}

    validate(): ValidationError {
        const isValid = this.value !== undefined && this.value <= this.max;
        return new ValidationError(2003, isValid ? undefined : `${this.name} must be less then ${this.max}.`);
    }

    getValue() {
        return this.max;
    }
}
