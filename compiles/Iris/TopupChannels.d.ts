import { ITopupAggreratorChannel } from "../Interfaces";
export default function TopupChannels(isProduction: boolean, token: string): Promise<ITopupAggreratorChannel[] | undefined>;
