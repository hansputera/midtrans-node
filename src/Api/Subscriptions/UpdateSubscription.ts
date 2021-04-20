import type { IUpdateSubcription, ISubcription } from "../../Interfaces";
import ApiRequest from "../../Util/ApiRequest";

export default async function UpdateSubscription(isProduction: boolean, subscriptionId: string, args: IUpdateSubcription): Promise<ISubcription | undefined>
{
    try {
        const { data }:{ data: ISubcription } = await ApiRequest(isProduction, "v1").patch(`/subscriptions/${subscriptionId}`, args);
        return data;
    } catch {
        return undefined;
    }
}