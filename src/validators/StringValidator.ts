import { ValidatorResult } from "./Validator.Result";
import { IValidator, ValidatorValueType } from "./IValidator";

export class StringValidator implements IValidator {
    
    private _value : ValidatorValueType;
    public get value() : ValidatorValueType {
        return this._value;
    }
    public set value(v : ValidatorValueType) {
        this._value = v;

    }
    
    constructor(value: ValidatorValueType) {
        this._value = value;
    }

    validate(): ValidatorResult {
        return {
            isValid: true,
        }
    }
}