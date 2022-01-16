import type {
	ICreateSubcription,
	ICreateSubcriptionResponse,
} from '../../Interfaces';
/**
 * @description Create a subscription
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {ICreateSubcription} args Create subscription args
 * @param {string} token Midtrans server key
 */
export declare function createSubscription(
	isProduction: boolean,
	args: ICreateSubcription,
	token: string
): Promise<ICreateSubcriptionResponse | undefined>;
