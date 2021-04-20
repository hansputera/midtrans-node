import type { ITransaction, ITransactionFail } from "../Interfaces";
import ApiRequest from "../Util/ApiRequest";

export default async function CancelTransaction(isProduction: boolean, orderID: string): Promise<ITransaction | ITransactionFail | undefined>
{
    try {
        const { data }:{ data: ITransaction | ITransactionFail } = await ApiRequest(isProduction).post(`/${orderID}/cancel`);
        return data;
    } catch {
        return undefined;
    }
}