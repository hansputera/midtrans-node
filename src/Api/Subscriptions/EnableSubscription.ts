import ApiRequest from "../../Util/ApiRequest";
import MidtransNodeError from "../../Util/MidtransNodeError";

export default async function EnableSubscription(isProduction: boolean, subscriptionId: string, token: string): Promise<{status_message:string;} | undefined>
{
    try {
        const { data }:{ data: { status_message: string; }} = await ApiRequest(isProduction, "v2", token).post(`/subscriptions/${subscriptionId}/enable`);
        return data;
    } catch(e) {
        throw new MidtransNodeError(JSON.stringify(e.response.data));
    }
}