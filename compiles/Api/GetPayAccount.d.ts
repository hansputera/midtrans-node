import type { IPayAccount } from "../Interfaces";
export default function GetPayAccount(isProduction: boolean, accountID: string, token: string): Promise<IPayAccount | undefined>;
