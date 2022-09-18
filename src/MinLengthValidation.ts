import { IValidation, ValidationError } from './IValidation';

export class MinLengthValidation implements IValidation {
    constructor(public minLength: number, public value: string, public name: string) {}

    validate(): ValidationError {
        const isValid = !!this.value && this.value.length >= this.minLength;
        return new ValidationError(2004, isValid ? undefined : `${this.name} must be at least ${this.minLength} characters long.`);
    }

    getLength() {
        return this.minLength;
    }
}
