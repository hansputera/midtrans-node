import type { IRefundObj, ITransactionFail } from "../Interfaces";
export default function DirectRefundTransaction(isProduction: boolean, orderID: string, token: string): Promise<IRefundObj | ITransactionFail | undefined>;
