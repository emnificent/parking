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
        → Dynadot
      </a>
    </li>
    <li>
      <a href="https://sedo.com/search/details/?domain={domainName}" target="_blank" aria-label="Buy now for ${domainPrice} on Sedo">
        → Sedo
      </a>
    </li>
  </ul>
  <p class="disclaimer">We don't support GoDaddy because of their abusive practices.</p>
</section>

<style lang="scss">
  .disclaimer {
    padding-top: 1rem;
    font-size: var(--fs-text--small);
    opacity: 0.5;
  }

  section {
    background-color: oklch(from var(--c-background) calc(l + 0.05) c h);
    padding: 2rem;
    border-radius: 1rem;
    border: 1px solid oklch(from var(--c-primary) calc(l - 0.5) calc(c - 0.1) h / 0.5);
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
    gap: 1rem;
    margin-top: 1rem;
  }

  li {
    display: contents;
  }

  @property --c-gradient-start {
    syntax: "<color>";
    inherits: false;
    initial-value: #00000000;
  }

  @property --c-gradient-end {
    syntax: "<color>";
    inherits: false;
    initial-value: #00000000;
  }

  a {
    border-radius: 0.5rem;
    padding: 1rem;
    text-decoration: none;
    font-weight: var(--fw--bold);

    --c-gradient-start: oklch(from var(--c-background) calc(l + 0.1) c h);
    --c-gradient-end: var(--c-primary);
    background: linear-gradient(to right, var(--c-gradient-start), var(--c-gradient-end));

    transition: color 0.3s, --c-gradient-start 0.3s;

    &:hover,
    &:focus-visible {
      --c-gradient-start: var(--c-primary);
      color: var(--c-background);
    }
  }
</style>
