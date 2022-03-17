import type { IValidateBankResult } from '../Interfaces';
/**
 * @description Validate a bank account
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} bankName Bank name (e.g. BNI, BCA, etc..)
 * @param {string} bankAccountId A bank account id
 * @param {string} token midtrans server key
 */
export declare function validateBankAccount(isProduction: boolean, bankName: string, bankAccountId: string, token: string): Promise<IValidateBankResult | undefined>;
