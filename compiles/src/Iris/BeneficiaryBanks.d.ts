import type { BeneficiaryBank } from "../Interfaces";
export default function BeneficiaryBanks(isProduction: boolean, token: string): Promise<BeneficiaryBank[] | undefined>;
