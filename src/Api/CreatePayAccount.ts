import type {
	ICreatePayAccount,
	ICreatePayAccountResponse,
} from '../Interfaces';
import ApiRequest from '../Util/ApiRequest';
import MidtransNodeError from '../Util/MidtransNodeError';

export async function createPayAccount(
	isProduction: boolean,
	args: ICreatePayAccount,
	token: string
): Promise<ICreatePayAccountResponse | undefined> {
	try {
		const { data }: { data: ICreatePayAccountResponse } = await ApiRequest(
			isProduction,
			'v2',
			token
		).post('/pay/account', args);
		return data;
	} catch (e) {
		throw new MidtransNodeError(JSON.stringify(e.response.data));
	}
}
