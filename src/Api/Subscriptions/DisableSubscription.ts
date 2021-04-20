import ApiRequest from "../../Util/ApiRequest";

export default async function DisableSubscription(isProduction: boolean, subscriptionId: string): Promise<{ status_message: string; } | undefined>
{
    try {
        const { data }:{ data: { status_message: string; }} = await ApiRequest(isProduction, "v1").post(`/subscriptions/${subscriptionId}/disable`);
        return data;
    } catch {
        return undefined;
    }
}