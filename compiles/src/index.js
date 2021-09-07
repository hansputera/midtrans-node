"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MidtransNode = void 0;
const CreateTransaction_1 = __importDefault(require("./Snap/CreateTransaction"));
const CaptureTransaction_1 = __importDefault(require("./Api/CaptureTransaction"));
const CancelTransaction_1 = __importDefault(require("./Api/CancelTransaction"));
const ApproveTransaction_1 = __importDefault(require("./Api/ApproveTransaction"));
const DenyTransaction_1 = __importDefault(require("./Api/DenyTransaction"));
const RefundTransaction_1 = __importDefault(require("./Api/RefundTransaction"));
const DirectRefundTransaction_1 = __importDefault(require("./Api/DirectRefundTransaction"));
const StatusTransaction_1 = __importDefault(require("./Api/StatusTransaction"));
const StatusB2bTransaction_1 = __importDefault(require("./Api/StatusB2bTransaction"));
const ExpireTransaction_1 = __importDefault(require("./Api/ExpireTransaction"));
const RegisterCard_1 = __importDefault(require("./Api/RegisterCard"));
const PointInquiry_1 = __importDefault(require("./Api/PointInquiry"));
const CreatePayAccount_1 = __importDefault(require("./Api/CreatePayAccount"));
const GetPayAccount_1 = __importDefault(require("./Api/GetPayAccount"));
const UnbindPayAccount_1 = __importDefault(require("./Api/UnbindPayAccount"));
const GetBinNumber_1 = __importDefault(require("./Api/GetBinNumber"));
const CreateSubcription_1 = __importDefault(require("./Api/Subscriptions/CreateSubcription"));
const GetSubscription_1 = __importDefault(require("./Api/Subscriptions/GetSubscription"));
const UpdateSubscription_1 = __importDefault(require("./Api/Subscriptions/UpdateSubscription"));
const DisableSubscription_1 = __importDefault(require("./Api/Subscriptions/DisableSubscription"));
const EnableSubscription_1 = __importDefault(require("./Api/Subscriptions/EnableSubscription"));
const ApprovePayouts_1 = __importDefault(require("./Iris/ApprovePayouts"));
const BankAccounts_1 = __importDefault(require("./Iris/BankAccounts"));
const BeneficiaryBanks_1 = __importDefault(require("./Iris/BeneficiaryBanks"));
const CheckBankBalance_1 = __importDefault(require("./Iris/CheckBankBalance"));
const CreateBeneficiaries_1 = __importDefault(require("./Iris/CreateBeneficiaries"));
const CreatePayouts_1 = __importDefault(require("./Iris/CreatePayouts"));
const GetPayoutDetails_1 = __importDefault(require("./Iris/GetPayoutDetails"));
const HistoryTransaction_1 = __importDefault(require("./Iris/HistoryTransaction"));
const ListBeneficiaries_1 = __importDefault(require("./Iris/ListBeneficiaries"));
const Ping_1 = __importDefault(require("./Iris/Ping"));
const RejectPayouts_1 = __importDefault(require("./Iris/RejectPayouts"));
const TopupChannels_1 = __importDefault(require("./Iris/TopupChannels"));
const UpdateBeneficiaries_1 = __importDefault(require("./Iris/UpdateBeneficiaries"));
const ValidateBankAccount_1 = __importDefault(require("./Iris/ValidateBankAccount"));
const package_json_1 = require("../package.json");
/**
 *
 * @class MidtransNode Main class for midtrans-node.
 */
class MidtransNode {
    /**
     *
     * @param isProduction Ready to production?
     * @param authKey Your midtrans server-key
     */
    constructor(isProduction, authKey) {
        this.isProduction = isProduction;
        this.authKey = authKey;
        this.version = package_json_1.version;
        // Methods
        /**
         *
         * @param args - Create Transaction Arguments.
         * @description More info: https://snap-docs.midtrans.com
         */
        this.createTransaction = (args) => __awaiter(this, void 0, void 0, function* () { return yield (0, CreateTransaction_1.default)(this.isProduction, args, this.authKey); });
        /**
         *
         * @param orderID - Transaction id from charge response
         * @param grossAmount - Amount to be captured. By default will capture whole transaction amount. NOTE: Cannot be decimal
         * @description This method is used to capture transaction balance when transaction_status is authorize. Transaction with status authorize is only available after Pre Authorization Credit Card transaction. More info: https://api-docs.midtrans.com/#capture-transaction
         */
        this.captureTransaction = (orderID, grossAmount) => __awaiter(this, void 0, void 0, function* () { return yield (0, CaptureTransaction_1.default)(this.isProduction, orderID, grossAmount, this.authKey); });
        /**
         *
         * @param orderID - Transaction ID given by Midtrans
         * @description More info: https://api-docs.midtrans.com/#cancel-transaction
         */
        this.cancelTransaction = (orderID) => __awaiter(this, void 0, void 0, function* () { return yield (0, CancelTransaction_1.default)(this.isProduction, orderID, this.authKey); });
        /**
         *
         * @param orderID - Transaction ID given by Midtrans
         * @description Approve method can be triggered to accept card payment transaction in which fraud_status is challenge. More info: https://api-docs.midtrans.com/#approve-transaction
         */
        this.approveTransaction = (orderID) => __awaiter(this, void 0, void 0, function* () { return yield (0, ApproveTransaction_1.default)(this.isProduction, orderID, this.authKey); });
        /**
         *
         * @param orderID - Transaction ID given by Midtrans
         * @description Deny method can be triggered to immediately deny card payment transaction in which fraud_status is challenge. More info: https://api-docs.midtrans.com/#deny-transaction
         */
        this.denyTransaction = (orderID) => __awaiter(this, void 0, void 0, function* () { return yield (0, DenyTransaction_1.default)(this.isProduction, orderID, this.authKey); });
        /**
         *
         * @param orderID - Transaction ID given by Midtrans
         * @param args - Request Refund Object includes refund_key,amount,and reason.
         * @description As opposed to previous refund API, this is used to directly send the refund request to bank or payment provider (third party). This API is useful to skip the standard operation process which may take 1 or 2 days after the initial refund request. The status of corresponding transaction will immediately be updated following the refund result received from third party. It will send HTTP notification only if the refund succeeded. More info: https://api-docs.midtrans.com/#refund-transaction
         */
        this.refundTransaction = (orderID, args) => __awaiter(this, void 0, void 0, function* () { return yield (0, RefundTransaction_1.default)(this.isProduction, orderID, args, this.authKey); });
        /**
         *
         * @param orderID - Transaction ID given by Midtrans
         * @description More info: https://api-docs.midtrans.com/#direct-refund-transaction
         */
        this.directRefundTransaction = (orderID) => __awaiter(this, void 0, void 0, function* () { return yield (0, DirectRefundTransaction_1.default)(this.isProduction, orderID, this.authKey); });
        /**
         *
         * @param orderID - Transaction ID given by Midtrans
         * @description Transaction status can be obtained by triggering the Get Status Method. More info: https://api-docs.midtrans.com/#get-transaction-status
         */
        this.statusTransaction = (orderID) => __awaiter(this, void 0, void 0, function* () { return yield (0, StatusTransaction_1.default)(this.isProduction, orderID, this.authKey); });
        /**
         *
         * @param orderID - Transaction ID given by Midtrans
         * @param page - Index of the search. Default is 0.
         * @param per_page - Number of transactions which is presented. Default is 10.
         * @description Transaction status for all B2B transactions related to an order_id can be obtained by triggering the Get Status B2B Method. More info: https://api-docs.midtrans.com/#get-transaction-status-b2b
         */
        this.statusb2bTransaction = (orderID, page = 0, per_page = 10) => __awaiter(this, void 0, void 0, function* () { return yield (0, StatusB2bTransaction_1.default)(this.isProduction, orderID, page, per_page, this.authKey); });
        /**
         *
         * @param args - Request Register Card Object includes card_number,card_exp_month,card_exp_year,client_key,callback.
         * @description More info: https://api-docs.midtrans.com/#register-card
         */
        this.registerCard = (args) => __awaiter(this, void 0, void 0, function* () { return yield (0, RegisterCard_1.default)(this.isProduction, args, this.authKey); });
        /**
         *
         * @param tokenId - Card Token
         * @param grossAmount - The volume of the following transaction. This number can decide the remaining point balance amount which can be used on the response. NOTE: Needed for Mandiri Point.
         * @description More info: https://api-docs.midtrans.com/#point-inquiry
         */
        this.pointInquiry = (tokenId, grossAmount) => __awaiter(this, void 0, void 0, function* () { return yield (0, PointInquiry_1.default)(this.isProduction, tokenId, grossAmount, this.authKey); });
        /**
         *
         * @param orderID - Transaction ID given by Midtrans
         * @description More info: https://api-docs.midtrans.com/#expire-transaction
         */
        this.expireTransaction = (orderID) => __awaiter(this, void 0, void 0, function* () { return yield (0, ExpireTransaction_1.default)(this.isProduction, orderID, this.authKey); });
        /**
         *
         * @param args - Pay Account Request Object
         * @description More info: https://api-docs.midtrans.com/#create-pay-account
         */
        this.createPayAccount = (args) => __awaiter(this, void 0, void 0, function* () { return yield (0, CreatePayAccount_1.default)(this.isProduction, args, this.authKey); });
        /**
         *
         * @param accountID - Pay Account ID
         * @description More info: https://api-docs.midtrans.com/#get-pay-account
         */
        this.getPayAccount = (accountID) => __awaiter(this, void 0, void 0, function* () { return yield (0, GetPayAccount_1.default)(this.isProduction, accountID, this.authKey); });
        /**
         *
         * @param accountID - Pay Account ID
         * @description More info: https://api-docs.midtrans.com/#unbind-pay-account
         */
        this.unbindPayAccount = (accountID) => __awaiter(this, void 0, void 0, function* () { return yield (0, UnbindPayAccount_1.default)(this.isProduction, accountID, this.authKey); });
        /**
         *
         * @param binNumber - Bin ID want to check.
         * @description Midtrans API provide Bin Lookup API to get metadata for a particular bin, such as card type (Debit/Credit) or the card brand (ex. Visa, Master). More info: https://api-docs.midtrans.com/#bin-api
         */
        this.getBin = (binNumber) => __awaiter(this, void 0, void 0, function* () { return yield (0, GetBinNumber_1.default)(this.isProduction, binNumber, this.authKey); });
        /**
         *
         * @param args - Subscription Request object.
         * @description Create subscription that contains all details for creating transaction. More info: https://api-docs.midtrans.com/#create-subscription
         */
        this.createSubscription = (args) => __awaiter(this, void 0, void 0, function* () { return yield (0, CreateSubcription_1.default)(this.isProduction, args, this.authKey); });
        /**
         *
         * @param subscriptionId - Subscription ID given by Midtrans
         * @description Find subscription by id to see the subscription details. More info: https://api-docs.midtrans.com/#get-subscription
         */
        this.getSubscription = (subscriptionId) => __awaiter(this, void 0, void 0, function* () { return yield (0, GetSubscription_1.default)(this.isProduction, subscriptionId, this.authKey); });
        /**
         *
         * @param subscriptionId - Subscription ID given by Midtrans
         * @param args - Subscription request object
         * @description https://api-docs.midtrans.com/#update-subscription
         */
        this.updateSubscription = (subscriptionId, args) => __awaiter(this, void 0, void 0, function* () { return yield (0, UpdateSubscription_1.default)(this.isProduction, subscriptionId, args, this.authKey); });
        /**
         *
         * @param subscriptionId - Subscription ID given by Midtrans
         * @description Make the subscription inactive (the subscription will not create transaction anymore). More info: https://api-docs.midtrans.com/#disable-subscription
         */
        this.disableSubscription = (subscriptionId) => __awaiter(this, void 0, void 0, function* () { return yield (0, DisableSubscription_1.default)(this.isProduction, subscriptionId, this.authKey); });
        /**
         *
         * @param subscriptionId - Subscription ID given by Midtrans
         * @description Make the subscription active (the subscription will create periodic transaction). More info: https://api-docs.midtrans.com/#enable-subscription
         */
        this.enableSubscription = (subscriptionId) => __awaiter(this, void 0, void 0, function* () { return yield (0, EnableSubscription_1.default)(this.isProduction, subscriptionId, this.authKey); });
        /**
         *
         * @description Returns pong message for monitoring purpose
         */
        this.ping = () => __awaiter(this, void 0, void 0, function* () { return yield (0, Ping_1.default)(this.isProduction, this.authKey); });
        /**
         *
         * @param args - Beneficiaries request object
         * @description Use this API to create a new beneficiary information for quick access on the payout page in Iris Portal. More info: https://iris-docs.midtrans.com/#create-beneficiaries
         */
        this.createBeneficiaries = (args) => __awaiter(this, void 0, void 0, function* () { return yield (0, CreateBeneficiaries_1.default)(this.isProduction, args, this.authKey); });
        /**
         *
         * @param aliasName - Identifier name.
         * @param args - Beneficiaries request object
         * @description Use this API to update an existing beneficiary identified by its alias_name. More info: https://iris-docs.midtrans.com/#update-beneficiaries
         */
        this.updateBeneficiaries = (aliasName, args) => __awaiter(this, void 0, void 0, function* () { return yield (0, UpdateBeneficiaries_1.default)(this.isProduction, aliasName, args, this.authKey); });
        /**
         *
         * @param limit - Limit data beneficiaries.
         * @description Use this API to fetch list of all beneficiaries saved in Iris Portal. More info: https://iris-docs.midtrans.com/#list-beneficiaries
         */
        this.listBeneficiaries = (limit = 10) => __awaiter(this, void 0, void 0, function* () { return yield (0, ListBeneficiaries_1.default)(this.isProduction, limit, this.authKey); });
        /**
         *
         * @param args - Payout request object.
         * @description This API is for Creator to create a payout. It can be used for single payout and also multiple payouts. More info: https://iris-docs.midtrans.com/#create-payouts
         */
        this.createPayouts = (args) => __awaiter(this, void 0, void 0, function* () { return yield (0, CreatePayouts_1.default)(this.isProduction, args, this.authKey); });
        /**
         *
         * @param args - Payout approve request object
         * @description Use this API for Apporver to approve multiple payout request. More info: https://iris-docs.midtrans.com/#approve-payouts
         */
        this.approvePayouts = (args) => __awaiter(this, void 0, void 0, function* () { return yield (0, ApprovePayouts_1.default)(this.isProduction, args, this.authKey); });
        /**
         *
         * @param args - Payout reject request object
         * @description Use this API for Apporver to reject multiple payout request. More info: https://iris-docs.midtrans.com/#reject-payouts
         */
        this.rejectPayouts = (args) => __awaiter(this, void 0, void 0, function* () { return yield (0, RejectPayouts_1.default)(this.isProduction, args, this.authKey); });
        /**
         *
         * @param refNo - Unique reference_no of a payout
         * @description Get details of a single payout. More info: https://iris-docs.midtrans.com/#get-payout-details
         */
        this.getPayoutDetails = (refNo) => __awaiter(this, void 0, void 0, function* () { return yield (0, GetPayoutDetails_1.default)(this.isProduction, refNo, this.authKey); });
        /**
         *
         * @param fromDate - start date range for payouts (YYYY-MM-DD)
         * @param toDate - end date range for payouts (YYYY-MM-DD)
         * @description List all transactions history for a month. You can specified start date and also end date for range transaction history. More info: https://iris-docs.midtrans.com/#transaction-history
         */
        this.historyTransaction = (fromDate, toDate) => __awaiter(this, void 0, void 0, function* () { return yield (0, HistoryTransaction_1.default)(this.isProduction, fromDate, toDate, this.authKey); });
        /**
         *
         * @description Provide top up information channel for Aggregator Partner
         */
        this.topupChannels = () => __awaiter(this, void 0, void 0, function* () { return yield (0, TopupChannels_1.default)(this.isProduction, this.authKey); });
        /**
         *
         * @description Show list of registered bank accounts for facilitator partner. More info: https://iris-docs.midtrans.com/#bank-accounts-facilitator
         */
        this.bankAccounts = () => __awaiter(this, void 0, void 0, function* () { return yield (0, BankAccounts_1.default)(this.isProduction, this.authKey); });
        /**
         *
         * @param bankAccountID - Bank account ID to be used when creating payouts
         * @description For Facilitator Partner, use this API is to get current balance information of your registered bank account. More info: https://iris-docs.midtrans.com/#check-balance-facilitator
         */
        this.checkBankBalance = (bankAccountID) => __awaiter(this, void 0, void 0, function* () { return yield (0, CheckBankBalance_1.default)(this.isProduction, bankAccountID, this.authKey); });
        /**
         *
         * @description - Show list of supported banks in IRIS. More info: https://iris-docs.midtrans.com/#list-banks
         */
        this.listBanks = () => __awaiter(this, void 0, void 0, function* () { return yield (0, BeneficiaryBanks_1.default)(this.isProduction, this.authKey); });
        /**
         *
         * @param bank - Bank code
         * @param accountID	- Account number
         * @description Check if an account is valid, if valid return account information. More info: https://iris-docs.midtrans.com/#validate-bank-account
         */
        this.validateBankAccount = (bankName, accountID) => __awaiter(this, void 0, void 0, function* () { return yield (0, ValidateBankAccount_1.default)(this.isProduction, bankName, accountID, this.authKey); });
    }
}
exports.MidtransNode = MidtransNode;
exports.default = MidtransNode;
