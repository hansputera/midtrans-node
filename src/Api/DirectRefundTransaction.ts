import type { IRefundObj, ITransactionFail } from "../Interfaces";
import ApiRequest from "../Util/ApiRequest";

export default async function DirectRefundTransaction(isProduction: boolean, orderID: string): Promise<IRefundObj | ITransactionFail | undefined>
{
    try {
        const { data }:{ data: IRefundObj | ITransactionFail } = await ApiRequest(isProduction).post(`/${orderID}/refund/online/direct`);
        return data;
    } catch {
        return undefined;
    }
}