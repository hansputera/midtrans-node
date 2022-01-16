import type { SnapTransaction } from '../Interfaces/SnapTransaction';
/**
 * @description create a transaction
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {SnapTransaction} args create transaction arguments.
 * @param {?string} token midtrans server key
 */
export declare function createTransaction(
	isProduction: boolean,
	args: SnapTransaction,
	token: string
): Promise<
	| {
			token: string;
			redirect_url: string;
	  }
	| undefined
>;
