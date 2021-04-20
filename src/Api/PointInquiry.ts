import type { IPointInquiry } from "../Interfaces";
import ApiRequest from "../Util/ApiRequest";

export default async function PointInquiry(isProduction: boolean, tokenId: string, grossAmount?: number): Promise<IPointInquiry | undefined>
{
    const getBody = {};
    if (grossAmount) getBody["gross_amount"] = grossAmount;
    try {
        const { data }:{ data: IPointInquiry } = await ApiRequest(isProduction).get(`/point_inquiry/${tokenId}`, {
            data: getBody
        });
        return data;
    } catch {
        return undefined;
    }
}