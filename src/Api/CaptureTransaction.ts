import ApiRequest from "../Util/ApiRequest";
import { ITransaction, ITransactionFail } from "../Interfaces";
import MidtransNodeError from "../Util/MidtransNodeError";

export default async function CaptureTransaction(isProduction: boolean, orderID: string, grossAmount?: number, token?: string): Promise<ITransaction | ITransactionFail | undefined>
{
    const postBody = {
        "transaction_id": orderID
    };
    if (grossAmount) postBody["gross_amount"] = Math.floor(grossAmount);
    try {
        const { data }: { data: ITransaction | ITransactionFail } = await ApiRequest(isProduction, "v2", token).post("/capture", postBody);
        return data;
    } catch(e) {
        throw new MidtransNodeError(JSON.stringify(e.response.data));
    }
}