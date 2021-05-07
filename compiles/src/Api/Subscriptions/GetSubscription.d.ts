import type { ISubcription } from "../../Interfaces";
export default function GetSubscription(isProduction: boolean, subscriptionId: string, token: string): Promise<ISubcription | undefined>;
