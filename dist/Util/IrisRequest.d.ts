import { AxiosInstance, AxiosRequestConfig } from 'axios';
/**
 * @description get axios request instance.
 * @param {boolean} isProduction Production mode?
 * @param {string} token midtrans server key
 * @param {AxiosRequestConfig} options Axios options
 * @return {AxiosInstance}
 */
export declare function irisRequest(isProduction: boolean, token: string, options?: Omit<AxiosRequestConfig, 'baseURL' | 'auth'>): AxiosInstance;
