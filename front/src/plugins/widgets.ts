import type { App, Plugin } from 'vue'

export const widgets: Plugin = (app: App<Element>) => {
  app.directive('focus', {
    mounted: (el: HTMLElement) => el.focus()
  })
  app.directive('select', {
    mounted: (el: HTMLInputElement) => el.select()
  })
}
