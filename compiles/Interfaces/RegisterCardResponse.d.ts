export interface IRegisterCardResponse {
	status_code: string;
	saved_token_id: string;
	transaction_id: string;
	masked_card: string;
}

export interface IRegisterCardRequest {
	card_number: string;
	card_exp_month: string;
	card_exp_year: string;
	client_key: string;
	callback?: string;
}
