import type { PaymentType } from "./Transaction";

export type PayAccountStatus = "PENDING" | "EXPIRED" | "ENABLED" | "DISABLED";
export interface IPayAccountActionObj 
{
    name: string;
    method: "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS";
    url: string;
}

export interface ICreatePayAccount
{
    payment_type: PaymentType;
    gopay_partner?: {
        phone_number: string;
        country_code: string;
        redirect_url?: string;
    }
}

export interface IPayAccountMetaData
{
    payment_options: {
        name: string;
        active: boolean;
        balance: {
            value: string;
            currency: string;
        },
        metadata: object;
        token: string;
    }[];
}

export interface IPayAccount
{
    status_code: string;
    payment_type: PaymentType;
    account_id: string;
    account_status: PayAccountStatus;
    metadata?: IPayAccountMetaData;
}

export interface ICreatePayAccountResponse extends IPayAccount
{
    channel_response_code?: string;
    channel_response_message?: string;
    actions: IPayAccountActionObj[];
}

export interface ICreatePayAccountFailResponse
{
    status_code: string;
    payment_type: PaymentType;
    channel_response_code: string;
    channel_response_message: string;
}

export interface IPayAccountUnBind extends IPayAccount
{
    channel_response_code?: string;
    channel_response_message?: string;
}