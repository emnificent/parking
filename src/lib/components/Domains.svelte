<script>
	import { onMount } from "svelte";

  let domainsAmount = undefined;
  onMount(() => {
    domainsAmount = document.getElementById('domains').children.length;
  })
</script>

<section>
  <h2>Other domains for sale ({domainsAmount})</h2>
  <ul id="domains">
    <li><a href="https://emilie.fun" target="_blank">emilie.fun</a></li>
    <li><a href="https://emilie.pm" target="_blank">emilie.pm</a></li>
    <li><a href="https://testtube.work" target="_blank">testtube.work</a></li>
    <li><a href="https://lustfulslut.com" target="_blank">lustfulslut.com</a></li>
    <li><a href="https://lustess.com" target="_blank">lustess.com</a></li>
    <li><a href="https://lust.sx" target="_blank">lust.sx</a></li>
    <li><a href="https://blackcats.party" target="_blank">blackcats.party</a></li>
    <li><a href="https://e-pals.party" target="_blank">e-pals.party</a></li>
    <li><a href="https://bum.su" target="_blank">bum.su</a></li>
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