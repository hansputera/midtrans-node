/**
 * @description Disable a subscription
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} subscriptionId subscription id want to disable
 * @param {string} token midtrans auth key
 */
export declare function disableSubscription(isProduction: boolean, subscriptionId: string, token: string): Promise<{
    status_message: string;
} | undefined>;
