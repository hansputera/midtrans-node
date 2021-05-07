import type { ITransactionStatus, ITransactionFail } from "../Interfaces";
import ApiRequest from "../Util/ApiRequest";
import MidtransNodeError from "../Util/MidtransNodeError";

export default async function StatusTransaction(isProduction: boolean, orderID: string, token: string): Promise<ITransactionStatus | ITransactionFail | undefined>
{
    try {
        const { data }:{ data: ITransactionStatus | ITransactionFail } = await ApiRequest(isProduction, "v2", token).get(`/${orderID}/status`);
        return data;
    } catch(e) {
        throw new MidtransNodeError(e.response.data);
    }
}