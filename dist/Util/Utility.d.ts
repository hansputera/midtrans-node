/**
 * @class MidtransUtility
 */
export declare class MidtransUtility {
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
	static generateSignatureKey(
		orderId: string,
		statusCode: string,
		grossAmount: string,
		authKey: string
	): string;
}
