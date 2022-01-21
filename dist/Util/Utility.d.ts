/**
 * @class MidtransUtility
 */
export declare class MidtransUtility {
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
	static generateSignatureKey(
		orderId: string,
		statusCode: number,
		grossAmount: number,
		authKey: string
	): string;
}
