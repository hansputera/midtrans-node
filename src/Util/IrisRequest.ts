import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

/**
 * @description get axios request instance.
 * @param {boolean} isProduction Production mode?
 * @param {string} token midtrans server key
 * @param {AxiosRequestConfig} options Axios options
 * @return {AxiosInstance}
 */
export function irisRequest(
	isProduction: boolean,
	token: string,
	options?: Omit<AxiosRequestConfig, 'baseURL' | 'auth'>
): AxiosInstance {
	const baseURL = isProduction
		? 'https://app.midtrans.com/iris'
		: 'https://app.sandbox.midtrans.com/iris';
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
