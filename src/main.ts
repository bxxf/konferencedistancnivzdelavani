import { RouterOptions, ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
// @ts-ignore
import { setupLayouts } from 'layouts-generated'
import App from './App.vue'
import 'virtual:windi.css'
import PathNotFound from '@/components/PathNotFound.vue'
import 'virtual:windi-devtools'
import '@/assets/scss/fonts.scss'

const routes = setupLayouts([
  ...generatedRoutes,
  {
    path: '/about',
    component: generatedRoutes[0].component,
  },
  {
    path: '/program',
    component: generatedRoutes[0].component,
  },
  {
    path: '/contact',
    component: generatedRoutes[0].component,
  },
  {
    path: '/program.pdf',
    component: {},
  },
  { path: '/:pathMatch(.*)*', component: PathNotFound },
])

export const createApp = ViteSSG(App, { routes }, (ctx) => {
  Object.values(import.meta.globEager('./plugins/*.ts')).forEach((i) =>
    i.install?.(ctx),
  )
})
