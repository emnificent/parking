<script>
	import Stores from '$lib/components/Stores.svelte';
	import Negotiate from '$lib/components/Negotiate.svelte';
	import Domains from '$lib/components/Domains.svelte';

  import { page } from '$app/stores';
  let domain = $page.url.hostname;

  export let form;
</script>

<svelte:head>
  <title>{domain} is for sale</title>
</svelte:head>

<header>
  <h1><span class="domain">{domain}</span><br />is for sale</h1>
</header>

<main>
  <Stores {domain} />

  <Negotiate {domain} {form} />

  <Domains {domain} />
</main>

<footer></footer>

<style lang="scss">
  header {
    text-align: center;
    margin-block: 20px 128px;

    @media screen and (width >= 768px) {
      margin-bottom: 144px;
    }

    @media screen and (width >= 1280px) {
      margin-bottom: 160px;
    }

    & h1 {
      font-weight: var(--fw--bold);
      font-size: var(--fs-text);
      
      @media screen and (width >= 768px) {
        font-size: var(--fs-title);
      }

      & .domain {
        font-family: 'Climate Crisis', sans-serif;
        font-weight: var(--fw);
        font-size: var(--fs-title--small);
        color: var(--c-primary);
        
        @media screen and (width >= 768px) {
          font-size: 3rem;
        }

        @media screen and (width >= 1280px) {
          font-size: 5rem;
        }
      }
    }
  }

  footer {
    height: 16px;

    @media screen and (width >= 768px) {
      height: 24px;
    }

    @media screen and (width >= 1280px) {
      height: 32px;
    }
  }

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