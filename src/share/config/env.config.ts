export const EnvConfig = {
  apiHost: process.env.REACT_APP_API_HOST || "",
  apiHostPrefix: process.env.REACT_APP_API_HOST_PREFIX || "",

  oauthDomain: process.env.REACT_APP_OAUTH_DOMAIN,
  spaceDomain: process.env.REACT_APP_SPACE_DOMAIN,
  manageDomain: process.env.REACT_APP_MANAGE_DOMAIN,
  websiteDomain: process.env.REACT_APP_WEBSITE_DOMAIN,

  githubClientId: process.env.REACT_APP_GITHUB_CLIENT_ID,
  imageBaseUrl: process.env.REACT_APP_IMAGE_BASE_URL,
};
