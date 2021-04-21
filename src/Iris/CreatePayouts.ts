import type { IPayoutRequest, IPayoutCreateResponse } from "../Interfaces/Payouts";
import IrisRequest from "../Util/IrisRequest";

export default async function CreatePayouts(isProduction: boolean, args: IPayoutRequest): Promise<IPayoutCreateResponse | undefined>
{
    try {
        const { data }:{ data: IPayoutCreateResponse } = await IrisRequest(isProduction).post("/payouts", args);
        return data;
    } catch {
        return undefined;
    }
}