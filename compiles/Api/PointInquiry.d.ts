import type { IPointInquiry } from "../Interfaces";
export default function PointInquiry(isProduction: boolean, tokenId: string, grossAmount?: number, token?: string): Promise<IPointInquiry | undefined>;
