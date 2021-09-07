import type { IUpdateSubcription, ISubcription } from "../../Interfaces";
export default function UpdateSubscription(isProduction: boolean, subscriptionId: string, args: IUpdateSubcription, token: string): Promise<ISubcription | undefined>;
