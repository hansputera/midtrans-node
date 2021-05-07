import type { IRefundObj, ITransactionFail } from "../Interfaces";
import ApiRequest from "../Util/ApiRequest";
import MidtransNodeError from "../Util/MidtransNodeError";

export default async function DirectRefundTransaction(isProduction: boolean, orderID: string, token: string): Promise<IRefundObj | ITransactionFail | undefined>
{
    try {
        const { data }:{ data: IRefundObj | ITransactionFail } = await ApiRequest(isProduction, "v2", token).post(`/${orderID}/refund/online/direct`);
        return data;
    } catch(e) {
        throw new MidtransNodeError(e.response.data);
    }
}