import type { IBeneficiaries } from "../Interfaces";
export default function ListBeneficiaries(isProduction: boolean, limit: number, token: string): Promise<IBeneficiaries[] | undefined>;
