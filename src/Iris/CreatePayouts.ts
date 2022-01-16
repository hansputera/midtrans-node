import type {
	IPayoutRequest,
	IPayoutCreateResponse,
} from '../Interfaces/Payouts';
import { irisRequest } from '../Util/IrisRequest';
import MidtransNodeError from '../Util/MidtransNodeError';
import type { AxiosError } from 'axios';

/**
 * @description Create payouts
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {IPayoutRequest} args create payouts arguments.
 * @param {string} token midtrans server key
 */
export async function createPayouts(
	isProduction: boolean,
	args: IPayoutRequest,
	token: string
): Promise<IPayoutCreateResponse | undefined> {
	try {
		const { data }: { data: IPayoutCreateResponse } = await irisRequest(
			isProduction,
			token
		).post('/payouts', args);
		return data;
	} catch (e) {
		throw new MidtransNodeError(
			JSON.stringify((e as AxiosError).response?.data)
		);
	}
}
