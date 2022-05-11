/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SERVER: string
  // more env variables...
}

export interface ImportMeta {
  readonly env: ImportMetaEnv
}
