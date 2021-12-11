import axios, { AxiosInstance } from 'axios';
import { version } from '../../package.json';

/**
 * @description get axios request instance.
 * @param {boolean} production Production mode?
 * @param {string} token midtrans server key
 */
export function irisRequest(
	isProduction: boolean,
	token: string
): AxiosInstance {
	const baseURL = isProduction
		? 'https://app.midtrans.com/iris'
		: 'https://app.sandbox.midtrans.com/iris';
	return axios.create({
		baseURL,
		headers: {
			'User-Agent': `Midtrans-Node/${version}`,
		},
		auth: {
			username: token,
			password: '',
		},
	});
}
