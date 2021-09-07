import { ITransaction, ITransactionFail } from "../Interfaces";
export default function ExpireTransaction(isProduction: boolean, orderID: string, token: string): Promise<ITransaction | ITransactionFail | undefined>;
