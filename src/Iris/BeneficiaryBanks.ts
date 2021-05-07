import type { BeneficiaryBank } from "../Interfaces";
import IrisRequest from "../Util/IrisRequest";

export default async function BeneficiaryBanks(isProduction: boolean, token: string): Promise<BeneficiaryBank[] | undefined>
{
    try {
        const { data }:{ data: BeneficiaryBank[]; } = await IrisRequest(isProduction, token).get("/beneficiary_banks");
        return data;
    } catch {
        return undefined;
    }
}