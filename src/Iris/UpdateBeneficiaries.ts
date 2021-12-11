import type { IBeneficiaries, ISuccessBeneficiaries } from '../Interfaces';
import IrisRequest from '../Util/IrisRequest';
import MidtransNodeError from '../Util/MidtransNodeError';

/**
 * @description update beneficiaries.
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} aliasName Beneficiaries alias name.
 * @param {IBeneficiaries} args update beneficiaries arguments.
 * @param {string} token midtrans server key
 */
export async function updateBeneficiaries(
	isProduction: boolean,
	aliasName: string,
	args: IBeneficiaries,
	token: string
): Promise<ISuccessBeneficiaries | undefined> {
	try {
		const { data }: { data: ISuccessBeneficiaries } = await IrisRequest(
			isProduction,
			token
		).patch(`/beneficiaries/${aliasName}`, args);
		return data;
	} catch (e) {
		throw new MidtransNodeError(JSON.stringify(e.response.data));
	}
}
