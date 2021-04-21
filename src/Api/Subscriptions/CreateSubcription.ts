import type { ICreateSubcription, ICreateSubcriptionResponse } from "../../Interfaces";
import ApiRequest from "../../Util/ApiRequest";

export default async function CreateSubscription(isProduction: boolean, args: ICreateSubcription): Promise<ICreateSubcriptionResponse | undefined>
{
    try {
        const { data }:{ data: ICreateSubcriptionResponse } = await ApiRequest(isProduction, "v1").post("/subscriptions", args);
        return data;
    } catch {
        return undefined;
    }
}