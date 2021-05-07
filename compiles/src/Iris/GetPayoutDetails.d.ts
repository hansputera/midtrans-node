import type { IPayout } from "../Interfaces/Payouts";
export default function GetPayoutDetails(isProduction: boolean, refNo: string, token: string): Promise<IPayout | undefined>;
