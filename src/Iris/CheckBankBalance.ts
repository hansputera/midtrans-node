import type { ICheckBalanceBank } from '../Interfaces';
import { irisRequest } from '../Util/IrisRequest';
import MidtransNodeError from '../Util/MidtransNodeError';
import type { AxiosError } from 'axios';

/**
 * @description Check bank balance from a bank account id
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} bankAccountId A bank account id
 * @param {string} token midtrans server key
 */
export async function checkBankBalance(
	isProduction: boolean,
	bankAccountId: string,
	token: string
): Promise<ICheckBalanceBank | undefined> {
	try {
		const { data }: { data: ICheckBalanceBank } = await irisRequest(
			isProduction,
			token
		).get(`/${bankAccountId}/balance`);
		return data;
	} catch (e) {
		throw new MidtransNodeError(
			JSON.stringify((e as AxiosError).response?.data)
		);
	}
}
