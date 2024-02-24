<script>
  import Navtop from './lib/nav-bar.svelte';
  import Router from 'svelte-spa-router';
  import routes from './routes.js';
</script>

<main>
  <Navtop />
  <Router {routes} />
</main>
