import global from "../translations/es/global.json"

const resources = { global }

declare module "i18next" {
  interface CustomTypeOptions {
    resources: typeof resources
    defaultNS: "global"
  }
}
