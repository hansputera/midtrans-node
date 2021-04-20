export type PaymentType = "gopay" | "shopeepay" | "qris" | "bca_klikpay" | "bca_klikbca" | "bri_epay" | "cimb_clicks" | "danamon_online" | "bank_transfer" | "telkomsel_cash" | "echannel" | "akulaku" | "permata_va" | "other_va" | "bca_va" | "bni_va" | "bri_va" | "indomaret";
export type TransactionStatus = "authorize" | "capture" | "settlement" | "deny" | "pending" | "cancel" | "refund" | "partial_refund" | "chargeback" | "partial_chargeback" | "expire" | "failure";
export type FraudStatus = "accept" | "deny" | "challenge";

export interface IRefund {
    refund_chargeback_id: number;
    refund_amount: string;
    created_at: string;
    reason: string;
    refund_key: string;
    refund_method: string;
    bank_confirmed_at?: string;
}
export interface ITransaction {
    status_code: string;
    status_message: string;
    transaction_id: string;
    masked_card?: string;
    order_id: string;
    payment_type: PaymentType;
    transaction_time: string;
    transaction_status: TransactionStatus;
    fraud_status: FraudStatus;
    bank?: string;
    gross_amount: string;
    channel_response_code?: string;
    channel_response_message?: string;
    card_type?: string;
    refund_amount: string;
    refunds?: IRefund;
    bill_key?: string;
}

export interface ITransactionStatus extends ITransaction
{
    approval_code: string;
    signature_key: string;
}

export interface ITransactionFail 
{
    status_code: string;
    status_message: string;
}