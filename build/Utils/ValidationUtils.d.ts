import { IValidation } from '../IValidation';
export declare class ValidationUtils {
    static GetRequiredValidation(value: string, name: string): IValidation;
    static GetEmailValidations(value: string, name: string): IValidation;
    static GetRequiredEmailValidations(value: string, name: string): IValidation[];
    static GetMinLengthValidations(value: string, name: string, minLength: number): IValidation;
    static GetMaxLengthValidations(value: string, name: string, maxLength: number): IValidation;
    static GetRequiredMinLengthValidations(value: string, name: string, minLength: number): IValidation[];
    static GetRequiredMaxLengthValidations(value: string, name: string, maxLength: number): IValidation[];
    static GetMinMaxLengthValidations(value: string, name: string, minLength: number, maxLength: number): IValidation[];
    static GetRequiredMinMaxLengthValidations(value: string, name: string, minLength: number, maxLength: number): IValidation[];
}
