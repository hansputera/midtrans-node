import type {
	IRegisterCardRequest,
	IRegisterCardResponse,
} from '../Interfaces';
/**
 * @description Register a card
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {IRegisterCardRequest} args Register card arguments.
 * @param {string} token midtrans server key
 */
export declare function registerCard(
	isProduction: boolean,
	args: IRegisterCardRequest,
	token: string
): Promise<IRegisterCardResponse | undefined>;
