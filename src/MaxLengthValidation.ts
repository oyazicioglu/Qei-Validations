import { IValidation, ValidationError } from './IValidation';

export class MaxLengthValidation implements IValidation {
    #maxLength: number;
    constructor(public maxLength: number, public value: string, public name: string) {
        this.#maxLength = maxLength;
    }

    validate(): ValidationError {
        const isValid = !!this.value && this.value.toString().length <= this.#maxLength;
        return new ValidationError(2002, isValid ? undefined : `${this.name} must be less then ${this.#maxLength} characters long.`);
    }

    getLength() {
        return this.#maxLength;
    }
}
