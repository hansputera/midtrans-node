import type { IBeneficiaries } from "../Interfaces";
import IrisRequest from "../Util/IrisRequest";

export default async function ListBeneficiaries(isProduction: boolean, limit = 0): Promise<IBeneficiaries[] | undefined>
{
    try {
        const { data }:{ data: IBeneficiaries[]; } = await IrisRequest(isProduction).get("/beneficiaries");
        return data.splice(0, limit);
    } catch  {
        return undefined;
    }
}