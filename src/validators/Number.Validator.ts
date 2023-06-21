import { ValidatorResult } from './Validator.Result';
import { IValidator } from './IValidator';
import { Validator } from './Validator';

export class NumberValidator extends Validator implements IValidator {
    constructor(value: number, validatorName: string) {
        super(value, validatorName);
    }

    validate(): ValidatorResult {
        const valid = !!this.value && typeof this.value === 'number';
        return {
            isValid: valid,
            error: {
                message: `${this.validatorName} is not type of number.`,
                validatorName: this.validatorName,
            },
        };
    }
}
