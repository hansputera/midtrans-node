# 🛒 Midtrans-Node

**Unofficial** Midtrans API wrapper for NodeJS. 💡 I created this to make it easier for me to integrate some of 🛠 my projects using 🛒 Midtrans, the methods I created here are available from Rest API, Snap, and Iris API 😎.

# Quick Start

## 🤔 Installation
You need to install the package first!

> npm install hanif-midtrans-node

> yarn add hanif-midtrans-node

> pnpm install hanif-midtrans-node

## Usage 🤟

You just need a midtrans server key from https://dashboard.midtrans.com.
And, you're ready to code!

```ts
import { MidtransNode } from 'hanif-midtrans-node';

// new MidtransNode(isProduction, midtransServerKey);
const midtrans = new MidtransNode(false, 'YOUR MIDTRANS SERVER KEY'); // sandbox mode

midtrans.createTransaction({
    transaction_details: {
        gross_amount: 20000, // IDR 20.000
        order_id: 'midtrans-node',
    },
}).then(console.log).catch(console.error);
```

And, that's it! Also, docs is availabe on https://hansputera.github.io/midtrans-node

# License
MIT