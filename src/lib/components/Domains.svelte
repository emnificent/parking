<script>
	export let domain;

  const domainsList = [
    'antifamail.org',
    'blackcats.party',
    'bum.su',
    'emilie.fun',
    'emilie.pm',
    'e-pals.party',
    'lust.sx',
    'lustess.com',
    'lustfulslut.com',
    'testtube.work'
  ];

  // Fisher-Yates x Durstenfeld
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffle(domainsList);
</script>

<section>
  <h2>Other domains for sale ({domainsList.length - 1})</h2>
  <ul id="domains-list">
    { #each domainsList as domainName }
      <li class:hide={domainName === domain}><a href="https://{domainName}" target="_blank">{domainName}</a></li>
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

  .hide {
    display: none;
  }
</style>