import type { IRegisterCardRequest, IRegisterCardResponse } from "../Interfaces";
import ApiRequest from "../Util/ApiRequest";
import MidtransNodeError from "../Util/MidtransNodeError";

export default async function RegisterCard(isProduction: boolean, args: IRegisterCardRequest, token: string): Promise<IRegisterCardResponse | undefined>
{
    try {
        const { data }:{ data: IRegisterCardResponse } = await ApiRequest(isProduction, "v2", token).post("/card/register", args);
        return data;
    } catch(e) {
        throw new MidtransNodeError(e.response.data);
    }
}