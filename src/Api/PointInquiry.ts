import type { IPointInquiry } from '../Interfaces';
import ApiRequest from '../Util/ApiRequest';
import MidtransNodeError from '../Util/MidtransNodeError';

/**
 * @description Get point inquiry.
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} tokenId A token id
 * @param {?number} grossAmount Gross amount
 * @param {string} token midtrans server key
 */
export async function pointInquiry(
	isProduction: boolean,
	tokenId: string,
	grossAmount?: number,
	token?: string
): Promise<IPointInquiry | undefined> {
	const getBody: {
        gross_amount?: number;
    } = {};
	if (grossAmount) getBody.gross_amount = grossAmount;
	try {
		const { data }: { data: IPointInquiry } = await ApiRequest(
			isProduction,
			'v2',
			token
		).get(`/point_inquiry/${tokenId}`, {
			data: getBody,
		});
		return data;
	} catch (e) {
		throw new MidtransNodeError(JSON.stringify(e.response.data));
	}
}
