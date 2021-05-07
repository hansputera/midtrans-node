import type { IUpdateSubcription, ISubcription } from "../../Interfaces";
import ApiRequest from "../../Util/ApiRequest";

export default async function UpdateSubscription(isProduction: boolean, subscriptionId: string, args: IUpdateSubcription, token: string): Promise<ISubcription | undefined>
{
    try {
        const { data }:{ data: ISubcription } = await ApiRequest(isProduction, "v1", token).patch(`/subscriptions/${subscriptionId}`, args);
        return data;
    } catch {
        return undefined;
    }
}