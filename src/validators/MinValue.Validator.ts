import { ValidatorResult } from './Validator.Result';
import { IValidator, ValidatorValueType } from './IValidator';
import { Validator } from './Validator';

export class MinValueValidator extends Validator implements IValidator {
    private _minValue: number;
    public get minValue(): number {
        return this._minValue;
    }
    public set minValue(v: number) {
        this._minValue = v;
    }

    constructor(value: ValidatorValueType, validatorName: string, minValue: number) {
        super(value, validatorName);
        this._minValue = minValue;
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

        const valid = (this.value as number) > this.minValue;
        return {
            isValid: valid,
            error: {
                message: `${this.validatorName} must bigger then ${this.minValue} characters long.`,
                validatorName: this.validatorName,
            },
        };
    }
}
