export const EnvConfig = {
  serverHost: import.meta.env.VITE_SERVER_HOST,
  serverHostOauth: import.meta.env.VITE_SERVER_HOST_OAUTH,
  serverHostCommon: import.meta.env.VITE_SERVER_HOST_COMMON,

  domainWebsite: import.meta.env.VITE_DOMAIN_WEBSITE,
  domainOauth: import.meta.env.VITE_DOMAIN_OAUTH,
  domainSpace: import.meta.env.VITE_DOMAIN_SPACE,
  domainManage: import.meta.env.VITE_DOMAIN_MANAGE,

  imageBaseUrl: import.meta.env.VITE_IMAGE_BASE_URL,

  githubClientId: import.meta.env.VITE_GITHUB_CLIENT_ID,
};
