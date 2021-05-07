import type { IPointInquiry } from "../Interfaces";
import ApiRequest from "../Util/ApiRequest";
import MidtransNodeError from "../Util/MidtransNodeError";

export default async function PointInquiry(isProduction: boolean, tokenId: string, grossAmount?: number, token?: string): Promise<IPointInquiry | undefined>
{
    const getBody = {};
    if (grossAmount) getBody["gross_amount"] = grossAmount;
    try {
        const { data }:{ data: IPointInquiry } = await ApiRequest(isProduction, "v2", token).get(`/point_inquiry/${tokenId}`, {
            data: getBody
        });
        return data;
    } catch(e) {
        throw new MidtransNodeError(e.response.data);
    }
}