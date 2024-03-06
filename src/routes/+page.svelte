<script>
	import Stores from '$lib/components/Stores.svelte';
	import Domains from '$lib/components/Domains.svelte';
	import Commentary from '$lib/components/Commentary.svelte';

  const domain = window.location.hostname;
</script>

<svelte:head>
  <title>{domain} is for sale</title>
</svelte:head>

<header>
  <h1>{domain} is for sale</h1>
  <p>You're in luck!</p>
</header>

<main>
  <Stores {domain} />

  <div class="extra">
    <Domains {domain} />
    <Commentary />
  </div>
</main>

<footer></footer>

<style lang="scss">
  header {
    text-align: center;
    padding-block: 2rem 4rem;

    @media screen and (width >= 768px) {
      margin-bottom: 2rem;
      padding-block: 2rem 8rem;

      color: var(--c-dark--deeper);
      background-image: linear-gradient(to right, var(--c-dark), var(--c-primary), var(--c-dark));
      position: relative;

      &::after {
        content: "";
        display: block;
        position: absolute;
        height: 50%;
        width: 100%;
        bottom: 0;
        background-image: linear-gradient(to top, var(--c-dark), rgba(24, 24, 24, 0));
      }

      @media (prefers-color-scheme: light) {
        background-image: linear-gradient(to right, var(--c-light), var(--c-primary), var(--c-light));

        &::after {
          background-image: linear-gradient(to top, var(--c-light), rgba(232, 232, 232, 0));
        }
      }
    }

    @media screen and (width >= 992px) {
      margin-bottom: 4rem;
      padding-block: 4rem 8rem;
    }

    & h1 {
      font-weight: var(--fw--bold);
      font-size: var(--fs-title);
    }
  }

  footer {
    height: 20vh;
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media screen and (width >= 768px) {
      gap: 4rem;
    }
  }

  .extra {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media screen and (width >= 992px) {
      display: grid;
      grid-template: auto / 2fr 5fr;
    }
  }
</style>