import type { ITransaction, ITransactionFail } from "../Interfaces";
export default function ApproveTransaction(isProduction: boolean, orderID: string, token: string): Promise<ITransaction | ITransactionFail | undefined>;
