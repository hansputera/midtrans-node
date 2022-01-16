'use strict';
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, '__esModule', { value: true });
exports.irisRequest = void 0;
const axios_1 = __importDefault(require('axios'));
/**
 * @description get axios request instance.
 * @param {boolean} production Production mode?
 * @param {string} token midtrans server key
 */
function irisRequest(isProduction, token) {
	const baseURL = isProduction
		? 'https://app.midtrans.com/iris'
		: 'https://app.sandbox.midtrans.com/iris';
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
exports.irisRequest = irisRequest;
