import type { ITransaction } from "../Interfaces";
export default function StatusB2bTransaction(isProduction: boolean, orderID: string, page: number, per_page: number, token: string): Promise<{
    status_code: string;
    status_message: string;
    transactions: ITransaction[];
} | undefined>;
