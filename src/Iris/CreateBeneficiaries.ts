import type { IBeneficiaries, ISuccessBeneficiaries } from "../Interfaces";
import IrisRequest from "../Util/IrisRequest";

export default async function CreateBeneficiaries(isProduction: boolean, args: IBeneficiaries): Promise<ISuccessBeneficiaries | undefined>
{
    try {
        const { data }:{ data: ISuccessBeneficiaries } = await IrisRequest(isProduction).post("/beneficiaries", args);
        return data;
    } catch {
        return undefined;
    }
}