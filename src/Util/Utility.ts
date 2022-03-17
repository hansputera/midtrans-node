import crypto from 'crypto';

/**
 * @class MidtransUtility
 */
export class MidtransUtility {
	/**
	 * Generate signature key.
	 * @flow SHA512(ORDER_ID + STATUS_CODE + GROSS_AMOUNT + AUTH_KEY)
	 *
	 * @param {string} orderId Order ID
	 * @param {string} statusCode Status Code
	 * @param {string} grossAmount Gross amount
	 * @param {string} authKey Midtrans server key
	 * @return {string} Hex string.
	 */
	public static generateSignatureKey(
		orderId: string,
		statusCode: string,
		grossAmount: string,
		authKey: string
	): string {
		if (typeof statusCode !== 'string' || typeof grossAmount !== 'string') {
			throw new TypeError('Status Code, and Gross Amount must be a string!');
		} else if (typeof authKey !== 'string') {
			throw new TypeError('The authKey must be a string!');
		}
		return crypto
			.createHash('sha512')
			.update(`${orderId}${statusCode}${grossAmount}${authKey}`)
			.digest('hex');
	}
}
