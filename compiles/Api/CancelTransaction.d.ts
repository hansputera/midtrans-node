import type { ITransaction, ITransactionFail } from "../Interfaces";
export default function CancelTransaction(isProduction: boolean, orderID: string, token: string): Promise<ITransaction | ITransactionFail | undefined>;
