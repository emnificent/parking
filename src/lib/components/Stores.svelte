<script>
  import domainStore from '$lib/store/domainStore.js';
  import domainsList from '$lib/data/domains.js';

  $: domainName = $domainStore;
  $: domainPrice = domainsList.filter(domain => domain.name === $domainStore)[0]?.price;
</script>

<div>
  <ul>
    <li>
      <a href="https://sedo.com/search/details/?domain={domainName}" target="_blank" aria-label="Buy now for ${domainPrice?.sedo} on Sedo">
        <article>
          <div>
            <h2 class="store">Buy through Sedo</h2>
            <p class="price">${domainPrice?.sedo}</p>
          </div>
          <p class="fake-button">Buy now</p>
        </article>
        <p class="cta">Buy now</p>
      </a>
    </li>
    <li>
      { #if domainPrice?.dynadot > 0 }
        <a href="https://dynadot.com/market/user-listings/{domainName}" target="_blank" aria-label="Buy now for ${domainPrice?.dynadot} on Dynadot">
          <article>
            <div>
              <h2 class="store">Buy through Dynadot</h2>
              <p class="price">${domainPrice?.dynadot}</p>
            </div>
            <p class="fake-button">Buy now</p>
          </article>
          <p class="cta">Buy now</p>
        </a>
      { :else }
        <a href="https://sedo.com/search/details/?domain={domainName}" target="_blank" aria-label="Sorry, the domain is unavailable on Dynadot, but you can still buy it on Sedo for ${domainPrice?.sedo}">
          <article>
            <div>
              <h2 class="store">Buy through Dynadot</h2>
              <p class="price">Unavailable</p>
            </div>
            <p class="fake-button">Unavailable</p>
          </article>
          <p class="cta">Unavailable</p>
        </a>
      { /if }
    </li>
  </ul>

  <p class="disclaimer">We do not support GoDaddy because of their abusive practices.</p>
</div>

<style lang="scss">
  .disclaimer {
    text-align: center;
    padding-top: 16px;
    font-size: var(--fs-text--small);
    opacity: 0.5;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
    
    @media screen and (width >= 768px) {
      display: grid;
      grid-template: auto / repeat(2, 1fr);
      gap: 24px;
    }

    @media screen and (width >= 1280px) {
      gap: 32px;
    }
  }

  li {
    display: contents;
  }

  a {
    background-color: var(--c-background--bold);
    border-radius: 16px;
    padding: 32px;
    text-decoration: none;
    display: grid;
    grid-template: auto / 100% 0%;
    gap: 32px;
    transition: all 0.3s;

    &:hover,
    &:focus-visible {
      color: var(--c-text);
      grid-template: auto / 0% 100%;
      gap: 0;

      & .fake-button {
        background-color: var(--c-background--bold);
        margin-right: 32px;
        border: 2px solid var(--c-background--bold);
      }

      & .cta {
        color: var(--c-primary);
      }
    }

    &:focus {
      color: var(--c-text);
    }

    & > * {
      overflow: hidden;
    }
  }

  article {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
    text-wrap: nowrap;

    & .store {
      font-weight: var(--fw--light);
    }

    & .price {
      font-size: calc(var(--fs-title) + var(--chicle-fix));
      font-weight: var(--fw--bold);
      font-family: 'Chicle';
      
      @media screen and (width >= 768px) {
        font-size: calc(var(--fs-title--large) + var(--chicle-fix));
      }
    }

    & .fake-button {
      align-self: flex-end;
      background-color: var(--c-primary);
      color: var(--c-background--bold);
      font-weight: var(--fw--bold);
      padding: 8px 16px;
      border-radius: 8px;
      margin-right: 0;
      border: 2px solid var(--c-primary);
      transition: background-color 0.15s, margin-right 0.3s, border 0.15s;
    }
  }

  .cta {
    font-family: 'Chicle', sans-serif;
    font-size: calc(2.5rem + var(--chicle-fix));
    display: flex;
    align-items: center;
    justify-content: center;
    text-wrap: nowrap;
    text-transform: uppercase;
    transition: color 0.3s;

    @media screen and (width >= 768px) {
      font-size: calc(2.5rem + var(--chicle-fix));
    }

    @media screen and (width >= 1280px) {
      font-size: calc(4.75rem + var(--chicle-fix));
    }
  }

  /* disclaimer message / NO LONGER NEEDED
  .sedo {
    position: relative;

    &::after {
      content: "Sedo may take up to 5 days to list the domain, in which case you'll land on their brokerage service page.";
      position: absolute;
      padding-inline: 32px;
      bottom: -48px;
      font-size: var(--fs-text--small);
      z-index:-1;
      translate: 0 -48px;
      transition: translate 0.3s;
    }

    @media screen and (width < 1280px) {
      &::after {
        display: none;
      }
    }

    &:hover {
      &::after {
        translate: 0 0px;
      }
    }
  }
  */
</style>