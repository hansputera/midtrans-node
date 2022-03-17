import type { SnapTransaction } from './SnapTransaction';
/**
 * Payment Type.
 */
export declare type PaymentType = 'gopay' | 'shopeepay' | 'qris' | 'bca_klikpay' | 'bca_klikbca' | 'bri_epay' | 'cimb_clicks' | 'danamon_online' | 'bank_transfer' | 'telkomsel_cash' | 'echannel' | 'akulaku' | 'permata_va' | 'other_va' | 'bca_va' | 'bni_va' | 'bri_va' | 'indomaret';
/**
 * Transaction status.
 */
export declare type TransactionStatus = 'authorize' | 'capture' | 'settlement' | 'deny' | 'pending' | 'cancel' | 'refund' | 'partial_refund' | 'chargeback' | 'partial_chargeback' | 'expire' | 'failure';
/**
 * Fraud Status
 */
export declare type FraudStatus = 'accept' | 'deny' | 'challenge';
/**
 * ActionMethod.
 */
export declare type ActionMethod = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'OPTIONS';
/**
 * Unit expiry.
 */
export declare type UnitExpiry = 'second' | 'minute' | 'hour' | 'day';
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
export interface ITransactionStatus extends ITransaction {
    approval_code: string;
    signature_key: string;
}
export interface ITransactionFail {
    status_code: string;
    status_message: string;
}
export interface IChargeTransactionArgs {
    payment_type: PaymentType;
    transaction_details: SnapTransaction['transaction_details'];
    custom_field1?: string;
    custom_field2?: string;
    custom_field3?: string;
    bank_transfer?: {
        bank: Omit<PaymentType, 'gopay' | 'shopeepay' | 'qris' | 'akulaku' | 'telkomsel_cash' | 'echannel' | 'indomaret'>;
    };
    custom_expiry?: {
        order_time?: string;
        expiry_duration: number;
        unit?: UnitExpiry;
    };
    metadata: Record<string, unknown>;
}
export interface Action {
    url: string;
    method: ActionMethod;
    name: string;
}
export interface IChargeTransactionResult {
    status_code: string;
    status_message: string;
    transaction_id: string;
    order_id: string;
    gross_amount: string;
    payment_type: string;
    transaction_time: string;
    fraud_status: FraudStatus;
    approval_code?: string;
    custom_field1?: string;
    custom_field2?: string;
    custom_field3?: string;
    metadata: Record<string, unknown>;
    masked_card?: string;
    bank?: string;
    transaction_status?: TransactionStatus;
    signature_key?: string;
    currency?: string;
    actions?: Action[];
    acquirer?: string;
    qr_string?: string;
}
