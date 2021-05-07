import type { IRefundObj, IRefundObjRequest, ITransactionFail } from "../Interfaces";
import ApiRequest from "../Util/ApiRequest";

export default async function RefundTransaction(isProduction: boolean, orderID: string, args: IRefundObjRequest, token: string): Promise<IRefundObj | ITransactionFail | undefined>
{
    const { data }:{ data: IRefundObj | ITransactionFail } = await ApiRequest(isProduction, "v2", token).post(`/${orderID}/refund`, args);
    return data;
}