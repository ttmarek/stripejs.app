const urlParams = new URLSearchParams(window.location.search);
const publishableKey = urlParams.get("key");
const locale = urlParams.get("locale");

const stripe = Stripe(publishableKey);

const elements = stripe.elements({ locale: locale || 'auto' });

const style = {
  base: {
    fontSize: "24px"
  }
};

const cardElement = elements.create("card", { style });

cardElement.on("change", event => {
  console.log("[event]", event);
});
cardElement.on("ready", event => {
  console.log("[ready]", event);
});
cardElement.on("focus", event => {
  console.log("[focus]", event);
});
cardElement.on("blur", event => {
  console.log("[blur]", event);
});
cardElement.on("click", event => {
  console.log("[click]", event);
});

cardElement.mount("#card-element");

window.cardElement = cardElement;
