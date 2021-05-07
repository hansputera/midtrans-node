import type { ISubcription } from "../../Interfaces";
import ApiRequest from "../../Util/ApiRequest";

export default async function GetSubscription(isProduction: boolean, subscriptionId: string, token: string): Promise<ISubcription | undefined>
{
    try {
        const { data }:{ data: ISubcription } = await ApiRequest(isProduction, "v1", token).get(`/subscriptions/${subscriptionId}`);
        return data;
    } catch {
        return undefined;
    }
}