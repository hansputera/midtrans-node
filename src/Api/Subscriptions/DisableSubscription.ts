import ApiRequest from "../../Util/ApiRequest";
import MidtransNodeError from "../../Util/MidtransNodeError";

export default async function DisableSubscription(isProduction: boolean, subscriptionId: string, token: string): Promise<{ status_message: string; } | undefined>
{
    try {
        const { data }:{ data: { status_message: string; }} = await ApiRequest(isProduction, "v1", token).post(`/subscriptions/${subscriptionId}/disable`);
        return data;
    } catch(e) {
        throw new MidtransNodeError(e.response.data);
    }
}