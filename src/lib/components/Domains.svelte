<script>
  import domainsList from '$lib/data/domains.js';

  // Fisher-Yates x Durstenfeld
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffle(domainsList);

  import domainStore from '$lib/store/domainStore.js';
  $: filteredDomainsList = domainsList.filter(element => element.name !== $domainStore);
</script>

{ #if filteredDomainsList.length > 0 }
  <section>
    <div class="title-container">
      <h2>Other domains</h2>
    </div>
    <ul id="domains-list" class="list-content">
      { #each filteredDomainsList as domain }
        <li><a href="https://{domain.name}" target="_blank">{domain.name}</a></li>
      { /each }
    </ul>

    <div class="background"></div>
  </section>
{ /if }

<style lang="scss">
  section {
    background-color: oklch(from var(--c-background) calc(l + 0.05) c h);
    padding: 2rem;
    border-radius: 1rem;
    border: 1px solid oklch(from var(--c-primary) calc(l - 0.5) calc(c - 0.1) h / 0.5);
    position: relative;

    &:hover,
    &:focus-within {
      & .background {
        opacity: 0;
      }
    }
  }

  .title-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-family: 'Ultra', sans-serif;
    font-size: var(--fs-title--small);
    margin-bottom: 2.5rem;
    position: relative;
    z-index: 9999;
      
    @media screen and (width >= 768px) {
      font-size: var(--fs-title);
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    position: relative;
    z-index: 9999;

    @media screen and (width >= 768px) {
      display: grid;
      grid-template: auto / repeat(2, 1fr);
      gap: 1.25rem 2rem;
    }
    
    @media screen and (width >= 1280px) {
      grid-template: auto / repeat(4, 1fr);
    }
  }

  a {
    font-family: 'Roboto Mono', monospace;
  }

  .background {
    position: absolute;
    width: 100%; 
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 1rem;
    z-index: 99;
    overflow: hidden;
    background: radial-gradient(circle at center 500%, var(--c-primary), oklch(from var(--c-background) calc(l + 0.05) c h));
    transition: opacity 0.3s;
  }
</style>
