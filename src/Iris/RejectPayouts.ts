import type { IPayoutRejectRequest, IPayoutSuccessAct } from "../Interfaces/Payouts";
import IrisRequest from "../Util/IrisRequest";

export default async function RejectPayouts(isProduction: boolean, args: IPayoutRejectRequest, token: string): Promise<IPayoutSuccessAct | undefined>
{
    try {
        const { data }:{ data: IPayoutSuccessAct } = await IrisRequest(isProduction, token).post("/payouts/reject", args);
        return data;
    } catch {
        return undefined;
    }
}