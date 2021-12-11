import MidtransNodeError from '../Util/MidtransNodeError';
import type { IValidateBankResult } from '../Interfaces';
import IrisRequest from '../Util/IrisRequest';

/**
 * @description Validate a bank account
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} bankName Bank name (e.g. BNI, BCA, etc..)
 * @param {string} bankAccountId A bank account id
 * @param {string} token midtrans server key
 */
export async function validateBankAccount(
	isProduction: boolean,
	bankName: string,
	bankAccountId: string,
	token: string
): Promise<IValidateBankResult | undefined> {
	if (!/[A-z]/gi.test(bankName))
		throw new MidtransNodeError('Invalid Bank Name');
	else if (!/[0-9]/gi.test(bankAccountId))
		throw new MidtransNodeError('Invalid Bank account ID');
	try {
		const { data }: { data: IValidateBankResult } = await IrisRequest(
			isProduction,
			token
		).get(
			`/account_validation?bank=${encodeURIComponent(
				bankName
			)}&account=${bankAccountId}`
		);
		return data;
	} catch (e) {
		throw new MidtransNodeError(JSON.stringify(e.response.data));
	}
}
