import ApiRequest from "../Util/ApiRequest";
import type { ITransaction, ITransactionFail } from "../Interfaces";
import MidtransNodeError from "../Util/MidtransNodeError";

export default async function ApproveTransaction(isProduction: boolean, orderID: string, token: string): Promise<ITransaction | ITransactionFail | undefined>
{
    try {
        const { data }:{ data: ITransaction | ITransactionFail } = await ApiRequest(isProduction, "v2", token).post(`/${orderID}/approve`);
        return data;
    } catch(e) {
        throw new MidtransNodeError(JSON.stringify(e.response.data));
    }
}