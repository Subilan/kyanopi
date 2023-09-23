// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-nocheck
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {rel: "preconnect", href: "https://google-fonts.mirrors.sjtug.sjtu.edu.cn/"},
        {rel: "stylesheet", href: "https://google-fonts.mirrors.sjtug.sjtu.edu.cn/icon?family=Material+Icons"},
        {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Serif+Text&family=Fira+Sans:ital,wght@0,400;0,500;1,400;1,500&family=Noto+Serif+SC:wght@400;900&display=swap"}
      ]
    }
  }
})
