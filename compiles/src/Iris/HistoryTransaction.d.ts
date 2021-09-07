import type { IStatementDate, IStatementResult } from "../Interfaces";
export default function HistoryTransaction(isProduction: boolean, fromDate?: IStatementDate, toDate?: IStatementDate, token?: string): Promise<IStatementResult[] | undefined>;
