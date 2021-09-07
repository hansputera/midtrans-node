import type { IRegisterCardRequest, IRegisterCardResponse } from "../Interfaces";
export default function RegisterCard(isProduction: boolean, args: IRegisterCardRequest, token: string): Promise<IRegisterCardResponse | undefined>;
