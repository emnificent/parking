<script>
	import Stores from '$lib/components/Stores.svelte';
	import Negotiate from '$lib/components/Negotiate.svelte';
	import Domains from '$lib/components/Domains.svelte';
</script>

<main>
  <Stores/>

  <Negotiate />

  <Domains />
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    gap: 96px;

    @media screen and (width >= 768px) {
      gap: 128px;
    }

    @media screen and (width >= 1280px) {
      gap: 160px;
    }
  }
</style>