import axios, { AxiosInstance } from 'axios';
import { version } from '../../package.json';

/**
 * @description get axios request instance.
 * @param {boolean} production Production mode?
 * @param {string} versionApi API Version (2 or 1)
 * @param {string} token midtrans server key
 */
export function apiRequest(
	production: boolean,
	versionApi: string = 'v2',
	token: string
): AxiosInstance {
	const baseURL = production
		? `https://api.midtrans.com/${versionApi}`
		: `https://api.sandbox.midtrans.com/${versionApi}`;
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
