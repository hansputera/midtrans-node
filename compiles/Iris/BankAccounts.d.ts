import type { BankAccount } from "../Interfaces";
export default function BankAccounts(isProduction: boolean, token: string): Promise<BankAccount[] | undefined>;
