import { irisRequest } from '../Util/IrisRequest';
import MidtransNodeError from '../Util/MidtransNodeError';

/**
 * @description Ping iris api.
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {?string} token midtrans server key
 */
export async function ping(
	isProduction: boolean,
	token: string
): Promise<string | undefined> {
	try {
		const { data }: { data: string } = await irisRequest(
			isProduction,
			token
		).get('/ping');
		return data;
	} catch (e) {
		throw new MidtransNodeError(JSON.stringify(e.response.data));
	}
}
