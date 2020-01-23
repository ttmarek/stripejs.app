const urlParams = new URLSearchParams(window.location.search);
const clientId = urlParams.get("client_id")

const style = {
  base: {
    fontSize: "24px"
  }
};

const expressLink = document.getElementById('express-link');

const expressOAuthLink = `
https://connect.stripe.com/express/oauth/authorize?redirect_uri=https://connect.stripe.com/connect/default/oauth/test&client_id=${clientId}&state=${Date.now()}
`;

expressLink.textContent = expressOAuthLink;
expressLink.href = expressOAuthLink;