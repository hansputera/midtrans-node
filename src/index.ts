import CreateTransaction from "./Snap/CreateTransaction";
import CaptureTransaction from "./Api/CaptureTransaction";
import CancelTransaction from "./Api/CancelTransaction";
import ApproveTransaction from "./Api/ApproveTransaction";
import DenyTransaction from "./Api/DenyTransaction";
import RefundTransaction from "./Api/RefundTransaction";
import DirectRefundTransaction from "./Api/DirectRefundTransaction";
import StatusTransaction from "./Api/StatusTransaction";
import StatusB2bTransaction from "./Api/StatusB2bTransaction";
import ExpireTransaction from "./Api/ExpireTransaction";
import RegisterCard from "./Api/RegisterCard";
import PointInquiry from "./Api/PointInquiry";
import CreatePayAccount from "./Api/CreatePayAccount";
import GetPayAccount from "./Api/GetPayAccount";
import UnbindPayAccount from "./Api/UnbindPayAccount";
import GetBinNumber from "./Api/GetBinNumber";
import CreateSubscription from "./Api/Subscriptions/CreateSubcription";
import GetSubscription from "./Api/Subscriptions/GetSubscription";
import UpdateSubscription from "./Api/Subscriptions/UpdateSubscription";
import DisableSubscription from "./Api/Subscriptions/DisableSubscription";
import EnableSubscription from "./Api/Subscriptions/EnableSubscription";
import ApprovePayouts from "./Iris/ApprovePayouts";
import BankAccounts from "./Iris/BankAccounts";
import BeneficiaryBanks from "./Iris/BeneficiaryBanks";
import CheckBankBalance from "./Iris/CheckBankBalance";
import CreateBeneficiaries from "./Iris/CreateBeneficiaries";
import CreatePayouts from "./Iris/CreatePayouts";
import GetPayoutDetails from "./Iris/GetPayoutDetails";
import HistoryTransaction from "./Iris/HistoryTransaction";
import ListBeneficiaries from "./Iris/ListBeneficiaries";
import Ping from "./Iris/Ping";
import RejectPayouts from "./Iris/RejectPayouts";
import TopupChannels from "./Iris/TopupChannels";
import UpdateBeneficiaries from "./Iris/UpdateBeneficiaries";
import ValidateBankAccount from "./Iris/ValidateBankAccount";
import { version } from "../package.json";
import type { SnapTransaction, IRefundObjRequest, IRegisterCardRequest, ICreatePayAccount, ICreateSubcription, IUpdateSubcription, IBeneficiaries, IStatementDate, ITransaction, ITransactionFail, IRefundObj, ITransactionStatus, IRegisterCardResponse, IPointInquiry, ICreatePayAccountResponse, IPayAccount, IPayAccountUnBind, BinApiResponse, ISubcription, ISuccessBeneficiaries, IStatementResult, ITopupAggreratorChannel, BankAccount, ICheckBalanceBank, BeneficiaryBank, IValidateBankResult } from "./Interfaces";
import { IPayoutRequest, IPayoutApproveRequest, IPayoutRejectRequest, IPayoutCreateResponse, IPayoutSuccessAct, IPayout } from "./Interfaces/Payouts";

/**
 * 
 * @class MidtransNode Main class for midtrans-node.
 */
export class MidtransNode
{
    /**
     * 
     * @param isProduction Ready to production?
     * @param authKey Your midtrans server-key
     */
    constructor(public isProduction: boolean,public authKey: string) {}
    public version = version;

    // Methods
    /**
     * 
     * @param args - Create Transaction Arguments.
     * @description More info: https://snap-docs.midtrans.com
     */
    public createTransaction = async (args: SnapTransaction): Promise<{token: string;redirect_url: string;} | undefined> => await CreateTransaction(this.isProduction, args, this.authKey);

    /**
     * 
     * @param orderID - Transaction id from charge response
     * @param grossAmount - Amount to be captured. By default will capture whole transaction amount. NOTE: Cannot be decimal
     * @description This method is used to capture transaction balance when transaction_status is authorize. Transaction with status authorize is only available after Pre Authorization Credit Card transaction. More info: https://api-docs.midtrans.com/#capture-transaction
     */
    public captureTransaction = async (orderID: string, grossAmount?: number): Promise<ITransaction | ITransactionFail> => await CaptureTransaction(this.isProduction, orderID, grossAmount, this.authKey);
    
    /**
     * 
     * @param orderID - Transaction ID given by Midtrans
     * @description More info: https://api-docs.midtrans.com/#cancel-transaction
     */
    public cancelTransaction = async (orderID: string): Promise<ITransaction | ITransactionFail> => await CancelTransaction(this.isProduction, orderID, this.authKey);

    /**
     * 
     * @param orderID - Transaction ID given by Midtrans
     * @description Approve method can be triggered to accept card payment transaction in which fraud_status is challenge. More info: https://api-docs.midtrans.com/#approve-transaction
     */
    public approveTransaction = async (orderID: string): Promise<ITransaction | ITransactionFail> => await ApproveTransaction(this.isProduction, orderID, this.authKey);

    /**
     * 
     * @param orderID - Transaction ID given by Midtrans
     * @description Deny method can be triggered to immediately deny card payment transaction in which fraud_status is challenge. More info: https://api-docs.midtrans.com/#deny-transaction
     */
    public denyTransaction = async (orderID: string): Promise<ITransaction | ITransactionFail> => await DenyTransaction(this.isProduction, orderID, this.authKey);

    /**
     * 
     * @param orderID - Transaction ID given by Midtrans
     * @param args - Request Refund Object includes refund_key,amount,and reason.
     * @description As opposed to previous refund API, this is used to directly send the refund request to bank or payment provider (third party). This API is useful to skip the standard operation process which may take 1 or 2 days after the initial refund request. The status of corresponding transaction will immediately be updated following the refund result received from third party. It will send HTTP notification only if the refund succeeded. More info: https://api-docs.midtrans.com/#refund-transaction
     */
    public refundTransaction = async (orderID: string, args: IRefundObjRequest): Promise<IRefundObj | ITransactionFail> => await RefundTransaction(this.isProduction, orderID, args, this.authKey);
    
    /**
     * 
     * @param orderID - Transaction ID given by Midtrans
     * @description More info: https://api-docs.midtrans.com/#direct-refund-transaction
     */
    public directRefundTransaction = async (orderID: string): Promise<IRefundObj | ITransactionFail> => await DirectRefundTransaction(this.isProduction, orderID, this.authKey);
    
    /**
     * 
     * @param orderID - Transaction ID given by Midtrans
     * @description Transaction status can be obtained by triggering the Get Status Method. More info: https://api-docs.midtrans.com/#get-transaction-status
     */
    public statusTransaction = async (orderID: string): Promise<ITransactionStatus | ITransactionFail> => await StatusTransaction(this.isProduction, orderID, this.authKey);

    /**
     * 
     * @param orderID - Transaction ID given by Midtrans
     * @param page - Index of the search. Default is 0.
     * @param per_page - Number of transactions which is presented. Default is 10.
     * @description Transaction status for all B2B transactions related to an order_id can be obtained by triggering the Get Status B2B Method. More info: https://api-docs.midtrans.com/#get-transaction-status-b2b
     */
    public statusb2bTransaction = async (orderID: string, page = 0, per_page = 10): Promise<{status_code: string;status_message: string;transactions: ITransaction[];} | undefined> => await StatusB2bTransaction(this.isProduction, orderID, page, per_page, this.authKey);
    
    /**
     * 
     * @param args - Request Register Card Object includes card_number,card_exp_month,card_exp_year,client_key,callback.
     * @description More info: https://api-docs.midtrans.com/#register-card
     */
    public registerCard = async (args: IRegisterCardRequest): Promise<IRegisterCardResponse | undefined> => await RegisterCard(this.isProduction, args, this.authKey);

    /**
     * 
     * @param tokenId - Card Token
     * @param grossAmount - The volume of the following transaction. This number can decide the remaining point balance amount which can be used on the response. NOTE: Needed for Mandiri Point.
     * @description More info: https://api-docs.midtrans.com/#point-inquiry
     */
    public pointInquiry = async (tokenId: string, grossAmount?: number): Promise<IPointInquiry | undefined> => await PointInquiry(this.isProduction, tokenId, grossAmount, this.authKey);
    
    /**
     * 
     * @param orderID - Transaction ID given by Midtrans
     * @description More info: https://api-docs.midtrans.com/#expire-transaction
     */
    public expireTransaction = async (orderID: string): Promise<ITransaction | ITransactionFail> => await ExpireTransaction(this.isProduction, orderID, this.authKey);

    /**
     * 
     * @param args - Pay Account Request Object
     * @description More info: https://api-docs.midtrans.com/#create-pay-account
     */
    public createPayAccount = async (args: ICreatePayAccount): Promise<ICreatePayAccountResponse | undefined> => await CreatePayAccount(this.isProduction, args, this.authKey);

    /**
     * 
     * @param accountID - Pay Account ID
     * @description More info: https://api-docs.midtrans.com/#get-pay-account
     */
    public getPayAccount = async (accountID: string): Promise<IPayAccount | undefined> => await GetPayAccount(this.isProduction, accountID, this.authKey);

    /**
     * 
     * @param accountID - Pay Account ID
     * @description More info: https://api-docs.midtrans.com/#unbind-pay-account
     */
    public unbindPayAccount = async (accountID: string): Promise<IPayAccountUnBind | undefined> => await UnbindPayAccount(this.isProduction, accountID, this.authKey);

    /**
     * 
     * @param binNumber - Bin ID want to check.
     * @description Midtrans API provide Bin Lookup API to get metadata for a particular bin, such as card type (Debit/Credit) or the card brand (ex. Visa, Master). More info: https://api-docs.midtrans.com/#bin-api
     */
    public getBin = async (binNumber: number): Promise<BinApiResponse | undefined> => await GetBinNumber(this.isProduction, binNumber, this.authKey);

    /**
     * 
     * @param args - Subscription Request object.
     * @description Create subscription that contains all details for creating transaction. More info: https://api-docs.midtrans.com/#create-subscription
     */
    public createSubscription = async (args: ICreateSubcription): Promise<ISubcription | undefined> => await CreateSubscription(this.isProduction, args, this.authKey);
    
    /**
     * 
     * @param subscriptionId - Subscription ID given by Midtrans
     * @description Find subscription by id to see the subscription details. More info: https://api-docs.midtrans.com/#get-subscription
     */
    public getSubscription = async (subscriptionId: string): Promise<ISubcription | undefined> => await GetSubscription(this.isProduction, subscriptionId, this.authKey);
   
    /**
     * 
     * @param subscriptionId - Subscription ID given by Midtrans
     * @param args - Subscription request object
     * @description https://api-docs.midtrans.com/#update-subscription
     */
    public updateSubscription = async (subscriptionId: string, args: IUpdateSubcription): Promise<ISubcription | undefined> => await UpdateSubscription(this.isProduction, subscriptionId, args, this.authKey);
    
    /**
     * 
     * @param subscriptionId - Subscription ID given by Midtrans
     * @description Make the subscription inactive (the subscription will not create transaction anymore). More info: https://api-docs.midtrans.com/#disable-subscription
     */
    public disableSubscription = async (subscriptionId: string): Promise<{status_message: string;} | undefined> => await DisableSubscription(this.isProduction, subscriptionId, this.authKey);

    /**
     * 
     * @param subscriptionId - Subscription ID given by Midtrans
     * @description Make the subscription active (the subscription will create periodic transaction). More info: https://api-docs.midtrans.com/#enable-subscription
     */
    public enableSubscription = async (subscriptionId: string): Promise<{status_message: string;} | undefined> => await EnableSubscription(this.isProduction, subscriptionId, this.authKey);

    /**
     * 
     * @description Returns pong message for monitoring purpose
     */
    public ping = async(): Promise<string | undefined> => await Ping(this.isProduction, this.authKey);

    /**
     * 
     * @param args - Beneficiaries request object
     * @description Use this API to create a new beneficiary information for quick access on the payout page in Iris Portal. More info: https://iris-docs.midtrans.com/#create-beneficiaries
     */
    public createBeneficiaries = async(args: IBeneficiaries): Promise<ISuccessBeneficiaries | undefined> => await CreateBeneficiaries(this.isProduction, args, this.authKey);

    /**
     * 
     * @param aliasName - Identifier name.
     * @param args - Beneficiaries request object
     * @description Use this API to update an existing beneficiary identified by its alias_name. More info: https://iris-docs.midtrans.com/#update-beneficiaries
     */
    public updateBeneficiaries = async(aliasName: string, args: IBeneficiaries): Promise<ISuccessBeneficiaries | undefined> => await UpdateBeneficiaries(this.isProduction, aliasName, args, this.authKey);

    /**
     * 
     * @param limit - Limit data beneficiaries.
     * @description Use this API to fetch list of all beneficiaries saved in Iris Portal. More info: https://iris-docs.midtrans.com/#list-beneficiaries
     */
    public listBeneficiaries = async(limit = 10): Promise<IBeneficiaries[] | undefined> => await ListBeneficiaries(this.isProduction, limit, this.authKey);

    /**
     * 
     * @param args - Payout request object.
     * @description This API is for Creator to create a payout. It can be used for single payout and also multiple payouts. More info: https://iris-docs.midtrans.com/#create-payouts
     */
    public createPayouts = async(args: IPayoutRequest): Promise<IPayoutCreateResponse | undefined> => await CreatePayouts(this.isProduction, args, this.authKey);

    /**
     * 
     * @param args - Payout approve request object
     * @description Use this API for Apporver to approve multiple payout request. More info: https://iris-docs.midtrans.com/#approve-payouts
     */
    public approvePayouts = async(args: IPayoutApproveRequest): Promise<IPayoutSuccessAct | undefined> => await ApprovePayouts(this.isProduction, args, this.authKey);

    /**
     * 
     * @param args - Payout reject request object
     * @description Use this API for Apporver to reject multiple payout request. More info: https://iris-docs.midtrans.com/#reject-payouts
     */
    public rejectPayouts = async(args: IPayoutRejectRequest): Promise<IPayoutSuccessAct | undefined> => await RejectPayouts(this.isProduction, args, this.authKey);

    /**
     * 
     * @param refNo - Unique reference_no of a payout
     * @description Get details of a single payout. More info: https://iris-docs.midtrans.com/#get-payout-details
     */
    public getPayoutDetails = async(refNo: string): Promise<IPayout | undefined> => await GetPayoutDetails(this.isProduction, refNo, this.authKey);

    /**
     * 
     * @param fromDate - start date range for payouts (YYYY-MM-DD)
     * @param toDate - end date range for payouts (YYYY-MM-DD)
     * @description List all transactions history for a month. You can specified start date and also end date for range transaction history. More info: https://iris-docs.midtrans.com/#transaction-history
     */
    public historyTransaction = async(fromDate?: IStatementDate, toDate?: IStatementDate): Promise<IStatementResult[] | undefined> => await HistoryTransaction(this.isProduction, fromDate, toDate, this.authKey);

    /**
     * 
     * @description Provide top up information channel for Aggregator Partner
     */
    public topupChannels = async(): Promise<ITopupAggreratorChannel[] | undefined> => await TopupChannels(this.isProduction, this.authKey);

    /**
     * 
     * @description Show list of registered bank accounts for facilitator partner. More info: https://iris-docs.midtrans.com/#bank-accounts-facilitator
     */
    public bankAccounts = async(): Promise<BankAccount[] | undefined> => await BankAccounts(this.isProduction, this.authKey);

    /**
     * 
     * @param bankAccountID - Bank account ID to be used when creating payouts
     * @description For Facilitator Partner, use this API is to get current balance information of your registered bank account. More info: https://iris-docs.midtrans.com/#check-balance-facilitator
     */
    public checkBankBalance = async(bankAccountID: string): Promise<ICheckBalanceBank | undefined> => await CheckBankBalance(this.isProduction, bankAccountID, this.authKey);

    /**
     * 
     * @description - Show list of supported banks in IRIS. More info: https://iris-docs.midtrans.com/#list-banks
     */
    public listBanks = async(): Promise<BeneficiaryBank[] | undefined> => await BeneficiaryBanks(this.isProduction, this.authKey);

    /**
     * 
     * @param bank - Bank code
     * @param accountID	- Account number
     * @description Check if an account is valid, if valid return account information. More info: https://iris-docs.midtrans.com/#validate-bank-account
     */
    public validateBankAccount = async(bankName: string, accountID: string): Promise<IValidateBankResult | undefined> => await ValidateBankAccount(this.isProduction, bankName, accountID, this.authKey);
}

export default MidtransNode;