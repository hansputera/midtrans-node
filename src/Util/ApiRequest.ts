import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

/**
 * @description get axios request instance.
 * @param {boolean} production Production mode?
 * @param {string} versionApi API Version (2 or 1)
 * @param {string} token midtrans server key
 * @param {AxiosRequestConfig} options Axios options
 * @return {AxiosInstance}
 */
export function apiRequest(
	production: boolean,
	versionApi: string = 'v2',
	token: string,
	options?: Omit<AxiosRequestConfig, 'baseURL' | 'auth'>
): AxiosInstance {
	const baseURL = production
		? `https://api.midtrans.com/${versionApi}`
		: `https://api.sandbox.midtrans.com/${versionApi}`;
	return axios.create({
		...options,
		baseURL,
		auth: {
			username: token,
			password: '',
		},
	});
}
