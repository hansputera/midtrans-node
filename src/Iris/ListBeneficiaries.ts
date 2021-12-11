import type { IBeneficiaries } from '../Interfaces';
import { irisRequest } from '../Util/IrisRequest';
import MidtransNodeError from '../Util/MidtransNodeError';

/**
 * @description get beneficiaries list.
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {?number} limit how much data you want to retrieve?
 * @param {string} token midtrans server key
 */
export async function listBeneficiaries(
	isProduction: boolean,
	limit: number | undefined = 0,
	token: string
): Promise<IBeneficiaries[] | undefined> {
	try {
		const { data }: { data: IBeneficiaries[] } = await irisRequest(
			isProduction,
			token
		).get('/beneficiaries');
		return data.splice(0, limit);
	} catch (e) {
		throw new MidtransNodeError(JSON.stringify(e.response.data));
	}
}
