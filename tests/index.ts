import Midtrans from '../src/index';
const midtrans = new Midtrans(false, '');

describe('midtrans', () => {
    describe('#createTransaction()', () => {
        it('should return object include token, and redirect_uri when serverKey is valid', (done) => {
            midtrans.createTransaction({
                transaction_details: {
                    gross_amount: 20000,
                    order_id: 'MID-' + Math.floor(Math.random() * 999999999999999999999)
                },
                customer_details: {
                    first_name: 'Brian',
                    last_name: 'Roth',
                    email: 'brianroth@example.com',
                    enabled_payments: ['akulaku', 'indomaret', 'gopay', 'shopeepay']
                },
                item_details: [{
                    name: 'Baby Pants',
                    quantity: 2,
                    price: 20_000, // IDR
                }]
            }).then((transaction) => {
                // transaction => { token: '', redirect_url: '' }
                console.log(transaction);
                if (transaction) done();
            }).catch((error) => {
                done(error);
            });
        });
    });
});