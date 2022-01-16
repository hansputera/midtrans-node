/**
 * @description Enable a subscription
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} subscriptionId subscription id want to disable
 * @param {token} token midtrans server key
 */
export declare function enableSubscription(
	isProduction: boolean,
	subscriptionId: string,
	token: string
): Promise<
	| {
			status_message: string;
	  }
	| undefined
>;
