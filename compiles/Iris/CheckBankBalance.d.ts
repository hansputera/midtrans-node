import type { ICheckBalanceBank } from '../Interfaces';
/**
 * @description Check bank balance from a bank account id
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} bankAccountId A bank account id
 * @param {string} token midtrans server key
 */
export declare function checkBankBalance(isProduction: boolean, bankAccountId: string, token: string): Promise<ICheckBalanceBank | undefined>;
