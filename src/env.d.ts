/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SERVER_HOST: string;
  readonly VITE_SERVER_HOST_OAUTH: string;

  readonly VITE_DOMAIN_WEBSITE: string;
  readonly VITE_DOMAIN_OAUTH: string;
  readonly VITE_DOMAIN_SPACE: string;
  readonly VITE_DOMAIN_MANAGE: string;

  readonly VITE_IMAGE_BASE_URL: string;

  readonly VITE_GITHUB_CLIENT_ID: string;
  readonly VITE_GITHUB_CLIENT_ID2: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
