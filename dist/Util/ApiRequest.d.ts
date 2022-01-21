import { AxiosInstance, AxiosRequestConfig } from 'axios';
/**
 * @description get axios request instance.
 * @param {boolean} production Production mode?
 * @param {string} versionApi API Version (2 or 1)
 * @param {string} token midtrans server key
 * @param {AxiosRequestConfig} options Axios options
 * @return {AxiosInstance}
 */
export declare function apiRequest(
	production: boolean,
	versionApi: string | undefined,
	token: string,
	options?: Omit<AxiosRequestConfig, 'baseURL' | 'auth'>
): AxiosInstance;
