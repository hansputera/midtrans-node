import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

/**
 * @description get axios request instance.
 * @param {boolean} production Production mode?
 * @param {string} token midtrans server key
 * @param {AxiosRequestConfig} options Axios Options
 * @return {AxiosInstance}
 */
export function snapRequest(
	production: boolean,
	token: string,
	options?: Omit<AxiosRequestConfig, 'baseURL' | 'auth'>
): AxiosInstance {
	const baseURL = production
		? 'https://app.midtrans.com/snap/v1'
		: 'https://app.sandbox.midtrans.com/snap/v1';
	return axios.create({
		...options,
		baseURL,
		headers: {
			'User-Agent': `Midtrans-Node`,
		},
		auth: {
			username: token,
			password: '',
		},
	});
}
