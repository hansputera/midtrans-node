import { ITopupAggreratorChannel } from '../Interfaces';
import IrisRequest from '../Util/IrisRequest';
import MidtransNodeError from '../Util/MidtransNodeError';

export default async function TopupChannels(
	isProduction: boolean,
	token: string
): Promise<ITopupAggreratorChannel[] | undefined> {
	try {
		const { data }: { data: ITopupAggreratorChannel[] } = await IrisRequest(
			isProduction,
			token
		).get('/channels');
		return data;
	} catch (e) {
		throw new MidtransNodeError(JSON.stringify(e.response.data));
	}
}
