import type { IPayoutRejectRequest, IPayoutSuccessAct } from "../Interfaces/Payouts";
import IrisRequest from "../Util/IrisRequest";

export default async function RejectPayouts(isProduction: boolean, args: IPayoutRejectRequest): Promise<IPayoutSuccessAct | undefined>
{
    try {
        const { data }:{ data: IPayoutSuccessAct } = await IrisRequest(isProduction).post("/payouts/reject", args);
        return data;
    } catch {
        return undefined;
    }
}