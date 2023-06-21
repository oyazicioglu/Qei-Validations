import { ValidatorResult } from './Validator.Result';
import { IValidator, ValidatorValueType } from './IValidator';
import { Validator } from './Validator';

export class RequiredValidator extends Validator implements IValidator {
    constructor(value: ValidatorValueType, validatorName: string) {
        super(value, validatorName);
    }

    validate(): ValidatorResult {
        const valid = !!this.value && this.value !== '' && this.value !== 0;
        return {
            isValid: valid,
            error: {
                message: `${this.validatorName} is required.`,
                validatorName: this.validatorName,
            },
        };
    }
}
