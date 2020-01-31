const urlParams = new URLSearchParams(window.location.search);
const publishableKey = urlParams.get("key");

const stripe = Stripe(publishableKey);
const elements = stripe.elements();

const paymentRequest = stripe.paymentRequest({
  country: "US",
  currency: "usd",
  total: {
    label: "Demo total",
    amount: 1099
  },
  requestPayerName: true,
  requestPayerEmail: true
});

const prButton = elements.create("paymentRequestButton", {
  paymentRequest
});

(async () => {
  // Check the availability of the Payment Request API first.
  const result = await paymentRequest.canMakePayment();

  console.log("canMakePayment: ", result);

  if (result) {
    prButton.mount("#payment-request-button");
  } else {
    document.getElementById("payment-request-button").style.display = "none";
  }
})();

const getPaymentMethod = new Promise(resolve => {
  paymentRequest.on("paymentmethod", resolve);
});

const getToken = new Promise(resolve => {
  paymentRequest.on("token", resolve);
});

Promise.all([getPaymentMethod, getToken]).then(result => {
  console.log(result);
  result[0].complete("success");
});
