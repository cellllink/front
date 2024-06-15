export const EnvConfig = {
  apiHost: import.meta.env.VITE_API_HOST || "",
  apiHostPrefix: import.meta.env.VITE_API_HOST_PREFIX || "",
  oauthDomain: import.meta.env.VITE_OAUTH_DOMAIN,
  spaceDomain: import.meta.env.VITE_SPACE_DOMAIN,
  manageDomain: import.meta.env.VITE_MANAGE_DOMAIN,
  websiteDomain: import.meta.env.VITE_WEBSITE_DOMAIN,
  githubClientId: import.meta.env.VITE_GITHUB_CLIENT_ID,
  imageBaseUrl: import.meta.env.VITE_IMAGE_BASE_URL,
};

