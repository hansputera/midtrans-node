import MidtransNodeError from "../Util/MidtransNodeError";
import type { IValidateBankResult } from "../Interfaces";
import IrisRequest from "../Util/IrisRequest";

export default async function ValidateBankAccount(isProduction: boolean, bankName: string, bankAccountId: string, token: string): Promise<IValidateBankResult | undefined>
{
    if (!/[A-z]/gi.test(bankName)) throw new MidtransNodeError("Invalid Bank Name");
    else if (!/[0-9]/gi.test(bankAccountId)) throw new MidtransNodeError("Invalid Bank account ID");
    try {
        const { data }:{ data: IValidateBankResult } = await IrisRequest(isProduction, token).get(`/account_validation?bank=${encodeURIComponent(bankName)}&account=${bankAccountId}`);
        return data;
    } catch {
        return undefined;
    }
}