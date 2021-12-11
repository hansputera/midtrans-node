import type { BinApiResponse } from '../Interfaces';
import ApiRequest from '../Util/ApiRequest';
import MidtransNodeError from '../Util/MidtransNodeError';

/**
 * @description Get a bin number details
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {number} binNumber A bin number
 * @param {string} token midtrans server key
 */
export async function getBinNumber(
	isProduction: boolean,
	binNumber: number,
	token: string
): Promise<BinApiResponse | undefined> {
	try {
		const { data }: { data: BinApiResponse } = await ApiRequest(
			isProduction,
			'v1',
			token
		).get(`/bins/${binNumber}`);
		return data;
	} catch (e) {
		throw new MidtransNodeError(JSON.stringify(e.response.data));
	}
}
