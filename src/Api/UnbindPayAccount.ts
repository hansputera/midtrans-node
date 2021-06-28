import type { IPayAccountUnBind } from "../Interfaces";
import ApiRequest from "../Util/ApiRequest";
import MidtransNodeError from "../Util/MidtransNodeError";

export default async function UnbindPayAccount(isProduction: boolean, accountID: string, token: string): Promise<IPayAccountUnBind | undefined>
{
    try {
        const { data }:{ data: IPayAccountUnBind } = await ApiRequest(isProduction, "v2", token).post(`/pay/account/${accountID}/unbind`);
        return data;
    } catch(e) {
        throw new MidtransNodeError(JSON.stringify(e.response.data));
    }
}