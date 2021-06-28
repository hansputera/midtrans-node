import type { SnapTransaction, IRefundObjRequest, IRegisterCardRequest, ICreatePayAccount, ICreateSubcription, IUpdateSubcription, IBeneficiaries, IStatementDate, ITransaction, ITransactionFail, IRefundObj, ITransactionStatus, IRegisterCardResponse, IPointInquiry, ICreatePayAccountResponse, IPayAccount, IPayAccountUnBind, BinApiResponse, ISubcription, ISuccessBeneficiaries, IStatementResult, ITopupAggreratorChannel, BankAccount, ICheckBalanceBank, BeneficiaryBank, IValidateBankResult } from "./Interfaces";
import { IPayoutRequest, IPayoutApproveRequest, IPayoutRejectRequest, IPayoutCreateResponse, IPayoutSuccessAct, IPayout } from "./Interfaces/Payouts";
/**
 *
 * @class MidtransNode Main class for midtrans-node.
 */
declare class MidtransNode {
    isProduction: boolean;
    authKey: string;
    /**
     *
     * @param isProduction Ready to production?
     * @param authKey Your midtrans server-key
     */
    constructor(isProduction: boolean, authKey: string);
    version: string;
    /**
     *
     * @param args - Create Transaction Arguments.
     * @description More info: https://snap-docs.midtrans.com
     */
    createTransaction: (args: SnapTransaction) => Promise<{
        token: string;
        redirect_url: string;
    } | undefined>;
    /**
     *
     * @param orderID - Transaction id from charge response
     * @param grossAmount - Amount to be captured. By default will capture whole transaction amount. NOTE: Cannot be decimal
     * @description This method is used to capture transaction balance when transaction_status is authorize. Transaction with status authorize is only available after Pre Authorization Credit Card transaction. More info: https://api-docs.midtrans.com/#capture-transaction
     */
    captureTransaction: (orderID: string, grossAmount?: number) => Promise<ITransaction | ITransactionFail>;
    /**
     *
     * @param orderID - Transaction ID given by Midtrans
     * @description More info: https://api-docs.midtrans.com/#cancel-transaction
     */
    cancelTransaction: (orderID: string) => Promise<ITransaction | ITransactionFail>;
    /**
     *
     * @param orderID - Transaction ID given by Midtrans
     * @description Approve method can be triggered to accept card payment transaction in which fraud_status is challenge. More info: https://api-docs.midtrans.com/#approve-transaction
     */
    approveTransaction: (orderID: string) => Promise<ITransaction | ITransactionFail>;
    /**
     *
     * @param orderID - Transaction ID given by Midtrans
     * @description Deny method can be triggered to immediately deny card payment transaction in which fraud_status is challenge. More info: https://api-docs.midtrans.com/#deny-transaction
     */
    denyTransaction: (orderID: string) => Promise<ITransaction | ITransactionFail>;
    /**
     *
     * @param orderID - Transaction ID given by Midtrans
     * @param args - Request Refund Object includes refund_key,amount,and reason.
     * @description As opposed to previous refund API, this is used to directly send the refund request to bank or payment provider (third party). This API is useful to skip the standard operation process which may take 1 or 2 days after the initial refund request. The status of corresponding transaction will immediately be updated following the refund result received from third party. It will send HTTP notification only if the refund succeeded. More info: https://api-docs.midtrans.com/#refund-transaction
     */
    refundTransaction: (orderID: string, args: IRefundObjRequest) => Promise<IRefundObj | ITransactionFail>;
    /**
     *
     * @param orderID - Transaction ID given by Midtrans
     * @description More info: https://api-docs.midtrans.com/#direct-refund-transaction
     */
    directRefundTransaction: (orderID: string) => Promise<IRefundObj | ITransactionFail>;
    /**
     *
     * @param orderID - Transaction ID given by Midtrans
     * @description Transaction status can be obtained by triggering the Get Status Method. More info: https://api-docs.midtrans.com/#get-transaction-status
     */
    statusTransaction: (orderID: string) => Promise<ITransactionStatus | ITransactionFail>;
    /**
     *
     * @param orderID - Transaction ID given by Midtrans
     * @param page - Index of the search. Default is 0.
     * @param per_page - Number of transactions which is presented. Default is 10.
     * @description Transaction status for all B2B transactions related to an order_id can be obtained by triggering the Get Status B2B Method. More info: https://api-docs.midtrans.com/#get-transaction-status-b2b
     */
    statusb2bTransaction: (orderID: string, page?: number, per_page?: number) => Promise<{
        status_code: string;
        status_message: string;
        transactions: ITransaction[];
    } | undefined>;
    /**
     *
     * @param args - Request Register Card Object includes card_number,card_exp_month,card_exp_year,client_key,callback.
     * @description More info: https://api-docs.midtrans.com/#register-card
     */
    registerCard: (args: IRegisterCardRequest) => Promise<IRegisterCardResponse | undefined>;
    /**
     *
     * @param tokenId - Card Token
     * @param grossAmount - The volume of the following transaction. This number can decide the remaining point balance amount which can be used on the response. NOTE: Needed for Mandiri Point.
     * @description More info: https://api-docs.midtrans.com/#point-inquiry
     */
    pointInquiry: (tokenId: string, grossAmount?: number) => Promise<IPointInquiry | undefined>;
    /**
     *
     * @param orderID - Transaction ID given by Midtrans
     * @description More info: https://api-docs.midtrans.com/#expire-transaction
     */
    expireTransaction: (orderID: string) => Promise<ITransaction | ITransactionFail>;
    /**
     *
     * @param args - Pay Account Request Object
     * @description More info: https://api-docs.midtrans.com/#create-pay-account
     */
    createPayAccount: (args: ICreatePayAccount) => Promise<ICreatePayAccountResponse | undefined>;
    /**
     *
     * @param accountID - Pay Account ID
     * @description More info: https://api-docs.midtrans.com/#get-pay-account
     */
    getPayAccount: (accountID: string) => Promise<IPayAccount | undefined>;
    /**
     *
     * @param accountID - Pay Account ID
     * @description More info: https://api-docs.midtrans.com/#unbind-pay-account
     */
    unbindPayAccount: (accountID: string) => Promise<IPayAccountUnBind | undefined>;
    /**
     *
     * @param binNumber - Bin ID want to check.
     * @description Midtrans API provide Bin Lookup API to get metadata for a particular bin, such as card type (Debit/Credit) or the card brand (ex. Visa, Master). More info: https://api-docs.midtrans.com/#bin-api
     */
    getBin: (binNumber: number) => Promise<BinApiResponse | undefined>;
    /**
     *
     * @param args - Subscription Request object.
     * @description Create subscription that contains all details for creating transaction. More info: https://api-docs.midtrans.com/#create-subscription
     */
    createSubscription: (args: ICreateSubcription) => Promise<ISubcription | undefined>;
    /**
     *
     * @param subscriptionId - Subscription ID given by Midtrans
     * @description Find subscription by id to see the subscription details. More info: https://api-docs.midtrans.com/#get-subscription
     */
    getSubscription: (subscriptionId: string) => Promise<ISubcription | undefined>;
    /**
     *
     * @param subscriptionId - Subscription ID given by Midtrans
     * @param args - Subscription request object
     * @description https://api-docs.midtrans.com/#update-subscription
     */
    updateSubscription: (subscriptionId: string, args: IUpdateSubcription) => Promise<ISubcription | undefined>;
    /**
     *
     * @param subscriptionId - Subscription ID given by Midtrans
     * @description Make the subscription inactive (the subscription will not create transaction anymore). More info: https://api-docs.midtrans.com/#disable-subscription
     */
    disableSubscription: (subscriptionId: string) => Promise<{
        status_message: string;
    } | undefined>;
    /**
     *
     * @param subscriptionId - Subscription ID given by Midtrans
     * @description Make the subscription active (the subscription will create periodic transaction). More info: https://api-docs.midtrans.com/#enable-subscription
     */
    enableSubscription: (subscriptionId: string) => Promise<{
        status_message: string;
    } | undefined>;
    /**
     *
     * @description Returns pong message for monitoring purpose
     */
    ping: () => Promise<string | undefined>;
    /**
     *
     * @param args - Beneficiaries request object
     * @description Use this API to create a new beneficiary information for quick access on the payout page in Iris Portal. More info: https://iris-docs.midtrans.com/#create-beneficiaries
     */
    createBeneficiaries: (args: IBeneficiaries) => Promise<ISuccessBeneficiaries | undefined>;
    /**
     *
     * @param aliasName - Identifier name.
     * @param args - Beneficiaries request object
     * @description Use this API to update an existing beneficiary identified by its alias_name. More info: https://iris-docs.midtrans.com/#update-beneficiaries
     */
    updateBeneficiaries: (aliasName: string, args: IBeneficiaries) => Promise<ISuccessBeneficiaries | undefined>;
    /**
     *
     * @param limit - Limit data beneficiaries.
     * @description Use this API to fetch list of all beneficiaries saved in Iris Portal. More info: https://iris-docs.midtrans.com/#list-beneficiaries
     */
    listBeneficiaries: (limit?: number) => Promise<IBeneficiaries[] | undefined>;
    /**
     *
     * @param args - Payout request object.
     * @description This API is for Creator to create a payout. It can be used for single payout and also multiple payouts. More info: https://iris-docs.midtrans.com/#create-payouts
     */
    createPayouts: (args: IPayoutRequest) => Promise<IPayoutCreateResponse | undefined>;
    /**
     *
     * @param args - Payout approve request object
     * @description Use this API for Apporver to approve multiple payout request. More info: https://iris-docs.midtrans.com/#approve-payouts
     */
    approvePayouts: (args: IPayoutApproveRequest) => Promise<IPayoutSuccessAct | undefined>;
    /**
     *
     * @param args - Payout reject request object
     * @description Use this API for Apporver to reject multiple payout request. More info: https://iris-docs.midtrans.com/#reject-payouts
     */
    rejectPayouts: (args: IPayoutRejectRequest) => Promise<IPayoutSuccessAct | undefined>;
    /**
     *
     * @param refNo - Unique reference_no of a payout
     * @description Get details of a single payout. More info: https://iris-docs.midtrans.com/#get-payout-details
     */
    getPayoutDetails: (refNo: string) => Promise<IPayout | undefined>;
    /**
     *
     * @param fromDate - start date range for payouts (YYYY-MM-DD)
     * @param toDate - end date range for payouts (YYYY-MM-DD)
     * @description List all transactions history for a month. You can specified start date and also end date for range transaction history. More info: https://iris-docs.midtrans.com/#transaction-history
     */
    historyTransaction: (fromDate?: IStatementDate, toDate?: IStatementDate) => Promise<IStatementResult[] | undefined>;
    /**
     *
     * @description Provide top up information channel for Aggregator Partner
     */
    topupChannels: () => Promise<ITopupAggreratorChannel[] | undefined>;
    /**
     *
     * @description Show list of registered bank accounts for facilitator partner. More info: https://iris-docs.midtrans.com/#bank-accounts-facilitator
     */
    bankAccounts: () => Promise<BankAccount[] | undefined>;
    /**
     *
     * @param bankAccountID - Bank account ID to be used when creating payouts
     * @description For Facilitator Partner, use this API is to get current balance information of your registered bank account. More info: https://iris-docs.midtrans.com/#check-balance-facilitator
     */
    checkBankBalance: (bankAccountID: string) => Promise<ICheckBalanceBank | undefined>;
    /**
     *
     * @description - Show list of supported banks in IRIS. More info: https://iris-docs.midtrans.com/#list-banks
     */
    listBanks: () => Promise<BeneficiaryBank[] | undefined>;
    /**
     *
     * @param bank - Bank code
     * @param accountID	- Account number
     * @description Check if an account is valid, if valid return account information. More info: https://iris-docs.midtrans.com/#validate-bank-account
     */
    validateBankAccount: (bankName: string, accountID: string) => Promise<IValidateBankResult | undefined>;
}
export default MidtransNode;
