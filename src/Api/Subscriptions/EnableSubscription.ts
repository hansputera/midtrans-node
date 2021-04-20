import ApiRequest from "../../Util/ApiRequest";

export default async function EnableSubscription(isProduction: boolean, subscriptionId: string): Promise<{status_message:string;} | undefined>
{
    try {
        const { data }:{ data: { status_message: string; }} = await ApiRequest(isProduction).post(`/subscriptions/${subscriptionId}/enable`);
        return data;
    } catch {
        return undefined;
    }
}