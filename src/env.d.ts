/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SERVER_HOST: string;

  readonly VITE_OAUTH_DOMAIN: string;
  readonly VITE_SPACE_DOMAIN: string;
  readonly VITE_MANAGE_DOMAIN: string;
  readonly VITE_WEBSITE_DOMAIN: string;

  readonly VITE_IMAGE_BASE_URL: string;

  readonly VITE_GITHUB_CLIENT_ID: string;
  readonly VITE_GITHUB_CLIENT_ID2: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
