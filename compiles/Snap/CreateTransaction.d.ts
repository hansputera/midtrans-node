import type { SnapTransaction } from "../Interfaces/SnapTransaction";
export default function CreateTransaction(isProduction: boolean, args: SnapTransaction, token: string): Promise<{
    token: string;
    redirect_url: string;
} | undefined>;
