<script>
  import domainStore from '$lib/store/domainStore.js';
  import domainsList from '$lib/data/domains.js';

  $: domainName = $domainStore;
  $: domainPrice = domainsList.filter(domain => domain.name === $domainStore)[0]?.price;
</script>

<section>
  <h2>Buy now — <span class="price">${domainPrice}</span></h2>
  <ul>
    <li>
      <a href="https://dynadot.com/market/user-listings/{domainName}" target="_blank" aria-label="Buy now for ${domainPrice} on Dynadot">
        Dynadot
      </a>
    </li>
    <li>
      <a href="https://sedo.com/search/details/?domain={domainName}" target="_blank" aria-label="Buy now for ${domainPrice} on Sedo">
        Sedo
      </a>
    </li>
  </ul>
  <p class="disclaimer">We do not support GoDaddy because of their abusive practices.</p>
</section>

<style lang="scss">
  .disclaimer {
    text-align: center;
    padding-top: 16px;
    font-size: var(--fs-text--small);
    opacity: 0.5;
  }

  section {
    background-color: oklch(from var(--c-background) calc(l + 0.05) c h);
    padding: 32px;
    border-radius: 16px;
  }

  h2 {
    font-size: var(--fs-title--small);
    font-family: 'Ultra', sans-serif;
    line-height: 1.4;

    @media screen and (width >= 768px) {
      font-size: var(--fs-title);
    }

    & .price {
      color: var(--c-primary);
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 16px;
  }

  li {
    display: contents;
  }

  a {
    background-color: oklch(from var(--c-background) calc(l + 0.1) c h);
    border-radius: 16px;
    padding: 16px;
    text-decoration: none;
    font-weight: var(--fw--bold);
    transition: background-color 0.3s, color 0.3s;

    &:hover,
    &:focus-visible {
      background-color: var(--c-primary);
      color: var(--c-background);
    }
  }
</style>
