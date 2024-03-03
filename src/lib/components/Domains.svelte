<script>
	import { onMount } from "svelte";

  export let domain;

  let domainsList = [
    'blackcats.party',
    'bum.su',
    'emilie.fun',
    'emilie.pm',
    'e-pals.party',
    'lust.sx',
    'lustess.com',
    'lustfulslut.com',
    'testtube.work'
  ]

  // filter out current domain
  domainsList = domainsList.filter((element) => element !== domain);

  // Fisher-Yates x Durstenfeld
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffle(domainsList);
  
  let domainsAmount = undefined;
  onMount(() => {
    domainsAmount = document.getElementById('domains-list').children.length;
  })

</script>

<section>
  <h2>Other domains for sale ({domainsAmount})</h2>
  <ul id="domains-list">
    { #each domainsList as domainName }
      <li><a href="https://${domainName}" target="_blank">{domainName}</a></li>
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