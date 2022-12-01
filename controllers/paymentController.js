const catchAsyncErrors = require('../middlewares/catchAsyncErrors')

const stripe = require('stripe')('sk_test_51LkqrnKQjn3UdjVy5T68vJ4nGzz7qGTXS9T8Sm7L3T3hWAKiMBWEKBDuOlAUVWHOkG5pw2l1pECwvSr6mH48i1A600Ps5OBsXe');
//console.log('sk_test_51LkqrnKQjn3UdjVy5T68vJ4nGzz7qGTXS9T8Sm7L3T3hWAKiMBWEKBDuOlAUVWHOkG5pw2l1pECwvSr6mH48i1A600Ps5OBsXe');

// Process stripe payments   =>   /api/v1/payment/process
exports.processPayment = catchAsyncErrors(async (req, res, next) => {

    const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: 'VND',

        metadata: { integration_check: 'accept_a_payment' }
    });

    res.status(200).json({
        success: true,
        client_secret: paymentIntent.client_secret
    })

})

// Send stripe API Key   =>   /api/v1/stripeapi
exports.sendStripApi = catchAsyncErrors(async (req, res, next) => {

    res.status(200).json({
        stripeApiKey: process.env.STRIPE_API_KEY
    })

})