import type { IValidateBankResult } from "../Interfaces";
export default function ValidateBankAccount(isProduction: boolean, bankName: string, bankAccountId: string, token: string): Promise<IValidateBankResult | undefined>;
