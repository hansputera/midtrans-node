import { AxiosInstance } from 'axios';
/**
 * @description get axios request instance.
 * @param {boolean} production Production mode?
 * @param {string} token midtrans server key
 */
export declare function snapRequest(
	production: boolean,
	token: string
): AxiosInstance;
