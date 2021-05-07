import type { ICheckBalanceBank } from "../Interfaces";
import IrisRequest from "../Util/IrisRequest";

export default async function CheckBankBalance(isProduction: boolean, bankAccountId: string, token: string): Promise<ICheckBalanceBank | undefined>
{
    try {
        const { data }:{ data: ICheckBalanceBank } = await IrisRequest(isProduction, token).get(`/${bankAccountId}/balance`);
        return data;
    } catch {
        return undefined;
    }
}