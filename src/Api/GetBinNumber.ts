import type { BinApiResponse } from "../Interfaces";
import ApiRequest from "../Util/ApiRequest";

export default async function GetBinNumber(isProduction: boolean, binNumber: number, token: string): Promise<BinApiResponse | undefined>
{
    try {
        const { data }:{ data: BinApiResponse } = await ApiRequest(isProduction, "v1", token).get(`/bins/${binNumber}`);
        return data;
    } catch {
        return undefined;
    }
}