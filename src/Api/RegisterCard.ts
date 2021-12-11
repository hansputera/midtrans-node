import type {
	IRegisterCardRequest,
	IRegisterCardResponse,
} from '../Interfaces';
import ApiRequest from '../Util/ApiRequest';
import MidtransNodeError from '../Util/MidtransNodeError';

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
		const { data }: { data: IRegisterCardResponse } = await ApiRequest(
			isProduction,
			'v2',
			token
		).post('/card/register', args);
		return data;
	} catch (e) {
		throw new MidtransNodeError(JSON.stringify(e.response.data));
	}
}
