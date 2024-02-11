<script>
  import Api from '../lib/api/plans.js';
  import { onMount } from 'svelte';

  var tierArr = [];
  var tierObj = {};
  var plansArray = [];
  export const getPlans = async () => {
    try {
      const response = await Api.get('api/plans');
      tierArr = response.data;

      var result = tierArr.filter((plan) => plan.name.match('Beer'));
      if (plansArray.includes(result) != true) {
        plansArray.push(result);
      }
      result = tierArr.filter((plan) => plan.name.match('Mojito'));
      if (plansArray.includes(result) != true) {
        plansArray.push(result);
      }

      console.log(plansArray);
      return plansArray;
    } catch (error) {
      console.error(error);
    }
  };
  onMount(() => {
    getPlans();
  });
</script>

<div class="row">
  {#await getPlans()}
    <p>Loading...</p>
  {:then plansArray}
    {#each plansArray as plan}
      <!-- Render your plan data here -->
      <div class="comic card">
        {#each plan as tier}
          <div class="card-text">
            <h2>{tier.name}</h2>
            <ul>
              <li>{tier.amount}{tier.currency}</li>
            </ul>
          </div>
          <div class="row-button">
            <button>Subscribe</button>
          </div>
        {/each}
      </div>
    {/each}
  {/await}
</div>

<style scoped>
  .row {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
  }
  .card {
    inline-size: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .card-text {
    display: flex;
    flex-direction: column;
    padding-inline-start: 1rem;
    text-align: start;
  }
  li {
    margin-inline-start: 1.5rem;
  }
  .row-button {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
</style>
