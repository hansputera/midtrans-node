import IrisRequest from '../Util/IrisRequest';
import MidtransNodeError from '../Util/MidtransNodeError';

export default async function Ping(
	isProduction: boolean,
	token: string
): Promise<string | undefined> {
	try {
		const { data }: { data: string } = await IrisRequest(
			isProduction,
			token
		).get('/ping');
		return data;
	} catch (e) {
		throw new MidtransNodeError(JSON.stringify(e.response.data));
	}
}
