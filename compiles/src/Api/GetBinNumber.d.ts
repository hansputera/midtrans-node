import type { BinApiResponse } from "../Interfaces";
export default function GetBinNumber(isProduction: boolean, binNumber: number, token: string): Promise<BinApiResponse | undefined>;
