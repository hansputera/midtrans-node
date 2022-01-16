import type { IBeneficiaries, ISuccessBeneficiaries } from '../Interfaces';
import { irisRequest } from '../Util/IrisRequest';
import MidtransNodeError from '../Util/MidtransNodeError';
import type { AxiosError } from 'axios';

/**
 * @description Create beneficiaries.
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {IBeneficiaries} args create beneficiaries arguments.
 * @param {string} token midtrans server key
 */
export async function createBeneficiaries(
	isProduction: boolean,
	args: IBeneficiaries,
	token: string
): Promise<ISuccessBeneficiaries | undefined> {
	try {
		const { data }: { data: ISuccessBeneficiaries } = await irisRequest(
			isProduction,
			token
		).post('/beneficiaries', args);
		return data;
	} catch (e) {
		throw new MidtransNodeError(
			JSON.stringify((e as AxiosError).response?.data)
		);
	}
}
