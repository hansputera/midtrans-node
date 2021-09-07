import type { IPayAccountUnBind } from "../Interfaces";
export default function UnbindPayAccount(isProduction: boolean, accountID: string, token: string): Promise<IPayAccountUnBind | undefined>;
