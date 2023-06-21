import { ValidatorResult } from './Validator.Result';
import { IValidator, ValidatorValueType } from './IValidator';
import { Validator } from './Validator';

export class MaxValueValidator extends Validator implements IValidator {
    private _maxValue: number;
    public get maxValue(): number {
        return this._maxValue;
    }
    public set maxValue(v: number) {
        this._maxValue = v;
    }

    constructor(value: ValidatorValueType, validatorName: string, maxValue: number) {
        super(value, validatorName);
        this._maxValue = maxValue;
    }

    validate(): ValidatorResult {
        const isTypeValid = this.value && typeof this.value === 'number';
        if (!isTypeValid) {
            return {
                isValid: false,
                error: {
                    message: `${this.validatorName} must be type of number | Number.`,
                    validatorName: this.validatorName,
                },
            };
        }

        const valid = (this.value as number) <= this.maxValue;
        return {
            isValid: valid,
            error: {
                message: `${this.validatorName} must be less then ${this.maxValue} characters long.`,
                validatorName: this.validatorName,
            },
        };
    }
}
