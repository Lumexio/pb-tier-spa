<script>
  import Api from '../lib/api/plans.js';
  import { onMount } from 'svelte';
  import { push } from 'svelte-spa-router';
  import { plans, selectedplan } from '../stores/fetched.js';

  var tierArr = [];

  const items = [
    {
      name: 'Beer Tier',
      text: [
        'Gestion de inventarios',
        'Toma de ordenes',
        'Cobro de cover',
        'Comandas digitales',
      ],
      value: null,
    },
    {
      name: 'Mojito Tier',
      text: ['Gestion de inventarios', 'Toma de ordenes', 'Cobro de cover'],
      value: null,
    },
    {
      name: 'Elixir Tier',
      text: ['AIlixir'],
      value: null,
    },
  ];
  export const getPlans = async () => {
    try {
      const response = await Api.get('api/plans');
      tierArr = response.data;
      plans.set(tierArr);
      return tierArr;
    } catch (error) {
      console.error(error);
    }
  };
  onMount(() => {
    getPlans();
  });
  function selectPlan(params) {
    selectedplan.set(params);
    selectedplan.subscribe((value) => {
      if (value) {
        push('/display/tier');
      }
    });
  }
</script>

<div class="row">
  {#each items as item}
    <div class="comic card">
      <h2>{item.name}</h2>

      <div class="card-text">
        <h3>Incluye:</h3>
        {#each item.text as text}
          <li>{text}</li>
        {/each}
      </div>
      <div class="row-button">
        <button type="button" on:click="{() => selectPlan(item)}"
          >Comprar</button
        >
      </div>
    </div>
  {/each}
</div>

<style scoped>
  li {
    margin-inline-start: 1.5rem;
  }
</style>
