import type { IPayoutRejectRequest, IPayoutSuccessAct } from "../Interfaces/Payouts";
export default function RejectPayouts(isProduction: boolean, args: IPayoutRejectRequest, token: string): Promise<IPayoutSuccessAct | undefined>;
