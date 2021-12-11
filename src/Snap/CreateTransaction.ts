import type { SnapTransaction } from '../Interfaces/SnapTransaction';
import MidtransNodeError from '../Util/MidtransNodeError';
import SnapRequest from '../Util/SnapRequest';

/**
 * @description create a transaction
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {SnapTransaction} args create transaction arguments.
 * @param {?string} token midtrans server key
 */
export async function createTransaction(
	isProduction: boolean,
	args: SnapTransaction,
	token: string
): Promise<{ token: string; redirect_url: string } | undefined> {
	try {
		const { data }: { data: { token: string; redirect_url: string } } =
			await SnapRequest(isProduction, token).post('/transactions', args);
		return data;
	} catch (e) {
		throw new MidtransNodeError(JSON.stringify(e.response.data));
	}
}
