const urlParams = new URLSearchParams(window.location.search);
const publishableKey = urlParams.get("key");

const stripe = Stripe(publishableKey);
const elements = stripe.elements();

const style = {
  base: {
    fontSize: "24px"
  }
};

const cardNumberElement = elements.create("cardNumber", { style });
const cardExpiryElement = elements.create("cardExpiry", { style });

cardNumberElement.on("change", event => {
  console.log("[event]", event);
});
cardNumberElement.on("ready", event => {
  console.log("[ready]", event);
});
cardNumberElement.on("focus", event => {
  console.log("[focus]", event);
});
cardNumberElement.on("blur", event => {
  console.log("[blur]", event);
});
cardNumberElement.on("click", event => {
  console.log("[click]", event);
});

cardExpiryElement.on("change", event => {
  console.log("[event]", event);
});
cardExpiryElement.on("ready", event => {
  console.log("[ready]", event);
});
cardExpiryElement.on("focus", event => {
  console.log("[focus]", event);
});
cardExpiryElement.on("blur", event => {
  console.log("[blur]", event);
});
cardExpiryElement.on("click", event => {
  console.log("[click]", event);
});

cardNumberElement.mount("#card-number-element");
cardExpiryElement.mount("#card-expiry-element");

window.cardNumberElement = cardNumberElement;
