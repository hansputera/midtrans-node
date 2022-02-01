export declare type PayoutStatus = 'queued' | 'processed' | 'completed' | 'failed';
export interface IPayoutRequest {
    beneficiary_name: string;
    beneficiary_account: string;
    beneficiary_bank: string;
    beneficiary_email?: string;
    amount: string;
    notes: string;
}
export interface IPayout {
    amount: string;
    beneficiary_name: string;
    beneficiary_account: string;
    bank: string;
    reference_no: string;
    notes: string;
    beneficiary_email?: string;
    status: PayoutStatus;
    created_by: string;
    created_at: string;
    updated_at: string;
}
export interface IPayoutCreateResponse {
    payouts: {
        status: PayoutStatus;
        reference_no: string;
    }[];
}
export interface IPayoutApproveRequest {
    reference_nos: string[];
    otp?: string;
}
export interface IPayoutRejectRequest {
    reference_nos: string[];
    reject_reason: string;
}
export interface IPayoutSuccessAct {
    status: 'ok';
}
