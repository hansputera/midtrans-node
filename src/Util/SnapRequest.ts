import axios, { AxiosInstance } from 'axios';
import { version } from '../../package.json';

/**
 * @description get axios request instance.
 * @param {boolean} production Production mode?
 * @param {string} token midtrans server key
 */
export function snapRequest(production: boolean, token: string): AxiosInstance {
	const baseURL = production
		? 'https://app.midtrans.com/snap/v1'
		: 'https://app.sandbox.midtrans.com/snap/v1';
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
