import type { IPointInquiry } from '../Interfaces';
import { apiRequest } from '../Util/ApiRequest';
import MidtransNodeError from '../Util/MidtransNodeError';
import type { AxiosError } from 'axios';

/**
 * @description Get point inquiry.
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} tokenId A token id
 * @param {string} token midtrans server key
 * @param {?number} grossAmount Gross amount
 */
export async function pointInquiry(
	isProduction: boolean,
	tokenId: string,
	token: string,
	grossAmount?: number
): Promise<IPointInquiry | undefined> {
	const getBody: {
		gross_amount?: number;
	} = {};
	if (grossAmount) getBody.gross_amount = grossAmount;
	try {
		const { data }: { data: IPointInquiry } = await apiRequest(
			isProduction,
			'v2',
			token
		).get(`/point_inquiry/${tokenId}`, {
			data: getBody,
		});
		return data;
	} catch (e) {
		throw new MidtransNodeError(
			JSON.stringify((e as AxiosError).response?.data)
		);
	}
}
