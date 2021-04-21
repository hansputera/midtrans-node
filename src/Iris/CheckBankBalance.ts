import type { ICheckBalanceBank } from "../Interfaces";
import IrisRequest from "../Util/IrisRequest";

export default async function CheckBankBalance(isProduction: boolean, bankAccountId: string): Promise<ICheckBalanceBank | undefined>
{
    try {
        const { data }:{ data: ICheckBalanceBank } = await IrisRequest(isProduction).get(`/${bankAccountId}/balance`);
        return data;
    } catch {
        return undefined;
    }
}