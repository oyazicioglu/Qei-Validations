import { IValidator } from "./IValidator";

export class StringValidator implements IValidator {
    constructor(private value: string) {}
    validate(): boolean {
        return this.value !== "";
    }
}