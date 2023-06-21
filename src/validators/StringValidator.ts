import { ValidatorResult } from './Validator.Result';
import { IValidator, ValidatorValueType } from './IValidator';

export class StringValidator implements IValidator {
    private _value: ValidatorValueType;
    public get value(): ValidatorValueType {
        return this._value;
    }
    public set value(v: ValidatorValueType) {
        this._value = v;
    }

    private _validatorName: string;
    public get validatorName(): string {
        return this._validatorName;
    }
    public set validatorName(v: string) {
        this._validatorName = v;
    }

    constructor(value: ValidatorValueType, validatorName: string) {
        this._value = value;
        this._validatorName = validatorName;
    }

    validate(): ValidatorResult {
        const valid = this.value && typeof this.value === 'string';
        return {
            isValid: valid,
            error: {
                message: 'Value is not type of String',
                validatorName: this.validatorName,
            },
        };
    }
}
