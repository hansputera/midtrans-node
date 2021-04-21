import IrisRequest from "../Util/IrisRequest";

export default async function Ping(isProduction: boolean): Promise<string | undefined>
{
    try {
        const { data }:{ data: string; } = await IrisRequest(isProduction).get("/ping");
        return data;
    } catch {
        return undefined;
    }
}