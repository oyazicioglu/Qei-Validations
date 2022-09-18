import { IValidation, ValidationError } from './IValidation';

export class EmailValidation implements IValidation {
    constructor(public value: string, public name: string) {}
    validate(): ValidationError {
        const isValid =
            !!this.value &&
            !!this.value.match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );

        return new ValidationError(2001, isValid ? undefined : `${this.name} is not a valid email address.`);
    }
}
