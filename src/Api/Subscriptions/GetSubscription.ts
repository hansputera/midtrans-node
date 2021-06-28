import type { ISubcription } from "../../Interfaces";
import ApiRequest from "../../Util/ApiRequest";
import MidtransNodeError from "../../Util/MidtransNodeError";

export default async function GetSubscription(isProduction: boolean, subscriptionId: string, token: string): Promise<ISubcription | undefined>
{
    try {
        const { data }:{ data: ISubcription } = await ApiRequest(isProduction, "v1", token).get(`/subscriptions/${subscriptionId}`);
        return data;
    } catch(e) {
        throw new MidtransNodeError(JSON.stringify(e.response.data));
    }
}