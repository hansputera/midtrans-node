import Midtrans from "../src/index";
const midtrans = new Midtrans(false, "");

midtrans.createTransaction({
    transaction_details: {
        gross_amount: 20000,
        order_id: "MID-21921"
    },
    customer_details: {
        first_name: "Brian",
        last_name: "Roth",
        email: "brianroth@example.com",
        enabled_payments: ["akulaku", "indomaret", "gopay", "shopeepay"]
    }
}).then((transaction) => {
    // transaction => { token: '', redirect_url: '' }
    console.log(transaction);
});