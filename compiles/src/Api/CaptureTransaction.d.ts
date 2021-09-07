import { ITransaction, ITransactionFail } from "../Interfaces";
export default function CaptureTransaction(isProduction: boolean, orderID: string, grossAmount?: number, token?: string): Promise<ITransaction | ITransactionFail | undefined>;
