/**
 * @class MidtransNodeError
 */
export default class MidtransNodeError extends Error {
	/**
	 * @param {string} message Midtrans message error
	 */
	constructor(message: string) {
		super(message);
		this.name = 'MidtransNodeError';
	}
}
