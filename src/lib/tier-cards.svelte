<script>
  const items = [
    {
      name: 'Mojito Tier',
      text: [
        'Gestion de inventarios',
        'Toma de ordenes',
        'Cobro de cover',
        'Comandas digitales',
      ],
    },
    {
      name: 'Beer Tier',
      text: ['Gestion de inventarios', 'Toma de ordenes', 'Cobro de cover'],
    },
    {
      name: 'Elixir Tier',
      text: ['AIlixir'],
    },
  ];
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
        <button type="button">Comprar</button>
      </div>
    </div>
  {/each}
</div>

<style scoped>
  .row {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
  }
  .card {
    width: 100%;
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
