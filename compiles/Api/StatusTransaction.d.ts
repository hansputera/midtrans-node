import type { ITransactionStatus, ITransactionFail } from "../Interfaces";
export default function StatusTransaction(isProduction: boolean, orderID: string, token: string): Promise<ITransactionStatus | ITransactionFail | undefined>;
