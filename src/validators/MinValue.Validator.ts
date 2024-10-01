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
