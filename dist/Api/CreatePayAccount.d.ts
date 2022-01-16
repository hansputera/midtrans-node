import type {
	ICreatePayAccount,
	ICreatePayAccountResponse,
} from '../Interfaces';
/**
 * @description Create a pay account
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {ICreatePayAccount} args create pay account arguments.
 * @param {string} token midtrans server key
 */
export declare function createPayAccount(
	isProduction: boolean,
	args: ICreatePayAccount,
	token: string
): Promise<ICreatePayAccountResponse | undefined>;
