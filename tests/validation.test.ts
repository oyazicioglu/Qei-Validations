import { StringValidator } from '../src';
import { IValidation, Validation } from '../src/validation';
import { NumberValidator } from '../src/validators';

describe('Validation Test Suite', () => {
    let validation: IValidation;

    beforeEach(() => {
        validation = new Validation();

        const stringValidator = new StringValidator('jane', 'string-input');
        const numberValidator = new NumberValidator(10, 'number-input');
        validation.addValidattor(stringValidator);
        validation.addValidattor(numberValidator);
    });

    test('Validation count should be 2', () => {
        expect(validation.validators.length).toEqual(2);
    });

    test('Validation result should be valid', () => {
        const result = validation.validateAll();
        expect(result.isValid).toEqual(true);
    });
});
