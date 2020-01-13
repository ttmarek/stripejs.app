const urlParams = new URLSearchParams(window.location.search);
const publishableKey = urlParams.get("key");

const stripe = Stripe(publishableKey);
const elements = stripe.elements();

const style = {
  base: {
    fontSize: "24px"
  }
};

const idealElement = elements.create("idealBank", { style });

idealElement.on("change", event => {
  console.log("[event]", event);
});
idealElement.on("ready", event => {
  console.log("[ready]", event);
});
idealElement.on("focus", event => {
  console.log("[focus]", event);
});
idealElement.on("blur", event => {
  console.log("[blur]", event);
});
idealElement.on("click", event => {
  console.log("[click]", event);
});

idealElement.mount("#ideal-element");

window.idealElement = idealElement;
