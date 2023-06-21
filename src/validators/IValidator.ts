import { ValidatorResult } from './Validator.Result';

export interface IValidator {
    value: ValidatorValueType;
    validatorName: string;
    validate(): ValidatorResult;
}

export type ValidatorValueType =
    | string
    | string[]
    | number
    | number[]
    | boolean
    | boolean[]
    | Date
    | Date[];
