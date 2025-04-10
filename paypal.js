const paypal = require('paypal-rest-sdk');

paypal.configure({
  'mode': 'sandbox', // or 'live'
  'client_id': 'YOUR_CLIENT_ID',
  'client_secret': 'YOUR_CLIENT_SECRET'
});

function createPayment(totalAmount, returnUrl, cancelUrl) {
  const paymentJson = {
    intent: 'sale',
    payer: {
      payment_method: 'paypal'
    },
    redirect_urls: {
      return_url: returnUrl,
      cancel_url: cancelUrl
    },
    transactions: [{
      amount: {
        total: totalAmount,
        currency: 'USD'
      },
      description: 'Purchase of lawn mowers'
    }]
  };

  return new Promise((resolve, reject) => {
    paypal.payment.create(paymentJson, function (error, payment) {
      if (error) {
        reject(error);
      } else {
        resolve(payment);
      }
    });
  });
}

function executePayment(paymentId, payerId) {
  return new Promise((resolve, reject) => {
    const executePaymentJson = {
      payer_id: payerId
    };

    paypal.payment.execute(paymentId, executePaymentJson, function (error, payment) {
      if (error) {
        reject(error);
      } else {
        resolve(payment);
      }
    });
  });
}

export { createPayment, executePayment };