import type { BankAccount } from "../Interfaces";
import IrisRequest from "../Util/IrisRequest";

export default async function BankAccounts(isProduction: boolean, token: string): Promise<BankAccount[] | undefined>
{
    try {
        const { data }:{ data: BankAccount[]; } = await IrisRequest(isProduction, token).get("/bank_accounts");
        return data;
    } catch {
        return undefined;
    }
}