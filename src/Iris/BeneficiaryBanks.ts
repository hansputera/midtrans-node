import type { BeneficiaryBank } from '../Interfaces';
import { irisRequest } from '../Util/IrisRequest';
import MidtransNodeError from '../Util/MidtransNodeError';
import type { AxiosError } from 'axios';

/**
 * @description Get beneficiary banks.
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} token midtrans server key
 */
export async function beneficiaryBanks(
	isProduction: boolean,
	token: string
): Promise<BeneficiaryBank[] | undefined> {
	try {
		const { data }: { data: BeneficiaryBank[] } = await irisRequest(
			isProduction,
			token
		).get('/beneficiary_banks');
		return data;
	} catch (e) {
		throw new MidtransNodeError(
			JSON.stringify((e as AxiosError).response?.data)
		);
	}
}
