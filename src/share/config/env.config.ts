export const EnvConfig = {
  serverHost: import.meta.env.VITE_SERVER_HOST,

  oauthServerHost: import.meta.VITE_OAUTH_SERVER_HOST,

  oauthDomain: import.meta.env.VITE_OAUTH_DOMAIN,
  spaceDomain: import.meta.env.VITE_SPACE_DOMAIN,
  manageDomain: import.meta.env.VITE_MANAGE_DOMAIN,
  websiteDomain: import.meta.env.VITE_WEBSITE_DOMAIN,
  githubClientId: import.meta.env.VITE_GITHUB_CLIENT_ID,
  imageBaseUrl: import.meta.env.VITE_IMAGE_BASE_URL,
};
