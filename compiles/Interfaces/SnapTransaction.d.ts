import type { PaymentType } from "./Transaction";

export type Banks = "bca" | "bni" | "mandiri" | "cimb" | "bri" | "danamon" | "maybank" | "mega";
export type allowedBins = "bni" | "bca" | "mandiri" | "cimb" | "bri" | "maybank";
export type CreditCardType = "authorize" | "authorize_capture";
export interface SnapTransactionDetails
{
    order_id: string;
    gross_amount: number;
}

export interface BcaVa
{
    va_number?: string;
    sub_company_code?: string;
    free_text?: FreeText;
}

export interface PermataVa
{
    va_number?: string;
    recipient_name?: string;
}

export interface BniVa
{
    va_number?: string;
}

export interface BriVa
{
    va_number?: string;
}

export interface GoPay
{
    enable_callback?: boolean;
    callback_url?: string;
}

export interface ShopeePay
{
    callback_url?: string;
}

export interface Expiry
{
    start_time: string;
    unit: "day" | "hour" | "minutes";
    duration: number;
}

export interface FreeText
{
    inquiry?: FreeTextItem[];
    payment?: FreeTextItem[];
}

export interface FreeTextItem
{
    en: string;
    id: string;
}

export interface SnapItemDetails
{
    id: string;
    price: number;
    quantity: number;
    name: string;
    brand: string;
    category: string;
    merchant_name: string;
}

export interface SnapCard
{
    secure?: boolean;
    bank?: Banks;
    channel?: "migs";
    type?: CreditCardType;
    whitelist_bins?: allowedBins;
    installment?: {
        required: false;
        terms: object;
    }
    dynamic_descriptor?: {
        merchant_name?: string;
        city_name?: string;
        country_code?: string;
    }
}

export interface SnapCustomerDetails
{
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    billing_address?: SnapAddress;
    shipping_address?: SnapAddress;
    enabled_payments?: PaymentType[];

}

export interface SnapAddress
{
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    address?: string;
    country_code?: string;
    postal_code?: string;
    city?: string;
}

export interface SnapTransaction
{
    transaction_details: SnapTransactionDetails;
    item_details?: SnapItemDetails;
    customer_details?: SnapCustomerDetails;
    enabled_payments?: PaymentType;
    credit_card?: SnapCard;
    bca_va?: BcaVa;
    permata_va?: PermataVa;
    bni_va?: BniVa;
    bri_va?: BriVa;
    shopeepay?: ShopeePay;
    gopay?: GoPay;
    callbacks?:{
        finish?: string;
    }
    expiry?: Expiry;
    custom_field1?: string;
    custom_field2?: string;
    custom_field3?: string;
}