<script>
	import Stores from '$lib/components/Stores.svelte';
	import Negotiate from '$lib/components/Negotiate.svelte';
</script>

<div>
  <Stores/>

  <Negotiate />
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: column;
    gap: 6rem;

    @media screen and (width >= 1280px) {
      flex-direction: row;
    }
  }
</style>