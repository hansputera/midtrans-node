import type { BankAccount } from "../Interfaces";
import IrisRequest from "../Util/IrisRequest";

export default async function BankAccounts(isProduction: boolean): Promise<BankAccount[] | undefined>
{
    try {
        const { data }:{ data: BankAccount[]; } = await IrisRequest(isProduction).get("/bank_accounts");
        return data;
    } catch {
        return undefined;
    }
}