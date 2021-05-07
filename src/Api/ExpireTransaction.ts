import { ITransaction, ITransactionFail } from "../Interfaces";
import ApiRequest from "../Util/ApiRequest";

export default async function ExpireTransaction(isProduction: boolean, orderID: string, token: string): Promise<ITransaction | ITransactionFail | undefined>
{
    try {
        const { data }:{ data: ITransaction | ITransactionFail } = await ApiRequest(isProduction, "v2", token).post(`/${orderID}/expire`);
        return data;
    } catch {
        return undefined;
    }
}