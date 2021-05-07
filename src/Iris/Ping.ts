import IrisRequest from "../Util/IrisRequest";

export default async function Ping(isProduction: boolean, token: string): Promise<string | undefined>
{
    try {
        const { data }:{ data: string; } = await IrisRequest(isProduction, token).get("/ping");
        return data;
    } catch {
        return undefined;
    }
}