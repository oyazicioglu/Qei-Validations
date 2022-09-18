import { IValidation, ValidationError } from './IValidation';

export class RequiredValidation implements IValidation {
    constructor(public value: string, public name: string) {}

    validate(): ValidationError {
        const isValid = this.value !== undefined && this.value !== '' && this.value !== null;
        return new ValidationError(2005, isValid ? undefined : `${this.name} is required.`);
    }
}
