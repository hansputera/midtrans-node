'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * @class MidtransNodeError
 */
class MidtransNodeError extends Error {
	/**
	 * @param {string} message Midtrans message error
	 */
	constructor(message) {
		super(message);
		this.name = 'MidtransNodeError';
	}
}
exports.default = MidtransNodeError;
