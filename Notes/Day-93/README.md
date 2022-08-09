# Services & APIs
> These two are an overlapping tech terms that regularly get confused, but they're actaully two different concepts.

## Services
> Services are services that can be used in the projects / websites, just like the third-party packages (Axios, Express, Mongodb). Google Maps, Analytics, Stripe are services that can help speed up our projects and do things in a more efficient way.

## APIs
> API stands for Application Programming Interface, which refer to a set of functions and procedures that allow outsider to access and interacts with an existing application. It's like a bridge between our code and the actions provided by some services.

## Why using them?
> Don't reinvent the wheel, just realign it. - Anthony J. D'Angelo

> You don't have to reinvent the wheel every day. Today you will do what you did yesterday, and tomorrow you will do what you did today. Eventually you will get somethwere. - Chuck Close

If there's service works perfectly, do not bother it and focus on what we can make better. It's wise to stick to our goal instead on spending time on something exists.

---

# Stripe API
> Stripe is a payment service provider that help managing the payment with credit cards, digital wallets any many other payment methods in a fast and safe maner.

## Create an account in Stripe
> By [creating](https://dashboard.stripe.com/login) an account, we can access the test mode to trail the stripe payment in our projects.

## Set up Stripe
1. install the package in node.js
```console
npm install stripe
```
2. require it
```js
// controllers/order.controller.js

const stripe = require('stripe')("sk_test_your-secret-key);
```
3. create transaction
> Here's the [documentation](https://stripe.com/docs/payments/accept-a-payment?platform=web) for quick start.
```js
// controllers.order.controller.js

async function addOrder(req, res, next) {
  // process before payment...
  
    const session = await stripe.checkout.sessions.create({
        line_items: cart.items.map((item) => {
            return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.product.name
                    },
                    unit_amount: +item.product.price.toFixed(2) * 100
                },
                quantity: +item.quantity
            };
        }),
        mode: "payment",
        success_url: "http://localhost:3000/orders/success",
        cancel_url: "http://localhost:3000/orders/cancel",
    });
    
    res.redirect(303, session.url);
}
```

When the redirect is succeeded, it will redirect to the stripe page for entering the card details for the payment. Afterward, it will redirect to our page based on the result of the payment is success or not.

---
