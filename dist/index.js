'use strict';
var __createBinding =
	(this && this.__createBinding) ||
	(Object.create
		? function (o, m, k, k2) {
				if (k2 === undefined) k2 = k;
				var desc = Object.getOwnPropertyDescriptor(m, k);
				if (
					!desc ||
					('get' in desc ? !m.__esModule : desc.writable || desc.configurable)
				) {
					desc = {
						enumerable: true,
						get: function () {
							return m[k];
						},
					};
				}
				Object.defineProperty(o, k2, desc);
		  }
		: function (o, m, k, k2) {
				if (k2 === undefined) k2 = k;
				o[k2] = m[k];
		  });
var __exportStar =
	(this && this.__exportStar) ||
	function (m, exports) {
		for (var p in m)
			if (p !== 'default' && !Object.prototype.hasOwnProperty.call(exports, p))
				__createBinding(exports, m, p);
	};
var __awaiter =
	(this && this.__awaiter) ||
	function (thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P
				? value
				: new P(function (resolve) {
						resolve(value);
				  });
		}
		return new (P || (P = Promise))(function (resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value));
				} catch (e) {
					reject(e);
				}
			}
			function rejected(value) {
				try {
					step(generator['throw'](value));
				} catch (e) {
					reject(e);
				}
			}
			function step(result) {
				result.done
					? resolve(result.value)
					: adopt(result.value).then(fulfilled, rejected);
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
	};
Object.defineProperty(exports, '__esModule', { value: true });
exports.MidtransNode = void 0;
const Snap_1 = require('./Snap');
const Api_1 = require('./Api');
const Iris_1 = require('./Iris');
/**
 * @class MidtransNode
 */
class MidtransNode {
	/**
	 * @param {boolean} isProduction Are you ready to production?
	 * @param {string} authKey Your midtrans server-key
	 */
	constructor(isProduction, authKey) {
		this.isProduction = isProduction;
		this.authKey = authKey;
		/**
		 * @param {SnapTransaction} args - Create Transaction Arguments.
		 * @description More info: https://snap-docs.midtrans.com
		 */
		this.createTransaction = (args) =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Snap_1.createTransaction)(this.isProduction, args, this.authKey);
			});
		/**
		 * @param {string} orderID - Transaction id from charge response
		 * @param {number} grossAmount - Amount to be captured. By default will capture whole transaction amount. NOTE: Cannot be decimal
		 * @description This method is used to capture transaction balance when transaction_status is authorize. Transaction with status authorize is only available after Pre Authorization Credit Card transaction. More info: https://api-docs.midtrans.com/#capture-transaction
		 */
		this.captureTransaction = (orderID, grossAmount) =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Api_1.captureTransaction)(this.isProduction, orderID, this.authKey, grossAmount);
			});
		/**
		 * @param {string} orderID - Transaction ID given by Midtrans
		 * @description More info: https://api-docs.midtrans.com/#cancel-transaction
		 */
		this.cancelTransaction = (orderID) =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Api_1.cancelTransaction)(this.isProduction, orderID, this.authKey);
			});
		/**
		 * @param {string} orderID - Transaction ID given by Midtrans
		 * @description Approve method can be triggered to accept card payment transaction in which fraud_status is challenge. More info: https://api-docs.midtrans.com/#approve-transaction
		 */
		this.approveTransaction = (orderID) =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Api_1.approveTransaction)(this.isProduction, orderID, this.authKey);
			});
		/**
		 * @param {string} orderID - Transaction ID given by Midtrans
		 * @description Deny method can be triggered to immediately deny card payment transaction in which fraud_status is challenge. More info: https://api-docs.midtrans.com/#deny-transaction
		 */
		this.denyTransaction = (orderID) =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Api_1.denyTransaction)(this.isProduction, orderID, this.authKey);
			});
		/**
		 * @param {string} orderID - Transaction ID given by Midtrans
		 * @param {IRefundObjRequest} args - Request Refund Object includes refund_key,amount,and reason.
		 * @description As opposed to previous refund API, this is used to directly send the refund request to bank or payment provider (third party). This API is useful to skip the standard operation process which may take 1 or 2 days after the initial refund request. The status of corresponding transaction will immediately be updated following the refund result received from third party. It will send HTTP notification only if the refund succeeded. More info: https://api-docs.midtrans.com/#refund-transaction
		 */
		this.refundTransaction = (orderID, args) =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Api_1.refundTransaction)(this.isProduction, orderID, args, this.authKey);
			});
		/**
		 * @param {string} orderID - Transaction ID given by Midtrans
		 * @description More info: https://api-docs.midtrans.com/#direct-refund-transaction
		 */
		this.directRefundTransaction = (orderID) =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Api_1.directRefundTransaction)(this.isProduction, orderID, this.authKey);
			});
		/**
		 * @param {string} orderID - Transaction ID given by Midtrans
		 * @description Transaction status can be obtained by triggering the Get Status Method. More info: https://api-docs.midtrans.com/#get-transaction-status
		 */
		this.statusTransaction = (orderID) =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Api_1.statusTransaction)(this.isProduction, orderID, this.authKey);
			});
		/**
		 * @param {string} orderID - Transaction ID given by Midtrans
		 * @param {?number} page - Index of the search. Default is 0.
		 * @param {?number} perPage - Number of transactions which is presented. Default is 10.
		 * @description Transaction status for all B2B transactions related to an order_id can be obtained by triggering the Get Status B2B Method. More info: https://api-docs.midtrans.com/#get-transaction-status-b2b
		 */
		this.statusb2bTransaction = (orderID, page = 0, perPage = 10) =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Api_1.statusB2bTransaction)(this.isProduction, orderID, page, perPage, this.authKey);
			});
		/**
		 * @param {IRegisterCardRequest} args - Request Register Card Object includes card_number,card_exp_month,card_exp_year,client_key,callback.
		 * @description More info: https://api-docs.midtrans.com/#register-card
		 */
		this.registerCard = (args) =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Api_1.registerCard)(this.isProduction, args, this.authKey);
			});
		/**
		 * @param {string} tokenId - Card Token
		 * @param {number?} grossAmount - The volume of the following transaction. This number can decide the remaining point balance amount which can be used on the response. NOTE: Needed for Mandiri Point.
		 * @description More info: https://api-docs.midtrans.com/#point-inquiry
		 */
		this.pointInquiry = (tokenId, grossAmount) =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Api_1.pointInquiry)(this.isProduction, tokenId, this.authKey, grossAmount);
			});
		/**
		 * @param {string} orderID - Transaction ID given by Midtrans
		 * @description More info: https://api-docs.midtrans.com/#expire-transaction
		 */
		this.expireTransaction = (orderID) =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Api_1.expireTransaction)(this.isProduction, orderID, this.authKey);
			});
		/**
		 * @param {ICreatePayAccount} args - Pay Account Request Object
		 * @description More info: https://api-docs.midtrans.com/#create-pay-account
		 */
		this.createPayAccount = (args) =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Api_1.createPayAccount)(this.isProduction, args, this.authKey);
			});
		/**
		 * @param {string} accountID - Pay Account ID
		 * @description More info: https://api-docs.midtrans.com/#get-pay-account
		 */
		this.getPayAccount = (accountID) =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Api_1.getPayAccount)(this.isProduction, accountID, this.authKey);
			});
		/**
		 * @param {string} accountID - Pay Account ID
		 * @description More info: https://api-docs.midtrans.com/#unbind-pay-account
		 */
		this.unbindPayAccount = (accountID) =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Api_1.unbindPayAccount)(this.isProduction, accountID, this.authKey);
			});
		/**
		 * @param {number} binNumber - Bin ID want to check.
		 * @description Midtrans API provide Bin Lookup API to get metadata for a particular bin, such as card type (Debit/Credit) or the card brand (ex. Visa, Master). More info: https://api-docs.midtrans.com/#bin-api
		 */
		this.getBin = (binNumber) =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Api_1.getBinNumber)(this.isProduction, binNumber, this.authKey);
			});
		/**
		 * @param {ICreateSubcription} args - Subscription Request object.
		 * @description Create subscription that contains all details for creating transaction. More info: https://api-docs.midtrans.com/#create-subscription
		 */
		this.createSubscription = (args) =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Api_1.createSubscription)(this.isProduction, args, this.authKey);
			});
		/**
		 * @param {string} subscriptionId - Subscription ID given by Midtrans
		 * @description Find subscription by id to see the subscription details. More info: https://api-docs.midtrans.com/#get-subscription
		 */
		this.getSubscription = (subscriptionId) =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Api_1.getSubscription)(this.isProduction, subscriptionId, this.authKey);
			});
		/**
		 * @param {string} subscriptionId - Subscription ID given by Midtrans
		 * @param {IUpdateSubcription} args - Subscription request object
		 * @description https://api-docs.midtrans.com/#update-subscription
		 */
		this.updateSubscription = (subscriptionId, args) =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Api_1.updateSubscription)(this.isProduction, subscriptionId, args, this.authKey);
			});
		/**
		 * @param {string} subscriptionId - Subscription ID given by Midtrans
		 * @description Make the subscription inactive (the subscription will not create transaction anymore). More info: https://api-docs.midtrans.com/#disable-subscription
		 */
		this.disableSubscription = (subscriptionId) =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Api_1.disableSubscription)(this.isProduction, subscriptionId, this.authKey);
			});
		/**
		 * @param {string} subscriptionId - Subscription ID given by Midtrans
		 * @description Make the subscription active (the subscription will create periodic transaction). More info: https://api-docs.midtrans.com/#enable-subscription
		 */
		this.enableSubscription = (subscriptionId) =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Api_1.enableSubscription)(this.isProduction, subscriptionId, this.authKey);
			});
		/**
		 * @description Returns pong message for monitoring purpose
		 */
		this.ping = () =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0, Iris_1.ping)(this.isProduction, this.authKey);
			});
		/**
		 * @param {IBeneficiaries} args - Beneficiaries request object
		 * @description Use this API to create a new beneficiary information for quick access on the payout page in Iris Portal. More info: https://iris-docs.midtrans.com/#create-beneficiaries
		 */
		this.createBeneficiaries = (args) =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Iris_1.createBeneficiaries)(this.isProduction, args, this.authKey);
			});
		/**
		 * @param {string} aliasName - Identifier name.
		 * @param {IBeneficiaries} args - Beneficiaries request object
		 * @description Use this API to update an existing beneficiary identified by its alias_name. More info: https://iris-docs.midtrans.com/#update-beneficiaries
		 */
		this.updateBeneficiaries = (aliasName, args) =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Iris_1.updateBeneficiaries)(this.isProduction, aliasName, args, this.authKey);
			});
		/**
		 * @param {number} limit - Limit data beneficiaries.
		 * @description Use this API to fetch list of all beneficiaries saved in Iris Portal. More info: https://iris-docs.midtrans.com/#list-beneficiaries
		 */
		this.listBeneficiaries = (limit = 10) =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Iris_1.listBeneficiaries)(this.isProduction, limit, this.authKey);
			});
		/**
		 * @param {IPayoutRequest} args - Payout request object.
		 * @description This API is for Creator to create a payout. It can be used for single payout and also multiple payouts. More info: https://iris-docs.midtrans.com/#create-payouts
		 */
		this.createPayouts = (args) =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Iris_1.createPayouts)(this.isProduction, args, this.authKey);
			});
		/**
		 * @param {IPayoutApproveRequest} args - Payout approve request object
		 * @description Use this API for Apporver to approve multiple payout request. More info: https://iris-docs.midtrans.com/#approve-payouts
		 */
		this.approvePayouts = (args) =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Iris_1.approvePayouts)(this.isProduction, args, this.authKey);
			});
		/**
		 * @param {IPayoutRejectRequest} args - Payout reject request object
		 * @description Use this API for Apporver to reject multiple payout request. More info: https://iris-docs.midtrans.com/#reject-payouts
		 */
		this.rejectPayouts = (args) =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Iris_1.rejectPayouts)(this.isProduction, args, this.authKey);
			});
		/**
		 * @param {string} refNo - Unique reference_no of a payout
		 * @description Get details of a single payout. More info: https://iris-docs.midtrans.com/#get-payout-details
		 */
		this.getPayoutDetails = (refNo) =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Iris_1.getPayoutDetails)(this.isProduction, refNo, this.authKey);
			});
		/**
		 * @param {IStatementDate} fromDate - start date range for payouts (YYYY-MM-DD)
		 * @param {IStatementDate} toDate - end date range for payouts (YYYY-MM-DD)
		 * @description List all transactions history for a month. You can specified start date and also end date for range transaction history. More info: https://iris-docs.midtrans.com/#transaction-history
		 */
		this.historyTransaction = (fromDate, toDate) =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Iris_1.historyTransaction)(this.isProduction, this.authKey, fromDate, toDate);
			});
		/**
		 * @description Provide top up information channel for Aggregator Partner
		 */
		this.topupChannels = () =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0, Iris_1.topupChannels)(this.isProduction, this.authKey);
			});
		/**
		 * @description Show list of registered bank accounts for facilitator partner. More info: https://iris-docs.midtrans.com/#bank-accounts-facilitator
		 */
		this.bankAccounts = () =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0, Iris_1.bankAccounts)(this.isProduction, this.authKey);
			});
		/**
		 * @param {string} bankAccountID - Bank account ID to be used when creating payouts
		 * @description For Facilitator Partner, use this API is to get current balance information of your registered bank account. More info: https://iris-docs.midtrans.com/#check-balance-facilitator
		 */
		this.checkBankBalance = (bankAccountID) =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Iris_1.checkBankBalance)(this.isProduction, bankAccountID, this.authKey);
			});
		/**
		 * @description - Show list of supported banks in IRIS. More info: https://iris-docs.midtrans.com/#list-banks
		 */
		this.listBanks = () =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Iris_1.beneficiaryBanks)(this.isProduction, this.authKey);
			});
		/**
		 * @param {string} bankName - Bank code
		 * @param {string} accountID	- Account number
		 * @description Check if an account is valid, if valid return account information. More info: https://iris-docs.midtrans.com/#validate-bank-account
		 */
		this.validateBankAccount = (bankName, accountID) =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Iris_1.validateBankAccount)(this.isProduction, bankName, accountID, this.authKey);
			});
		this.chargeTransaction = (args) =>
			__awaiter(this, void 0, void 0, function* () {
				return yield (0,
				Api_1.chargeTransaction)(this.isProduction, args, this.authKey);
			});
	}
}
exports.MidtransNode = MidtransNode;
exports.default = MidtransNode;
__exportStar(require('./Interfaces'), exports);
