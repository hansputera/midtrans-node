import type { IRegisterCardRequest, IRegisterCardResponse } from "../Interfaces";
import ApiRequest from "../Util/ApiRequest";

export default async function RegisterCard(isProduction: boolean, args: IRegisterCardRequest): Promise<IRegisterCardResponse | undefined>
{
    try {
        const { data }:{ data: IRegisterCardResponse } = await ApiRequest(isProduction).post("/card/register", args);
        return data;
    } catch {
        return undefined;
    }
}