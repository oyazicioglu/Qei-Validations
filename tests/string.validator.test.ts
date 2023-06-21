import { IValidator } from '../src/validators/IValidator';
import { StringValidator } from '../src/validators/StringValidator';

describe('String Validator Test', () => {
    let stringValidator: IValidator;

    beforeEach(() => {
        stringValidator = new StringValidator('jane', 'username');
    });

    test('Value should be jane', () => {
        expect(stringValidator.value).toEqual('jane');
    });

    test('Validator Name should be username', () => {
        expect(stringValidator.validatorName).toEqual('username');
    });

    test('Validation result should not valid', () => {
        stringValidator.value = 13;
        const result = stringValidator.validate();
        expect(result.isValid).toEqual(false);
    });
});
