import type { BeneficiaryBank } from "../Interfaces";
import IrisRequest from "../Util/IrisRequest";

export default async function BeneficiaryBanks(isProduction: boolean): Promise<BeneficiaryBank[] | undefined>
{
    try {
        const { data }:{ data: BeneficiaryBank[]; } = await IrisRequest(isProduction).get("/beneficiary_banks");
        return data;
    } catch {
        return undefined;
    }
}