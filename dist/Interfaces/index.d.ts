export * from './Bin';
export * from './Customer';
export * from './PayAccount';
export * from './PointInquiry';
export * from './RegisterCardResponse';
export * from './Subcription';
export * from './Transaction';
export * from './Refund';
export * from './SnapTransaction';
export * from './Beneficiaries';
export * from './Statements';
export * from './Payouts';
/**
 * Configuration interface.
 */
export interface IConfig {
    /**
     * Are you ready to production mode?
     * Set to `true` if you are ready.
     * And, set it to `false` if you want use sandbox mode.
     */
    productionMode: boolean;
    /**
     * Custom Notification URLs.
     * It could be an array or just a string.
     * Make sure the URL is active or ready to receive requests from midtrans.
     *
     * @api snap
     */
    overrideNotificationUrls?: string[] | string;
    /**
     * Server authentication key.
     */
    authKey: string;
}
