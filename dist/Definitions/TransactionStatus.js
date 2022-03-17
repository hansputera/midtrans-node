"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionStatus = void 0;
exports.TransactionStatus = {
    200: 'success',
    201: 'pending',
    202: 'denied',
    300: 'move permanently',
    400: 'validation error',
    401: 'access denied',
    402: "merchant doesn't have access",
    403: 'resource is only capable of generating content',
    404: 'not found',
    405: 'method not allowed',
    406: 'duplicate order id',
    407: 'expired',
    408: 'merchant sent wrong data type',
    409: 'merchant has sent too many transactions for the same card number',
    410: 'merchant account is deactivated',
    411: 'token id is missing, invalid, or timed out',
    412: 'merchant cannot modify status of the transaction',
    413: 'the request cannot be processed due to malformed syntax in the request body',
    414: 'refund request is rejected due to invalid amount',
    500: 'interval server error',
    501: 'the feature has not available',
    502: 'internal server error: bank connection problem',
    503: 'bank/partner is experiencing connection issue',
    504: 'internal server error: fraud detection is unavailable',
    505: 'the requested payment reference is not available. either try again to use different one',
};
