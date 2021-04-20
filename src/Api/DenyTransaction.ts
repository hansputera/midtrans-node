import type { ITransaction, ITransactionFail } from "../Interfaces";
import ApiRequest from "../Util/ApiRequest";

export default async function DenyTransaction(isProduction: boolean, orderID: string): Promise<ITransaction | ITransactionFail | undefined>
{
    try {
        const { data }:{ data: ITransaction | ITransactionFail } = await ApiRequest(isProduction).post(`/${orderID}/deny`);
        return data;
    } catch {
        return undefined;
    }
}