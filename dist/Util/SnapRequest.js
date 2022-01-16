'use strict';
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, '__esModule', { value: true });
exports.snapRequest = void 0;
const axios_1 = __importDefault(require('axios'));
/**
 * @description get axios request instance.
 * @param {boolean} production Production mode?
 * @param {string} token midtrans server key
 */
function snapRequest(production, token) {
	const baseURL = production
		? 'https://app.midtrans.com/snap/v1'
		: 'https://app.sandbox.midtrans.com/snap/v1';
	return axios_1.default.create({
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
exports.snapRequest = snapRequest;
