import type { ICreateSubcription, ICreateSubcriptionResponse } from "../../Interfaces";
export default function CreateSubscription(isProduction: boolean, args: ICreateSubcription, token: string): Promise<ICreateSubcriptionResponse | undefined>;
