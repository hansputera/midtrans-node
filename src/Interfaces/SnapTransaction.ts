import type { PaymentType, UnitExpiry } from './Transaction';

/**
 * Bank types.
 */
export type Banks =
	| 'bca'
	| 'bni'
	| 'mandiri'
	| 'cimb'
	| 'bri'
	| 'danamon'
	| 'maybank'
	| 'mega';
/**
 * Allowed Bins type.
 */
export type allowedBins =
	| 'bni'
	| 'bca'
	| 'mandiri'
	| 'cimb'
	| 'bri'
	| 'maybank';
/**
 * Credit card type.
 */
export type CreditCardType = 'authorize' | 'authorize_capture';
/**
 * Snap Transaction Details.
 */
export interface SnapTransactionDetails {
	/**
	 * The order id want to use. (e.g. TX-000-000-001)
	 */
	order_id: string;
	/**
	 * The gross amount.
	 */
	gross_amount: number;
}

export interface BaseVa {
	/**
	 * VA Number.
	 */
	va_number?: string;
}

/**
 * Bca VA Interface.
 */
export interface BcaVa extends BaseVa {
	/**
	 * Company code.
	 */
	sub_company_code?: string;
	/**
	 * Free text object.
	 */
	free_text?: FreeText;
}

/**
 * Permata VA Interface.
 */
export interface PermataVa extends BaseVa {
	/**
	 * Permata VA Recipient name.
	 */
	recipient_name?: string;
}

/**
 * BNI Va Interface
 */
export type BniVa = BaseVa;

/**
 * BRI VA Number
 */
export type BriVa = BaseVa;

/**
 * Gopay interface.
 */
export interface GoPay {
	/**
	 * Set it to `true` if you want enable the callback.
	 * And, set it to `false` if you want disable it.
	 *
	 * @default false
	 */
	enable_callback?: boolean;

	/**
	 * Your callback url. (e.g. https://example.com/callback/gopay)
	 */
	callback_url?: string;
}

/**
 * ShopeePay interface.
 */
export interface ShopeePay {
	/**
	 * Your callback url. (e.g. https://example.com/callback/shopeepay)
	 */
	callback_url?: string;
}

/**
 * Expiry options.
 */
export interface Expiry {
	/**
	 * Expire in x time.
	 */
	start_time: string;
	/**
	 * Expire time unit.
	 */
	unit: UnitExpiry;
	/**
	 * Expire duration.
	 */
	duration: number;
}

export interface FreeText {
	inquiry?: FreeTextItem[];
	payment?: FreeTextItem[];
}

export interface FreeTextItem {
	en: string;
	id: string;
}

export interface SnapItemDetails {
	/**
	 * Item ID (e.g. `1`)
	 * @optional
	 */
	id?: string;

	/**
	 * Item price (e.g. `5000`)
	 */
	price: number;
	/**
	 * Item quantity (e.g. `5`)
	 */
	quantity: number;
	/**
	 * Item name (e.g. `Sate bakar`)
	 * @required
	 */
	name: string;
	/**
	 * Item Brand (e.g. `Nestle`)
	 * @optional
	 */
	brand?: string;
	/**
	 * Item category (e.g. `baju`, `candy`)
	 * @optional
	 */
	category?: string;
	/**
	 * Merchant name.
	 * @optional
	 */
	merchant_name?: string;
}

export interface SnapCard {
	secure?: boolean;
	bank?: Banks;
	channel?: 'migs';
	type?: CreditCardType;
	whitelist_bins?: allowedBins;
	installment?: {
		required: false;
		terms: object;
	};
	dynamic_descriptor?: {
		merchant_name?: string;
		city_name?: string;
		country_code?: string;
	};
}

export interface SnapCustomerDetails {
	/**
	 * Customer first name. (e.g. `Hanif Dwy`)
	 * @optional
	 */
	first_name?: string;
	/**
	 * Customer last name. (e.g. `Putra S`)
	 * @optional
	 */
	last_name?: string;
	/**
	 * Customer email.
	 * @optional
	 */
	email?: string;
	/**
	 * Customer phone. (e.g. `081345827121`)
	 * @optional
	 */
	phone?: string;
	/**
	 * Customer address.
	 * @optional
	 */
	billing_address?: SnapAddress;
	/**
	 * Shipping address.
	 * @optional
	 */
	shipping_address?: SnapAddress;
	/**
	 * Enabled
	 */
	enabled_payments?: PaymentType[];
}

export interface SnapAddress {
	first_name?: string;
	last_name?: string;
	email?: string;
	phone?: string;
	address?: string;
	country_code?: string;
	postal_code?: string;
	city?: string;
}

export interface SnapTransaction {
	/**
	 * The transaction details.
	 */
	transaction_details: SnapTransactionDetails;
	/**
	 * Item details.
	 */
	item_details?: SnapItemDetails[];
	/**
	 * Customer details.
	 */
	customer_details?: SnapCustomerDetails;
	enabled_payments?: PaymentType;
	credit_card?: SnapCard;
	bca_va?: BcaVa;
	permata_va?: PermataVa;
	bni_va?: BniVa;
	bri_va?: BriVa;
	shopeepay?: ShopeePay;
	gopay?: GoPay;
	/**
	 * Callback Options.
	 */
	callbacks?: {
		/**
		 * Your callback url here.
		 */
		finish?: string;
	};
	/**
	 * Expiry options.
	 */
	expiry?: Expiry;
	custom_field1?: string;
	custom_field2?: string;
	custom_field3?: string;
}
