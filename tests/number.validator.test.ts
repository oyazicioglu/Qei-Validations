import { NumberValidator, IValidator } from '../src/validators';
describe('Number Validator Test', () => {
    let numberValidator: IValidator;

    beforeEach(() => {
        numberValidator = new NumberValidator(10, 'number-input');
    });

    test('Value should be jane', () => {
        expect(numberValidator.value).toEqual(10);
    });

    test('Validator Name should be number-input', () => {
        expect(numberValidator.validatorName).toEqual('number-input');
    });

    test('Validation result should not valid', () => {
        numberValidator.value = '10';
        const result = numberValidator.validate();
        expect(result.isValid).toEqual(false);
    });
});
