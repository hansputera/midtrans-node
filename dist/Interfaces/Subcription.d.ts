import type { ICustomerDetails } from './Customer';
export declare type SubcriptionPaymentType = 'credit_card' | 'gopay';
export interface ISubscriptionSchedule {
	interval: number;
	interval_unit: number;
	max_interval: number;
	start_time: string;
}
export interface ISubcription {
	id: string;
	name: string;
	amount: string;
	currency: 'IDR';
	created_at: string;
	schedule: ISubscriptionSchedule;
	status: 'active' | 'inactive';
	token: string;
	payment_type: SubcriptionPaymentType;
	metadata: object;
	customer_details: ICustomerDetails;
	transaction_ids?: string[];
}
export interface ICreateSubcription {
	name: string;
	amount: number;
	currency: 'IDR';
	payment_type: SubcriptionPaymentType;
	token: string;
	schedule: ISubscriptionSchedule;
	metadata: object;
	customer_details: ICustomerDetails;
	gopay?: {
		account_id: string;
	};
}
export declare type ICreateSubcriptionResponse = ISubcription;
export interface IUpdateSubcription {
	name?: string;
	amount?: number;
	currency?: 'IDR';
	token?: string;
	schedule?: ISubscriptionSchedule;
	gopay?: {
		account_id: string;
	};
}
