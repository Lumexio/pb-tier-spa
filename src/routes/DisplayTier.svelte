<script>
  import { onMount } from 'svelte';
  import { plans, selectedplan } from '../stores/fetched.js';
  export var p;
  export var benefits = [];
  onMount(() => {
    selectedplan.subscribe((value) => {
      plans.subscribe((val) => {
        for (const key in val) {
          if (value?.name.includes(key) === true) {
            val[key].name = value?.name;
            p = val[key];
            benefits = p.benefits;
          }
        }
      });
    });
  });
  function selectPlan(params) {
    console.log(params);
  }
</script>

<div>
  <div class="comic">
    <h1>{p?.name}</h1>
    <div class="card-text">
      <h3>Incluye:</h3>

      {#each benefits as benefit}
        <li>{benefit}</li>
      {/each}
    </div>
    <div class="row-button" style="justify-content: space-around;margin:.5rem">
      <h2>Plan por mes</h2>
      <button type="button" on:click="{() => selectPlan(p.monthly)}"
        >Comprar</button
      >
    </div>
    <div class="row-button" style="justify-content: space-around;margin:.5rem">
      <h2>Plan por año</h2>
      <button type="button" on:click="{() => selectPlan(p.yearly)}"
        >Compar</button
      >
    </div>
  </div>
</div>

<style scoped>
  li {
    margin-inline-start: 1.5rem;
  }
</style>
