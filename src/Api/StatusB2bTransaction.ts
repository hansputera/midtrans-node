import type { ITransaction } from "../Interfaces";
import ApiRequest from "../Util/ApiRequest";

export default async function StatusB2bTransaction(isProduction: boolean, orderID: string, page = 0, per_page = 10): Promise<{ status_code: string; status_message: string; transactions: ITransaction[]; } | undefined>
{
    try {
        const { data }:{ data: { status_code: string; status_message: string; transactions: ITransaction[]; }} = await ApiRequest(isProduction).get(`/${orderID}/status/b2b?page=${page}&per_page=${per_page}`);
        return data;
    } catch {
        return undefined;
    }
}