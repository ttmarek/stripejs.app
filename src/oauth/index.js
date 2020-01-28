const urlParams = new URLSearchParams(window.location.search);
const clientId = urlParams.get("client_id")

const DEFAULT_REDIRECT_URL = 'https://connect.stripe.com/connect/default/oauth/test';
const REDIRECT_URL = urlParams.get("redirect_uri") || DEFAULT_REDIRECT_URL;

const style = {
  base: {
    fontSize: "24px"
  }
};

const EXPRESS_OAUTH = 'https://connect.stripe.com/express/oauth/authorize';
const EXPRESS_OAUTH_URL = `${EXPRESS_OAUTH}?redirect_uri=${REDIRECT_URL}&client_id=${clientId}&state=${Date.now()}`;

const expressOAuthLinks = [
  ['express-link', EXPRESS_OAUTH_URL],
  ['express-link-individual', `${EXPRESS_OAUTH_URL}&stripe_user[business_type]=individual`],
  ['express-link-company', `${EXPRESS_OAUTH_URL}&stripe_user[business_type]=company`],
  ['express-link-prefill-email', `${EXPRESS_OAUTH_URL}&stripe_user[email]=prefilled@email.com`],
  ['express-link-suggested-capabilities',`${EXPRESS_OAUTH_URL}&suggested_capabilities[]=transfers`],
];

expressOAuthLinks.forEach(function(link) {
  console.log(link);
  const el = document.getElementById(link[0]);
  el.href = link[1];
  el.textContent = link[1];
})

const standardLink = document.getElementById('standard-link');

const standardOAuthLink = `
https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${clientId}&scope=read_write
`;

standardLink.textContent = standardOAuthLink;
standardLink.href = standardOAuthLink;