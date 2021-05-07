import { ITopupAggreratorChannel } from "../Interfaces";
import IrisRequest from "../Util/IrisRequest";

export default async function TopupChannels(isProduction: boolean, token: string): Promise<ITopupAggreratorChannel[] | undefined>
{
    try {
        const { data }:{ data: ITopupAggreratorChannel[]; } = await IrisRequest(isProduction, token).get("/channels");
        return data;
    } catch {
        return undefined;
    }
}