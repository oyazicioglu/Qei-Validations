import { EmailValidation } from '../EmailValidation';
import { IValidation } from '../IValidation';
import { MaxLengthValidation } from '../MaxLengthValidation';
import { MinLengthValidation } from '../MinLengthValidation';
import { RequiredValidation } from '../RequiredValidation';

export class ValidationUtils {
    static GetRequiredValidation(value: string, name: string): IValidation {
        return new RequiredValidation(value, name);
    }

    static GetEmailValidations(value: string, name: string): IValidation {
        return new EmailValidation(value, name);
    }

    static GetRequiredEmailValidations(value: string, name: string): IValidation[] {
        return [this.GetRequiredValidation(value, name), new EmailValidation(value, name)];
    }

    static GetMinLengthValidations(value: string, name: string, minLength: number): IValidation {
        return new MinLengthValidation(minLength, value, name);
    }

    static GetMaxLengthValidations(value: string, name: string, maxLength: number): IValidation {
        return new MaxLengthValidation(maxLength, value, name);
    }

    static GetRequiredMinLengthValidations(value: string, name: string, minLength: number): IValidation[] {
        return [this.GetRequiredValidation(value, name), this.GetMinLengthValidations(value, name, minLength)];
    }

    static GetRequiredMaxLengthValidations(value: string, name: string, maxLength: number): IValidation[] {
        return [this.GetRequiredValidation(value, name), this.GetMaxLengthValidations(value, name, maxLength)];
    }

    static GetMinMaxLengthValidations(value: string, name: string, minLength: number, maxLength: number): IValidation[] {
        return [this.GetMinLengthValidations(value, name, minLength), this.GetMaxLengthValidations(value, name, maxLength)];
    }

    static GetRequiredMinMaxLengthValidations(value: string, name: string, minLength: number, maxLength: number): IValidation[] {
        return [
            this.GetRequiredValidation(value, name),
            this.GetMinLengthValidations(value, name, minLength),
            this.GetMaxLengthValidations(value, name, maxLength),
        ];
    }
}
