import { ValidatorValueType } from './IValidator';

export class Validator {
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
}
