import type {
	IPayoutRejectRequest,
	IPayoutSuccessAct,
} from '../Interfaces/Payouts';
import IrisRequest from '../Util/IrisRequest';
import MidtransNodeError from '../Util/MidtransNodeError';

export default async function RejectPayouts(
	isProduction: boolean,
	args: IPayoutRejectRequest,
	token: string
): Promise<IPayoutSuccessAct | undefined> {
	try {
		const { data }: { data: IPayoutSuccessAct } = await IrisRequest(
			isProduction,
			token
		).post('/payouts/reject', args);
		return data;
	} catch (e) {
		throw new MidtransNodeError(JSON.stringify(e.response.data));
	}
}
