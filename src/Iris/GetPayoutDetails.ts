import type { IPayout } from '../Interfaces/Payouts';
import IrisRequest from '../Util/IrisRequest';
import MidtransNodeError from '../Util/MidtransNodeError';

export default async function GetPayoutDetails(
	isProduction: boolean,
	refNo: string,
	token: string
): Promise<IPayout | undefined> {
	try {
		const { data }: { data: IPayout } = await IrisRequest(
			isProduction,
			token
		).get(`/payouts/${refNo}`);
		return data;
	} catch (e) {
		throw new MidtransNodeError(JSON.stringify(e.response.data));
	}
}
