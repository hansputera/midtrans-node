import type {
	IRegisterCardRequest,
	IRegisterCardResponse,
} from '../Interfaces';
import { apiRequest } from '../Util/ApiRequest';
import MidtransNodeError from '../Util/MidtransNodeError';
import type { AxiosError } from 'axios';

/**
 * @description Register a card
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {IRegisterCardRequest} args Register card arguments.
 * @param {string} token midtrans server key
 */
export async function registerCard(
	isProduction: boolean,
	args: IRegisterCardRequest,
	token: string
): Promise<IRegisterCardResponse | undefined> {
	try {
		const { data }: { data: IRegisterCardResponse } = await apiRequest(
			isProduction,
			'v2',
			token
		).post('/card/register', args);
		return data;
	} catch (e) {
		throw new MidtransNodeError(
			JSON.stringify((e as AxiosError).response?.data)
		);
	}
}
