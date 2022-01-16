'use strict';
var __awaiter =
	(this && this.__awaiter) ||
	function (thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P
				? value
				: new P(function (resolve) {
						resolve(value);
				  });
		}
		return new (P || (P = Promise))(function (resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value));
				} catch (e) {
					reject(e);
				}
			}
			function rejected(value) {
				try {
					step(generator['throw'](value));
				} catch (e) {
					reject(e);
				}
			}
			function step(result) {
				result.done
					? resolve(result.value)
					: adopt(result.value).then(fulfilled, rejected);
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
	};
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, '__esModule', { value: true });
exports.enableSubscription = void 0;
const ApiRequest_1 = require('../../Util/ApiRequest');
const MidtransNodeError_1 = __importDefault(
	require('../../Util/MidtransNodeError')
);
/**
 * @description Enable a subscription
 * @param {boolean} isProduction Production/Sandbox mode
 * @param {string} subscriptionId subscription id want to disable
 * @param {token} token midtrans server key
 */
function enableSubscription(isProduction, subscriptionId, token) {
	var _a;
	return __awaiter(this, void 0, void 0, function* () {
		try {
			const { data } = yield (0, ApiRequest_1.apiRequest)(
				isProduction,
				'v2',
				token
			).post(`/subscriptions/${subscriptionId}/enable`);
			return data;
		} catch (e) {
			throw new MidtransNodeError_1.default(
				JSON.stringify(
					(_a = e.response) === null || _a === void 0 ? void 0 : _a.data
				)
			);
		}
	});
}
exports.enableSubscription = enableSubscription;
