import { IValidation, IValidationResult, ValidationError } from './IValidation';

export class Validator {
    private _validations: IValidation[];
    constructor(validations: IValidation[]) {
        this._validations = validations;
    }

    Run(): IValidationResult {
        let isValid: boolean = true;
        let errors: ValidationError[] = [];
        this._validations.forEach((validation) => {
            const validationResult = validation.validate();
            if (validationResult.Message) {
                isValid = false;
                errors.push(validationResult);
            }
        });

        return {
            errors,
            isValid,
        };
    }
}
