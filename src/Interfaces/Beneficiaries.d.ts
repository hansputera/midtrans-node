export interface IBeneficiaries
{
    name: string;
    account: string;
    bank: string;
    alias_name: string;
    email?: string;
}

export interface ISuccessBeneficiaries
{
    status: "created";
}