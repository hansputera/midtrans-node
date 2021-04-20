import ApiRequest from "../Util/ApiRequest";
import type { ITransaction, ITransactionFail } from "../Interfaces";

export default async function ApproveTransaction(isProduction: boolean, orderID: string): Promise<ITransaction | ITransactionFail | undefined>
{
    try {
        const { data }:{ data: ITransaction | ITransactionFail } = await ApiRequest(isProduction).post(`/${orderID}/approve`);
        return data;
    } catch {
        return undefined;
    }
}