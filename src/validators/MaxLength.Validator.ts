import { ValidatorResult } from './Validator.Result';
import { IValidator, ValidatorValueType } from './IValidator';
import { Validator } from './Validator';

export class MaxLengthValidator extends Validator implements IValidator {
    private _maxLength: number;
    public get maxLength(): number {
        return this._maxLength;
    }
    public set maxLength(v: number) {
        this._maxLength = v;
    }

    constructor(value: ValidatorValueType, validatorName: string, maxLength: number) {
        super(value, validatorName);
        this._maxLength = maxLength;
    }

    validate(): ValidatorResult {
        const valid = this.value.toString().length <= this.maxLength;
        return {
            isValid: valid,
            error: {
                message: `${this.validatorName} must be less then ${this.maxLength} characters long.`,
                validatorName: this.validatorName,
            },
        };
    }
}
