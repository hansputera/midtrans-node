import type { IBeneficiaries, ISuccessBeneficiaries } from "../Interfaces";
export default function UpdateBeneficiaries(isProduction: boolean, aliasName: string, args: IBeneficiaries, token: string): Promise<ISuccessBeneficiaries | undefined>;
