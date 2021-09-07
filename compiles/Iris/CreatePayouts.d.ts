import type { IPayoutRequest, IPayoutCreateResponse } from "../Interfaces/Payouts";
export default function CreatePayouts(isProduction: boolean, args: IPayoutRequest, token: string): Promise<IPayoutCreateResponse | undefined>;
