import type { PaymentType } from "./Transaction";

export interface IRefundObj
{
    transaction_id: string;
    order_id: string;
    gross_amount: string;
    payment_type: PaymentType;
    transaction_time: string;
    transaction_status: "refund";
    status_code: string;
    status_message: string;
    refund_chargeback_id: number;
    refund_amount: string;
    refund_key: string;
}

export interface IRefundObjRequest
{
    refund_key: string;
    amount: number;
    reason: string;
}