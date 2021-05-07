import type { IPayAccount } from "../Interfaces";
import ApiRequest from "../Util/ApiRequest";

export default async function GetPayAccount(isProduction: boolean, accountID: string, token: string): Promise<IPayAccount | undefined>
{
    try {
        const { data }:{ data: IPayAccount } = await ApiRequest(isProduction, "v2", token).get(`/pay/account/${accountID}`);
        return data;
    } catch {
        return undefined;
    }
}