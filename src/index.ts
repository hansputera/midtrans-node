import ApiRequest from "./Util/ApiRequest";
import SnapRequest from "./Util/SnapRequest";
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
import { version } from "../package.json";
import type { SnapTransaction, IRefundObjRequest, IRegisterCardRequest, ICreatePayAccount, ICreateSubcription, IUpdateSubcription } from "./Interfaces";
import IrisRequest from "./Util/IrisRequest";

class MidtransNode
{
    constructor(public isProduction: boolean,public serverKey: string) {
        ApiRequest(isProduction).defaults.headers['Authorization'] = `Basic ${this.authKey}`;
        SnapRequest(isProduction).defaults.headers['Authorization'] = `Basic ${this.authKey}`;
        IrisRequest(isProduction).defaults.headers['Authorization'] = `Basic ${this.authKey}`;
    }
    public authKey = Buffer.from(`${this.serverKey}:`, 'base64');
    public version = version;

    // Methods
    public createTransaction = async (args: SnapTransaction) => await CreateTransaction(this.isProduction, args);
    public captureTransaction = async (orderID: string, grossAmount?: number) => await CaptureTransaction(this.isProduction, orderID, grossAmount);
    public cancelTransaction = async (orderID: string) => await CancelTransaction(this.isProduction, orderID);
    public approveTransaction = async (orderID: string) => await ApproveTransaction(this.isProduction, orderID);
    public denyTransaction = async (orderID: string) => await DenyTransaction(this.isProduction, orderID);
    public refundTransaction = async (orderID: string, args: IRefundObjRequest) => await RefundTransaction(this.isProduction, orderID, args);
    public directRefundTransaction = async (orderID: string) => await DirectRefundTransaction(this.isProduction, orderID);
    public statusTransaction = async (orderID: string) => await StatusTransaction(this.isProduction, orderID);
    public statusb2bTransaction = async (orderID: string, page = 0, per_page = 10) => await StatusB2bTransaction(this.isProduction, orderID, page, per_page);
    public registerCard = async (args: IRegisterCardRequest) => await RegisterCard(this.isProduction, args);
    public pointInquiry = async (tokenId: string, grossAmount?: number) => await PointInquiry(this.isProduction, tokenId, grossAmount);
    public expireTransaction = async (orderID: string) => await ExpireTransaction(this.isProduction, orderID);
    public createPayAccount = async (args: ICreatePayAccount) => await CreatePayAccount(this.isProduction, args);
    public getPayAccount = async (accountID: string) => await GetPayAccount(this.isProduction, accountID);
    public unbindPayAccount = async (accountID: string) => await UnbindPayAccount(this.isProduction, accountID);
    public getBin = async (binNumber: number) => await GetBinNumber(this.isProduction, binNumber);
    public createSubscription = async (args: ICreateSubcription) => await CreateSubscription(this.isProduction, args);
    public getSubscription = async (subscriptionId: string) => await GetSubscription(this.isProduction, subscriptionId);
    public updateSubscription = async (subscriptionId: string, args: IUpdateSubcription) => await UpdateSubscription(this.isProduction, subscriptionId, args);
    public disableSubscription = async (subscriptionId: string) => await DisableSubscription(this.isProduction, subscriptionId);
    public enableSubscription = async (subscriptionId: string) => await EnableSubscription(this.isProduction, subscriptionId);
}

export default MidtransNode;