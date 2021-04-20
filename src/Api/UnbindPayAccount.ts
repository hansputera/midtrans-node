import type { IPayAccountUnBind } from "../Interfaces";
import ApiRequest from "../Util/ApiRequest";

export default async function UnbindPayAccount(isProduction: boolean, accountID: string): Promise<IPayAccountUnBind | undefined>
{
    try {
        const { data }:{ data: IPayAccountUnBind } = await ApiRequest(isProduction).post(`/pay/account/${accountID}/unbind`);
        return data;
    } catch {
        return undefined;
    }
}