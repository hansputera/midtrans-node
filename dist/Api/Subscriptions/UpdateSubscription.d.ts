import type { IUpdateSubcription, ISubcription } from '../../Interfaces';
/**
 * @description Update a subscription
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} subscriptionId subscription id want to disable
 * @param {IUpdateSubcription} args update subscription arguments
 * @param {string} token midtrans auth key
 */
export declare function updateSubscription(isProduction: boolean, subscriptionId: string, args: IUpdateSubcription, token: string): Promise<ISubcription | undefined>;
