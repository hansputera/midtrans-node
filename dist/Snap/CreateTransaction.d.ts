import type { SnapTransaction } from '../Interfaces/SnapTransaction';
import { IConfig } from '../Interfaces';
/**
 * @description create a transaction
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {SnapTransaction} args create transaction arguments.
 * @param {IConfig} cfg midtrans config
 */
export declare function createTransaction(isProduction: boolean, args: SnapTransaction, cfg: IConfig): Promise<{
    token: string;
    redirect_url: string;
} | undefined>;
