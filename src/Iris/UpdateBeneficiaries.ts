import type { IBeneficiaries, ISuccessBeneficiaries } from "../Interfaces";
import IrisRequest from "../Util/IrisRequest";

export default async function UpdateBeneficiaries(isProduction: boolean, aliasName: string, args: IBeneficiaries, token: string): Promise<ISuccessBeneficiaries | undefined>
{
    try {
        const { data }:{ data: ISuccessBeneficiaries } = await IrisRequest(isProduction, token).patch(`/beneficiaries/${aliasName}`, args);
        return data;
    } catch {
        return undefined;
    }
}