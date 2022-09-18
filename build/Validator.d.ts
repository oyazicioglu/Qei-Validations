import { IValidation, IValidationResult } from './IValidation';
export declare class Validator {
    private _validations;
    constructor(validations: IValidation[]);
    Run(): IValidationResult;
}
