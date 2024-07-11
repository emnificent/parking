<script>
	import Stores from '$lib/components/Stores.svelte';
	import Negotiate from '$lib/components/Negotiate.svelte';
	import Domains from '$lib/components/Domains.svelte';

  export let form;
</script>

<main>
  <Stores/>

  <Negotiate {form} />

  <Domains />
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    gap: 128px;

    @media screen and (width >= 768px) {
      gap: 144px;
    }

    @media screen and (width >= 1280px) {
      gap: 160px;
    }
  }
</style>