import type { ICheckBalanceBank } from "../Interfaces";
export default function CheckBankBalance(isProduction: boolean, bankAccountId: string, token: string): Promise<ICheckBalanceBank | undefined>;
