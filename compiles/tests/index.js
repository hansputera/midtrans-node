"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../src/index"));
const midtrans = new index_1.default(false, "");
describe("midtrans", () => {
    describe("#createTransaction()", () => {
        it("should return object include token, and redirect_uri when serverKey is valid", (done) => {
            midtrans.createTransaction({
                transaction_details: {
                    gross_amount: 20000,
                    order_id: "MID-21920"
                },
                customer_details: {
                    first_name: "Brian",
                    last_name: "Roth",
                    email: "brianroth@example.com",
                    enabled_payments: ["akulaku", "indomaret", "gopay", "shopeepay"]
                }
            }).then((transaction) => {
                // transaction => { token: '', redirect_url: '' }
                if (transaction)
                    done();
            }).catch((error) => {
                done(error);
            });
        });
    });
});
