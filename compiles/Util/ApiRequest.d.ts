import { AxiosInstance } from 'axios';
/**
 * @description get axios request instance.
 * @param {boolean} production Production mode?
 * @param {string} versionApi API Version (2 or 1)
 * @param {string} token midtrans server key
 */
export declare function apiRequest(production: boolean, versionApi: string, token: string): AxiosInstance;
