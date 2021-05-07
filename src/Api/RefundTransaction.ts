import type { IRefundObj, IRefundObjRequest, ITransactionFail } from "../Interfaces";
import ApiRequest from "../Util/ApiRequest";
import MidtransNodeError from "../Util/MidtransNodeError";

export default async function RefundTransaction(isProduction: boolean, orderID: string, args: IRefundObjRequest, token: string): Promise<IRefundObj | ITransactionFail | undefined>
{
    try {
        const { data }:{ data: IRefundObj | ITransactionFail } = await ApiRequest(isProduction, "v2", token).post(`/${orderID}/refund`, args);
        return data;
    } catch(e) {
        throw new MidtransNodeError(e.response.data);
    }
}