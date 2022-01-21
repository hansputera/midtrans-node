import type { SnapTransaction } from '../Interfaces/SnapTransaction';
import MidtransNodeError from '../Util/MidtransNodeError';
import { snapRequest } from '../Util/SnapRequest';
import type { AxiosError } from 'axios';
import { IConfig } from '../Interfaces';

/**
 * @description create a transaction
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {SnapTransaction} args create transaction arguments.
 * @param {IConfig} cfg midtrans config
 */
export async function createTransaction(
	isProduction: boolean,
	args: SnapTransaction,
	cfg: IConfig
): Promise<{ token: string; redirect_url: string } | undefined> {
	try {
		if (args.item_details && Array.isArray(args.item_details)) {
			args.item_details = args.item_details.map((item) => ({
				...item,
				quantity: item.quantity < 0 ? 1 : Math.floor(item.quantity),
				price: Math.floor(item.price),
			}));
		}
		const { data }: { data: { token: string; redirect_url: string } } =
			await snapRequest(isProduction, cfg.authKey).post('/transactions', args, {
				headers: cfg.overrideNotificationUrls
					? {
							'X-Override-Notification': Array.isArray(
								cfg.overrideNotificationUrls
							)
								? cfg.overrideNotificationUrls.join(',')
								: cfg.overrideNotificationUrls,
					  }
					: {},
			});
		return data;
	} catch (e) {
		throw new MidtransNodeError(
			JSON.stringify((e as AxiosError).response?.data)
		);
	}
}
