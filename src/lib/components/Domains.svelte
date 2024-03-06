<script>
	import { onMount } from 'svelte';
  import domainsList from '$lib/data/domains.js';
	export let domain;

  // Fisher-Yates x Durstenfeld
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffle(domainsList);

  let filteredDomainsList = [];
  onMount(() => {
    filteredDomainsList = domainsList.filter(element => element.name !== domain);
  })
</script>

<section>
  <h2>Other domains for sale ({filteredDomainsList.length})</h2>
  <ul id="domains-list">
    { #each filteredDomainsList as domain }
      <li><a href="https://{domain.name}" target="_blank">{domain.name}</a></li>
    { /each }
  </ul>
</section>

<style>
  h2 {
    font-weight: var(--fw--bold);
    font-size: var(--fs-title--small);
    margin-bottom: 1rem;
  }

  ul {
    list-style-position: inside;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  a {
    font-family: monospace;
  }
</style>