import type { DateTime } from 'luxon';

export type StatementType = 'Topup' | 'Payout' | 'Fee' | 'Refund';

export interface IStatementDate {
	year: number;
	month: number;
	days: number;
	_date?: DateTime;
}

export interface IStatementResult {
	reference_no?: string;
	beneficiary_name?: string;
	beneficiary_account?: string;
	type: StatementType;
	account: string;
	status: 'card' | 'debit';
	created_at: string;
}

export interface ITopupAggreratorChannel {
	id: number;
	virtual_account_type: string;
	virtual_account_number: string;
}

export interface BankAccount {
	bank_account_id: string;
	bank_name: string;
	account_name: string;
	account_number: string;
	status: 'live' | 'in_progress';
}

export interface ICheckBalanceBank {
	balance: string;
}

export interface BeneficiaryBank {
	code: string;
	name: string;
}

export interface IValidateBankResult {
	account_name: string;
	account_no: string;
	bank_name: string;
}
