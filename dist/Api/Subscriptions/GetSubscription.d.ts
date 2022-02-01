import type { ISubcription } from '../../Interfaces';
/**
 * @description Get a subscription detail
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} subscriptionId subscription id want to disable
 * @param {string} token midtrans server key
 */
export declare function getSubscription(isProduction: boolean, subscriptionId: string, token: string): Promise<ISubcription | undefined>;
