import { ValidatorResult } from './Validator.Result';
import { IValidator, ValidatorValueType } from './IValidator';
import { Validator } from './Validator';

export class MinLengthValidator extends Validator implements IValidator {
    private _minLength: number;
    public get minLength(): number {
        return this._minLength;
    }
    public set minLength(v: number) {
        this._minLength = v;
    }

    constructor(value: ValidatorValueType, validatorName: string, minLength: number) {
        super(value, validatorName);
        this._minLength = minLength;
    }

    validate(): ValidatorResult {
        const valid = this.value.toString().length <= this.minLength;
        return {
            isValid: valid,
            error: {
                message: `${this.validatorName} must be more then ${this.minLength} characters long.`,
                validatorName: this.validatorName,
            },
        };
    }
}
