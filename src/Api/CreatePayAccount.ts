import type { ICreatePayAccount, ICreatePayAccountResponse } from "../Interfaces";
import ApiRequest from "../Util/ApiRequest";

export default async function CreatePayAccount(isProduction: boolean, args: ICreatePayAccount): Promise<ICreatePayAccountResponse | undefined>
{
    try {
        const { data }:{ data: ICreatePayAccountResponse } = await ApiRequest(isProduction).post("/pay/account", args);
        return data;
    } catch {
        return undefined;
    }
}