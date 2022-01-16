import type { BankAccount } from '../Interfaces';
import { irisRequest } from '../Util/IrisRequest';
import MidtransNodeError from '../Util/MidtransNodeError';
import type { AxiosError } from 'axios';

/**
 * @description get bank account list
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} token midtrans server key
 */
export async function bankAccounts(
	isProduction: boolean,
	token: string
): Promise<BankAccount[] | undefined> {
	try {
		const { data }: { data: BankAccount[] } = await irisRequest(
			isProduction,
			token
		).get('/bank_accounts');
		return data;
	} catch (e) {
		throw new MidtransNodeError(
			JSON.stringify((e as AxiosError).response?.data)
		);
	}
}
