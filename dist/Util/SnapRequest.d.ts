import { AxiosInstance, AxiosRequestConfig } from 'axios';
/**
 * @description get axios request instance.
 * @param {boolean} production Production mode?
 * @param {string} token midtrans server key
 * @param {AxiosRequestConfig} options Axios Options
 * @return {AxiosInstance}
 */
export declare function snapRequest(
	production: boolean,
	token: string,
	options?: Omit<AxiosRequestConfig, 'baseURL' | 'auth'>
): AxiosInstance;
