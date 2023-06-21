import { ValidatorResult } from './Validator.Result';
import { IValidator } from './IValidator';
import { Validator } from './Validator';

export class StringValidator extends Validator implements IValidator {
    constructor(value: string, validatorName: string) {
        super(value, validatorName);
    }

    validate(): ValidatorResult {
        const valid = !!this.value && typeof this.value === 'string';
        return {
            isValid: valid,
            error: {
                message: `${this.validatorName} is not string.`,
                validatorName: this.validatorName,
            },
        };
    }
}
