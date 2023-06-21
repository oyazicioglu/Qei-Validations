import { IValidator, ValidatorValueType } from './IValidator';
import { Validator } from './Validator';
import { ValidatorResult } from './Validator.Result';

export class EmailValidator extends Validator implements IValidator {
    constructor(value: ValidatorValueType, validatorName: string) {
        super(value, validatorName);
    }

    validate(): ValidatorResult {
        const valid = !!(this.value as String).match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        return {
            isValid: valid,
            error: {
                message: 'Value is not matching email format.',
                validatorName: this.validatorName,
            },
        };
    }
}
