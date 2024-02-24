
import { wrap } from 'svelte-spa-router/wrap'


const routes = {

 '/': wrap({
  asyncComponent: () => import('./routes/Home.svelte')
 }),
 '/display/tier': wrap({
  asyncComponent: () => import('./routes/DisplayTier.svelte')
 }),
 // Catch-all
 // This is optional, but if present it must be the last
 '*': wrap({
  asyncComponent: () => import('./routes/NotFound.svelte')
 }),
}
export default routes;