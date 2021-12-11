import type { IBeneficiaries } from '../Interfaces';
import IrisRequest from '../Util/IrisRequest';
import MidtransNodeError from '../Util/MidtransNodeError';

export default async function ListBeneficiaries(
	isProduction: boolean,
	limit = 0,
	token: string
): Promise<IBeneficiaries[] | undefined> {
	try {
		const { data }: { data: IBeneficiaries[] } = await IrisRequest(
			isProduction,
			token
		).get('/beneficiaries');
		return data.splice(0, limit);
	} catch (e) {
		throw new MidtransNodeError(JSON.stringify(e.response.data));
	}
}
