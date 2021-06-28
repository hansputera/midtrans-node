import type { IUpdateSubcription, ISubcription } from "../../Interfaces";
import ApiRequest from "../../Util/ApiRequest";
import MidtransNodeError from "../../Util/MidtransNodeError";

export default async function UpdateSubscription(isProduction: boolean, subscriptionId: string, args: IUpdateSubcription, token: string): Promise<ISubcription | undefined>
{
    try {
        const { data }:{ data: ISubcription } = await ApiRequest(isProduction, "v1", token).patch(`/subscriptions/${subscriptionId}`, args);
        return data;
    } catch(e) {
        throw new MidtransNodeError(JSON.stringify(e.response.data));
    }
}