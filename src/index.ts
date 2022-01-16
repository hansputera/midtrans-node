import { createTransaction } from './Snap';

import {
	approveTransaction,
	refundTransaction,
	directRefundTransaction,
	disableSubscription,
	enableSubscription,
	expireTransaction,
	statusB2bTransaction,
	statusTransaction,
	getPayAccount,
	getBinNumber,
	getSubscription,
	createPayAccount,
	createSubscription,
	captureTransaction,
	registerCard,
	denyTransaction,
	pointInquiry,
	unbindPayAccount,
	cancelTransaction,
	chargeTransaction,
	updateSubscription,
} from './Api';

import {
	ping,
	getPayoutDetails,
	createPayouts,
	rejectPayouts,
	approvePayouts,
	listBeneficiaries,
	bankAccounts,
	checkBankBalance,
	createBeneficiaries,
	updateBeneficiaries,
	validateBankAccount,
	historyTransaction,
	beneficiaryBanks,
	topupChannels,
} from './Iris';

import type {
	SnapTransaction,
	IPayoutRequest,
	IPayoutApproveRequest,
	IPayoutRejectRequest,
	IPayoutCreateResponse,
	IPayoutSuccessAct,
	IPayout,
	IRefundObjRequest,
	IRegisterCardRequest,
	ICreatePayAccount,
	ICreateSubcription,
	IUpdateSubcription,
	IBeneficiaries,
	IStatementDate,
	ITransaction,
	ITransactionFail,
	IRefundObj,
	ITransactionStatus,
	IRegisterCardResponse,
	IPointInquiry,
	ICreatePayAccountResponse,
	IPayAccount,
	IPayAccountUnBind,
	BinApiResponse,
	ISubcription,
	ISuccessBeneficiaries,
	IStatementResult,
	ITopupAggreratorChannel,
	BankAccount,
	ICheckBalanceBank,
	BeneficiaryBank,
	IValidateBankResult,
	IChargeTransactionArgs,
	IChargeTransactionResult,
} from './Interfaces';

/**
 * @class MidtransNode
 */
export class MidtransNode {
	/**
	 * @param {boolean} isProduction Are you ready to production?
	 * @param {string} authKey Your midtrans server-key
	 */
	constructor(public isProduction: boolean, public authKey: string) {}

	/**
	 * @param {SnapTransaction} args - Create Transaction Arguments.
	 * @description More info: https://snap-docs.midtrans.com
	 */
	public createTransaction = async (
		args: SnapTransaction
	): Promise<{ token: string; redirect_url: string } | undefined> =>
		await createTransaction(this.isProduction, args, this.authKey);

	/**
	 * @param {string} orderID - Transaction id from charge response
	 * @param {number} grossAmount - Amount to be captured. By default will capture whole transaction amount. NOTE: Cannot be decimal
	 * @description This method is used to capture transaction balance when transaction_status is authorize. Transaction with status authorize is only available after Pre Authorization Credit Card transaction. More info: https://api-docs.midtrans.com/#capture-transaction
	 */
	public captureTransaction = async (
		orderID: string,
		grossAmount?: number
	): Promise<ITransaction | ITransactionFail> =>
		await captureTransaction(
			this.isProduction,
			orderID,
			this.authKey,
			grossAmount
		);

	/**
	 * @param {string} orderID - Transaction ID given by Midtrans
	 * @description More info: https://api-docs.midtrans.com/#cancel-transaction
	 */
	public cancelTransaction = async (
		orderID: string
	): Promise<ITransaction | ITransactionFail> =>
		await cancelTransaction(this.isProduction, orderID, this.authKey);

	/**
	 * @param {string} orderID - Transaction ID given by Midtrans
	 * @description Approve method can be triggered to accept card payment transaction in which fraud_status is challenge. More info: https://api-docs.midtrans.com/#approve-transaction
	 */
	public approveTransaction = async (
		orderID: string
	): Promise<ITransaction | ITransactionFail> =>
		await approveTransaction(this.isProduction, orderID, this.authKey);

	/**
	 * @param {string} orderID - Transaction ID given by Midtrans
	 * @description Deny method can be triggered to immediately deny card payment transaction in which fraud_status is challenge. More info: https://api-docs.midtrans.com/#deny-transaction
	 */
	public denyTransaction = async (
		orderID: string
	): Promise<ITransaction | ITransactionFail> =>
		await denyTransaction(this.isProduction, orderID, this.authKey);

	/**
	 * @param {string} orderID - Transaction ID given by Midtrans
	 * @param {IRefundObjRequest} args - Request Refund Object includes refund_key,amount,and reason.
	 * @description As opposed to previous refund API, this is used to directly send the refund request to bank or payment provider (third party). This API is useful to skip the standard operation process which may take 1 or 2 days after the initial refund request. The status of corresponding transaction will immediately be updated following the refund result received from third party. It will send HTTP notification only if the refund succeeded. More info: https://api-docs.midtrans.com/#refund-transaction
	 */
	public refundTransaction = async (
		orderID: string,
		args: IRefundObjRequest
	): Promise<IRefundObj | ITransactionFail> =>
		await refundTransaction(this.isProduction, orderID, args, this.authKey);

	/**
	 * @param {string} orderID - Transaction ID given by Midtrans
	 * @description More info: https://api-docs.midtrans.com/#direct-refund-transaction
	 */
	public directRefundTransaction = async (
		orderID: string
	): Promise<IRefundObj | ITransactionFail> =>
		await directRefundTransaction(this.isProduction, orderID, this.authKey);

	/**
	 * @param {string} orderID - Transaction ID given by Midtrans
	 * @description Transaction status can be obtained by triggering the Get Status Method. More info: https://api-docs.midtrans.com/#get-transaction-status
	 */
	public statusTransaction = async (
		orderID: string
	): Promise<ITransactionStatus | ITransactionFail> =>
		await statusTransaction(this.isProduction, orderID, this.authKey);

	/**
	 * @param {string} orderID - Transaction ID given by Midtrans
	 * @param {?number} page - Index of the search. Default is 0.
	 * @param {?number} perPage - Number of transactions which is presented. Default is 10.
	 * @description Transaction status for all B2B transactions related to an order_id can be obtained by triggering the Get Status B2B Method. More info: https://api-docs.midtrans.com/#get-transaction-status-b2b
	 */
	public statusb2bTransaction = async (
		orderID: string,
		page: number | undefined = 0,
		perPage: number | undefined = 10
	): Promise<
		| {
				status_code: string;
				status_message: string;
				transactions: ITransaction[];
		  }
		| undefined
	> =>
		await statusB2bTransaction(
			this.isProduction,
			orderID,
			page,
			perPage,
			this.authKey
		);

	/**
	 * @param {IRegisterCardRequest} args - Request Register Card Object includes card_number,card_exp_month,card_exp_year,client_key,callback.
	 * @description More info: https://api-docs.midtrans.com/#register-card
	 */
	public registerCard = async (
		args: IRegisterCardRequest
	): Promise<IRegisterCardResponse | undefined> =>
		await registerCard(this.isProduction, args, this.authKey);

	/**
	 * @param {string} tokenId - Card Token
	 * @param {number?} grossAmount - The volume of the following transaction. This number can decide the remaining point balance amount which can be used on the response. NOTE: Needed for Mandiri Point.
	 * @description More info: https://api-docs.midtrans.com/#point-inquiry
	 */
	public pointInquiry = async (
		tokenId: string,
		grossAmount?: number
	): Promise<IPointInquiry | undefined> =>
		await pointInquiry(this.isProduction, tokenId, grossAmount, this.authKey);

	/**
	 * @param {string} orderID - Transaction ID given by Midtrans
	 * @description More info: https://api-docs.midtrans.com/#expire-transaction
	 */
	public expireTransaction = async (
		orderID: string
	): Promise<ITransaction | ITransactionFail> =>
		await expireTransaction(this.isProduction, orderID, this.authKey);

	/**
	 * @param {ICreatePayAccount} args - Pay Account Request Object
	 * @description More info: https://api-docs.midtrans.com/#create-pay-account
	 */
	public createPayAccount = async (
		args: ICreatePayAccount
	): Promise<ICreatePayAccountResponse | undefined> =>
		await createPayAccount(this.isProduction, args, this.authKey);

	/**
	 * @param {string} accountID - Pay Account ID
	 * @description More info: https://api-docs.midtrans.com/#get-pay-account
	 */
	public getPayAccount = async (
		accountID: string
	): Promise<IPayAccount | undefined> =>
		await getPayAccount(this.isProduction, accountID, this.authKey);

	/**
	 * @param {string} accountID - Pay Account ID
	 * @description More info: https://api-docs.midtrans.com/#unbind-pay-account
	 */
	public unbindPayAccount = async (
		accountID: string
	): Promise<IPayAccountUnBind | undefined> =>
		await unbindPayAccount(this.isProduction, accountID, this.authKey);

	/**
	 * @param {number} binNumber - Bin ID want to check.
	 * @description Midtrans API provide Bin Lookup API to get metadata for a particular bin, such as card type (Debit/Credit) or the card brand (ex. Visa, Master). More info: https://api-docs.midtrans.com/#bin-api
	 */
	public getBin = async (
		binNumber: number
	): Promise<BinApiResponse | undefined> =>
		await getBinNumber(this.isProduction, binNumber, this.authKey);

	/**
	 * @param {ICreateSubcription} args - Subscription Request object.
	 * @description Create subscription that contains all details for creating transaction. More info: https://api-docs.midtrans.com/#create-subscription
	 */
	public createSubscription = async (
		args: ICreateSubcription
	): Promise<ISubcription | undefined> =>
		await createSubscription(this.isProduction, args, this.authKey);

	/**
	 * @param {string} subscriptionId - Subscription ID given by Midtrans
	 * @description Find subscription by id to see the subscription details. More info: https://api-docs.midtrans.com/#get-subscription
	 */
	public getSubscription = async (
		subscriptionId: string
	): Promise<ISubcription | undefined> =>
		await getSubscription(this.isProduction, subscriptionId, this.authKey);

	/**
	 * @param {string} subscriptionId - Subscription ID given by Midtrans
	 * @param {IUpdateSubcription} args - Subscription request object
	 * @description https://api-docs.midtrans.com/#update-subscription
	 */
	public updateSubscription = async (
		subscriptionId: string,
		args: IUpdateSubcription
	): Promise<ISubcription | undefined> =>
		await updateSubscription(
			this.isProduction,
			subscriptionId,
			args,
			this.authKey
		);

	/**
	 * @param {string} subscriptionId - Subscription ID given by Midtrans
	 * @description Make the subscription inactive (the subscription will not create transaction anymore). More info: https://api-docs.midtrans.com/#disable-subscription
	 */
	public disableSubscription = async (
		subscriptionId: string
	): Promise<{ status_message: string } | undefined> =>
		await disableSubscription(this.isProduction, subscriptionId, this.authKey);

	/**
	 * @param {string} subscriptionId - Subscription ID given by Midtrans
	 * @description Make the subscription active (the subscription will create periodic transaction). More info: https://api-docs.midtrans.com/#enable-subscription
	 */
	public enableSubscription = async (
		subscriptionId: string
	): Promise<{ status_message: string } | undefined> =>
		await enableSubscription(this.isProduction, subscriptionId, this.authKey);

	/**
	 * @description Returns pong message for monitoring purpose
	 */
	public ping = async (): Promise<string | undefined> =>
		await ping(this.isProduction, this.authKey);

	/**
	 * @param {IBeneficiaries} args - Beneficiaries request object
	 * @description Use this API to create a new beneficiary information for quick access on the payout page in Iris Portal. More info: https://iris-docs.midtrans.com/#create-beneficiaries
	 */
	public createBeneficiaries = async (
		args: IBeneficiaries
	): Promise<ISuccessBeneficiaries | undefined> =>
		await createBeneficiaries(this.isProduction, args, this.authKey);

	/**
	 * @param {string} aliasName - Identifier name.
	 * @param {IBeneficiaries} args - Beneficiaries request object
	 * @description Use this API to update an existing beneficiary identified by its alias_name. More info: https://iris-docs.midtrans.com/#update-beneficiaries
	 */
	public updateBeneficiaries = async (
		aliasName: string,
		args: IBeneficiaries
	): Promise<ISuccessBeneficiaries | undefined> =>
		await updateBeneficiaries(this.isProduction, aliasName, args, this.authKey);

	/**
	 * @param {number} limit - Limit data beneficiaries.
	 * @description Use this API to fetch list of all beneficiaries saved in Iris Portal. More info: https://iris-docs.midtrans.com/#list-beneficiaries
	 */
	public listBeneficiaries = async (
		limit = 10
	): Promise<IBeneficiaries[] | undefined> =>
		await listBeneficiaries(this.isProduction, limit, this.authKey);

	/**
	 * @param {IPayoutRequest} args - Payout request object.
	 * @description This API is for Creator to create a payout. It can be used for single payout and also multiple payouts. More info: https://iris-docs.midtrans.com/#create-payouts
	 */
	public createPayouts = async (
		args: IPayoutRequest
	): Promise<IPayoutCreateResponse | undefined> =>
		await createPayouts(this.isProduction, args, this.authKey);

	/**
	 * @param {IPayoutApproveRequest} args - Payout approve request object
	 * @description Use this API for Apporver to approve multiple payout request. More info: https://iris-docs.midtrans.com/#approve-payouts
	 */
	public approvePayouts = async (
		args: IPayoutApproveRequest
	): Promise<IPayoutSuccessAct | undefined> =>
		await approvePayouts(this.isProduction, args, this.authKey);

	/**
	 * @param {IPayoutRejectRequest} args - Payout reject request object
	 * @description Use this API for Apporver to reject multiple payout request. More info: https://iris-docs.midtrans.com/#reject-payouts
	 */
	public rejectPayouts = async (
		args: IPayoutRejectRequest
	): Promise<IPayoutSuccessAct | undefined> =>
		await rejectPayouts(this.isProduction, args, this.authKey);

	/**
	 * @param {string} refNo - Unique reference_no of a payout
	 * @description Get details of a single payout. More info: https://iris-docs.midtrans.com/#get-payout-details
	 */
	public getPayoutDetails = async (
		refNo: string
	): Promise<IPayout | undefined> =>
		await getPayoutDetails(this.isProduction, refNo, this.authKey);

	/**
	 * @param {IStatementDate} fromDate - start date range for payouts (YYYY-MM-DD)
	 * @param {IStatementDate} toDate - end date range for payouts (YYYY-MM-DD)
	 * @description List all transactions history for a month. You can specified start date and also end date for range transaction history. More info: https://iris-docs.midtrans.com/#transaction-history
	 */
	public historyTransaction = async (
		fromDate?: IStatementDate,
		toDate?: IStatementDate
	): Promise<IStatementResult[] | undefined> =>
		await historyTransaction(this.isProduction, fromDate, toDate, this.authKey);

	/**
	 * @description Provide top up information channel for Aggregator Partner
	 */
	public topupChannels = async (): Promise<
		ITopupAggreratorChannel[] | undefined
	> => await topupChannels(this.isProduction, this.authKey);

	/**
	 * @description Show list of registered bank accounts for facilitator partner. More info: https://iris-docs.midtrans.com/#bank-accounts-facilitator
	 */
	public bankAccounts = async (): Promise<BankAccount[] | undefined> =>
		await bankAccounts(this.isProduction, this.authKey);

	/**
	 * @param {string} bankAccountID - Bank account ID to be used when creating payouts
	 * @description For Facilitator Partner, use this API is to get current balance information of your registered bank account. More info: https://iris-docs.midtrans.com/#check-balance-facilitator
	 */
	public checkBankBalance = async (
		bankAccountID: string
	): Promise<ICheckBalanceBank | undefined> =>
		await checkBankBalance(this.isProduction, bankAccountID, this.authKey);

	/**
	 * @description - Show list of supported banks in IRIS. More info: https://iris-docs.midtrans.com/#list-banks
	 */
	public listBanks = async (): Promise<BeneficiaryBank[] | undefined> =>
		await beneficiaryBanks(this.isProduction, this.authKey);

	/**
	 * @param {string} bankName - Bank code
	 * @param {string} accountID	- Account number
	 * @description Check if an account is valid, if valid return account information. More info: https://iris-docs.midtrans.com/#validate-bank-account
	 */
	public validateBankAccount = async (
		bankName: string,
		accountID: string
	): Promise<IValidateBankResult | undefined> =>
		await validateBankAccount(
			this.isProduction,
			bankName,
			accountID,
			this.authKey
		);

	public chargeTransaction = async (
		args: IChargeTransactionArgs
	): Promise<IChargeTransactionResult | undefined> =>
		await chargeTransaction(this.isProduction, args, this.authKey);
}

export default MidtransNode;
export * from './Interfaces';
