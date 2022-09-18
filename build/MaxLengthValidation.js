"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MaxLengthValidation_maxLength;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxLengthValidation = void 0;
const IValidation_1 = require("./IValidation");
class MaxLengthValidation {
    constructor(maxLength, value, name) {
        this.maxLength = maxLength;
        this.value = value;
        this.name = name;
        _MaxLengthValidation_maxLength.set(this, void 0);
        __classPrivateFieldSet(this, _MaxLengthValidation_maxLength, maxLength, "f");
    }
    validate() {
        const isValid = !!this.value && this.value.toString().length <= __classPrivateFieldGet(this, _MaxLengthValidation_maxLength, "f");
        return new IValidation_1.ValidationError(2002, isValid ? undefined : `${this.name} must be less then ${__classPrivateFieldGet(this, _MaxLengthValidation_maxLength, "f")} characters long.`);
    }
    getLength() {
        return __classPrivateFieldGet(this, _MaxLengthValidation_maxLength, "f");
    }
}
exports.MaxLengthValidation = MaxLengthValidation;
_MaxLengthValidation_maxLength = new WeakMap();
