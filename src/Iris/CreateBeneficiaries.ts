import type { IBeneficiaries, ISuccessBeneficiaries } from "../Interfaces";
import IrisRequest from "../Util/IrisRequest";
import MidtransNodeError from "../Util/MidtransNodeError";

export default async function CreateBeneficiaries(isProduction: boolean, args: IBeneficiaries, token: string): Promise<ISuccessBeneficiaries | undefined>
{
    try {
        const { data }:{ data: ISuccessBeneficiaries } = await IrisRequest(isProduction, token).post("/beneficiaries", args);
        return data;
    } catch(e) {
        throw new MidtransNodeError(e.response.data);
    }
}