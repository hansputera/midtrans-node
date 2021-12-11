"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MidtransNodeError extends Error {
    constructor(message) {
        super(message);
        this.name = 'MidtransNodeError';
    }
}
exports.default = MidtransNodeError;
