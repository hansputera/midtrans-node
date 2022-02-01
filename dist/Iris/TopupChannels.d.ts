import { ITopupAggreratorChannel } from '../Interfaces';
/**
 * @description Get topup channels
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} token midtrans server key
 */
export declare function topupChannels(isProduction: boolean, token: string): Promise<ITopupAggreratorChannel[] | undefined>;
