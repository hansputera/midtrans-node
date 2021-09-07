import type { IBeneficiaries, ISuccessBeneficiaries } from "../Interfaces";
export default function CreateBeneficiaries(isProduction: boolean, args: IBeneficiaries, token: string): Promise<ISuccessBeneficiaries | undefined>;
