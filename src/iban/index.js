const urlParams = new URLSearchParams(window.location.search);
const publishableKey = urlParams.get("key");

const stripe = Stripe(publishableKey);
const elements = stripe.elements();

const style = {
  base: {
    fontSize: "24px"
  }
};

const supportedCountries = ["SEPA"];

const ibanElement = elements.create("iban", { style, supportedCountries });

ibanElement.on("change", event => {
  console.log("[event]", event);
});
ibanElement.on("ready", event => {
  console.log("[ready]", event);
});
ibanElement.on("focus", event => {
  console.log("[focus]", event);
});
ibanElement.on("blur", event => {
  console.log("[blur]", event);
});
ibanElement.on("click", event => {
  console.log("[click]", event);
});

ibanElement.mount("#iban-element");

window.ibanElement = ibanElement;
