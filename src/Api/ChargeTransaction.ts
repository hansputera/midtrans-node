import type {
	IChargeTransactionArgs,
	IChargeTransactionResult,
} from '../Interfaces';
import MidtransNodeError from '../Util/MidtransNodeError';
import { apiRequest } from '../Util/ApiRequest';
import type { AxiosError } from 'axios';

/**
 * @description Charge an unpaid transaction
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {IChargeTransactionArgs} args Charge transaction arguments
 * @param {string} token midtrans server key
 */
export async function chargeTransaction(
	isProduction: boolean,
	args: IChargeTransactionArgs,
	token: string
): Promise<IChargeTransactionResult> {
	try {
		const {
			data,
		}: {
			data: IChargeTransactionResult;
		} = await apiRequest(isProduction, 'v2', token).post('/charge', args);

		return data;
	} catch (e) {
		throw new MidtransNodeError(
			JSON.stringify((e as AxiosError).response?.data)
		);
	}
}
