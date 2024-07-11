<script>
  import { page } from '$app/stores';
  import domainStore from '$lib/store/domainStore.js';
  domainStore.update(() => $page.url.hostname)
  
  import { onMount } from 'svelte';
  import domainsList from '$lib/data/domains.js';
  onMount(() => {
    const domainsListName = domainsList.map(domain => domain.name);
    if (!domainsListName.includes($domainStore)) {
      domainStore.update(() => domainsList[Math.floor(Math.random() * domainsList.length)].name);
    }
  });

  import '$lib/styles/reset.css';
  import '$lib/styles/global.css';

  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>{$domainStore} is for sale</title>
</svelte:head>

<Header />

<slot />

<Footer />