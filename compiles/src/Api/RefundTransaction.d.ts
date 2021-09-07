import type { IRefundObj, IRefundObjRequest, ITransactionFail } from "../Interfaces";
export default function RefundTransaction(isProduction: boolean, orderID: string, args: IRefundObjRequest, token: string): Promise<IRefundObj | ITransactionFail | undefined>;
