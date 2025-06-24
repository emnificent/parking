<script>
	import StoresNegotiateLayout from '$lib/layouts/StoresNegotiateLayout.svelte';
	import Domains from '$lib/components/Domains.svelte';
</script>

<main>
  <StoresNegotiateLayout />

  <Domains />
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    gap: 6rem;
  }
</style>