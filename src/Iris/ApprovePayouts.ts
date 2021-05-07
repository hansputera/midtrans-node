import type { IPayoutApproveRequest, IPayoutSuccessAct } from "../Interfaces/Payouts";
import IrisRequest from "../Util/IrisRequest";
import MidtransNodeError from "../Util/MidtransNodeError";

export default async function ApprovePayouts(isProduction: boolean, args: IPayoutApproveRequest, token: string): Promise<IPayoutSuccessAct | undefined>
{
    try {
        const { data }:{ data: IPayoutSuccessAct } = await IrisRequest(isProduction, token).post("/payouts/approve", args);
        return data;
    } catch(e) {
        throw new MidtransNodeError(e.response.data);
    }
}