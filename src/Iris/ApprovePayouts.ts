import type { IPayoutApproveRequest, IPayoutSuccessAct } from "../Interfaces/Payouts";
import IrisRequest from "../Util/IrisRequest";

export default async function ApprovePayouts(isProduction: boolean, args: IPayoutApproveRequest): Promise<IPayoutSuccessAct | undefined>
{
    try {
        const { data }:{ data: IPayoutSuccessAct } = await IrisRequest(isProduction).post("/payouts/approve", args);
        return data;
    } catch {
        return undefined;
    }
}