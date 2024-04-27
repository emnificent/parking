<script>
  import '$lib/styles/reset.css';
  import '$lib/styles/global.css';

  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import { page } from '$app/stores';
  let domain = $page.url.hostname;
</script>

<svelte:head>
  <title>{domain} is for sale</title>
</svelte:head>

<Header {domain} />

<slot />

<Footer />