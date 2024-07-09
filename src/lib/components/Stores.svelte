<script>
	import { onMount } from 'svelte';
  import domainsList from '$lib/data/domains.js';
  export let domain;

  let domainPrice = 0;
  onMount(() => {
    domainPrice = domainsList.filter(element => element.name === domain)[0].price;
  })
</script>

<div>
  <ul>
    <li>
      <a href="https://sedo.com/search/details/?domain={domain}" target="_blank" aria-label="Buy now for ${domainPrice.sedo}" class="sedo">
        <article>
          <div>
            <h2 class="store">Buy through Sedo</h2>
            <p class="price">${domainPrice.sedo}</p>
          </div>
          <p class="fake-button">Buy now</p>
        </article>
        <p class="cta">BUY NOW</p>
      </a>
    </li>
    <li>
      <a href="https://dan.com/buy-domain/{domain}" target="_blank" aria-label="Buy now for ${domainPrice.dan}">
        <article>
          <div>
            <h2 class="store">Buy through GoDaddy</h2>
            <p class="price">${domainPrice.dan}</p>
          </div>
          <p class="fake-button">Buy now</p>
        </article>
        <p class="cta">BUY NOW</p>
      </a>
    </li>
  </ul>
</div>

<style lang="scss">
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
      font-family: 'Climate Crisis', sans-serif;
      font-size: var(--fs-title--small);
      
      @media screen and (width >= 768px) {
        font-size: var(--fs-title);
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
      transition: background-color 0.15s, margin-right 0.3s;
    }
  }

  .cta {
    font-family: 'Climate Crisis', sans-serif;
    font-size: 2.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-wrap: nowrap;
    transition: color 0.3s;

    @media screen and (width >= 768px) {
      font-size: 2.5rem;
    }

    @media screen and (width >= 1280px) {
      font-size: 4.75rem;
    }
  }

  /* disclaimer message / no longer needed
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