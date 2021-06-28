import type { SnapTransaction } from "../Interfaces/SnapTransaction";
import MidtransNodeError from "../Util/MidtransNodeError";
import SnapRequest from "../Util/SnapRequest";

export default async function CreateTransaction(isProduction: boolean, args: SnapTransaction, token: string): Promise<{ token: string; redirect_url: string; } | undefined>
{
    try {
        const { data }:{ data: { token: string; redirect_url: string; }} = await SnapRequest(isProduction, token).post("/transactions", args);
        return data;
    } catch(e) {
        throw new MidtransNodeError(JSON.stringify(e.response.data));
    }
}