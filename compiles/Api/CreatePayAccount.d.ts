import type { ICreatePayAccount, ICreatePayAccountResponse } from "../Interfaces";
export default function CreatePayAccount(isProduction: boolean, args: ICreatePayAccount, token: string): Promise<ICreatePayAccountResponse | undefined>;
