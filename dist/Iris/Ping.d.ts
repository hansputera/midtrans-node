/**
 * @description Ping iris api.
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {?string} token midtrans server key
 */
export declare function ping(
	isProduction: boolean,
	token: string
): Promise<string | undefined>;
