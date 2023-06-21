import { IValidator } from "../validators/IValidator";
import { IValidation, ValidationResult } from "./IValidation";
import { ValidatorError } from "./Validation.Error";

export class Validation implements IValidation {
    constructor(private validators: IValidator[] = []) {}

    setValidatiors(validators: IValidator[]): void {
        this.validators = validators;
    }

    addValidattor(validator: IValidator): void {
        this.validators.push(validator);
    }

    removeValidator(validator: IValidator): void {
        this.validators = this.validators.filter(v => v !== validator);
    }

    validateAll(): ValidationResult {
        let allValid = true;
        let validatorErrors: ValidatorError[] = [];

        for (const validator of this.validators) {
            const validationResult = validator.validate()
            if (!validationResult.isValid) {
                allValid = false;
                validatorErrors.push(validationResult.error)
            }
        }

        return {
            isValid: allValid,
            errors: validatorErrors ?? undefined,
        }
    }

}