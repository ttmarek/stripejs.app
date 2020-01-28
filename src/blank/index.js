const urlParams = new URLSearchParams(window.location.search);
const publishableKey = urlParams.get("key");

const stripe = Stripe(publishableKey);