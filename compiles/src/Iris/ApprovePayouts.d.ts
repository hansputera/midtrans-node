import type { IPayoutApproveRequest, IPayoutSuccessAct } from "../Interfaces/Payouts";
export default function ApprovePayouts(isProduction: boolean, args: IPayoutApproveRequest, token: string): Promise<IPayoutSuccessAct | undefined>;
