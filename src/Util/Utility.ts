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
	 * @param {number} statusCode Status Code
	 * @param {number} grossAmount Gross amount
	 * @param {string} authKey Midtrans server key
	 * @return {string} Hex string.
	 */
	public static generateSignatureKey(
		orderId: string,
		statusCode: number,
		grossAmount: number,
		authKey: string
	): string {
		return crypto
			.createHash('sha512')
			.update(
				`${orderId}${statusCode}${grossAmount}${authKey}`)
			.digest('hex');
	}
}
