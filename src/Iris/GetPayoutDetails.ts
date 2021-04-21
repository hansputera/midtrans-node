import type { IPayout } from "../Interfaces/Payouts";
import IrisRequest from "../Util/IrisRequest";

export default async function GetPayoutDetails(isProduction: boolean, refNo: string): Promise<IPayout | undefined>
{
    try {
        const { data }:{ data: IPayout } = await IrisRequest(isProduction).get(`/payouts/${refNo}`);
        return data;
    } catch {
        return undefined;
    }
}