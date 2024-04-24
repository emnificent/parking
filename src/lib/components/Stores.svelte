<script>
	import { onMount } from 'svelte';
  import domainsList from '$lib/data/domains.js';
  export let domain;

  let domainPrice = 0;
  onMount(() => {
    domainPrice = domainsList.filter(element => element.name === domain)[0].price;
  })
</script>

<section>
  <div class="options-header">
    <h2>Get {domain} for ${domainPrice}</h2>
    <p>Three options</p>
  </div>
  <ul>
    <li class="sedo">
      <article>
        <h3>Buy through Sedo</h3>
        <p>Don't reward GoDaddy's anticompetitive practices</p>
        <a href="https://sedo.com/search/details/?domain={domain}" target="_blank">Buy now</a>
        <p class="disclaimer">Sedo takes time to list a domain, if you land on the brokerage service page, come back here in 48h, the link should work by then<br /><br />you could also <a href="/contact" class="link">send me a message</a></p>
      </article>
    </li>
    <li class="dan">
      <article>
        <h3>Buy through Dan</h3>
        <p>If you rather trust GoDaddy</p>
        <a href="https://dan.com/buy-domain/{domain}" target="_blank">Buy now</a>
        <p class="disclaimer">higher fees = costlier<br />usually around +9%</p>
      </article>
    </li>
    <li class="negotiate">
      <article>
        <h3>Negotiate</h3>
        <p>Get a discount with a good project idea!</p>
        <a href="/contact">Send me a message</a>
        <p class="disclaimer">I won't steal your idea<br />read below</p>
      </article>
    </li>
  </ul>
</section>

<style lang="scss">
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & .options-header {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    & h2 {
      font-weight: var(--fw--bold);
      font-size: var(--fs-title--small);
      text-align: center;
    }

    & ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      @media screen and (width >= 768px) {
        display: grid;
        grid-template: auto / repeat(2, 1fr);
        grid-template-areas:
          "sedo sedo"
          "dan negotiate";

        & .sedo {
          grid-area: sedo;
        }

        & .dan {
          grid-area: dan;
        }

        & .negotiate {
          grid-area: negotiate;
        }

        & li {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }

      @media screen and (width >= 992px) {
        padding-inline: 16rem;
        grid-template: auto / repeat(7, 1fr);
        grid-template-areas: "dan dan sedo sedo sedo negotiate negotiate";
        gap: 0;
      }
    }
  }

  article {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--c-dark--deeper);
    @media (prefers-color-scheme: light) {
      background-color: var(--c-light--lighter);
    }
    padding: 1rem;
    border-radius: 1rem;
    height: 100%;
    justify-content: center;

    & h3 {
      font-weight: var(--fw--bold);
    }

    @media screen and (width >= 992px) {
      height: 16rem;
      position: relative;
      top: 1.5rem;
    }
  }

  li {
    @media screen and (width >= 992px) {
      &:nth-child(2) article {
        border-radius: 1rem 0 0 1rem;
      }
  
      &:nth-child(3) article {
        border-radius: 0 1rem 1rem 0;
      }
    }
  }

  .sedo {
    & article {
      background-color: var(--c-primary);
      color: var(--c-dark--deeper);

      @media screen and (width >= 992px) {
        height: 24rem;
        top: 0;
      }

      & a {
        text-decoration: none;
        font-weight: var(--fw--bold);
        color: var(--c-dark);
        background-color: var(--c-light);
        border-radius: 0.5rem;
        padding-block: 0.5rem;
        transition: all 0.3s;

        &:hover,
        &:focus {
          background-color: var(--c-dark--deeper);
          color: var(--c-primary);
        }

        @media (prefers-color-scheme: light) {
          background-color: var(--c-dark);
          color: var(--c-light);

          &:hover,
          &:focus {
            background-color: var(--c-light--lighter);
          }
        }
      }
    }
  }

  .disclaimer {
    font-size: var(--fs-text--small);

    & .link {
      padding: 0;
      font-weight: var(--fw);
      background-color: transparent;
      color: var(--c-dark--deeper);
      text-decoration: underline;

      &:hover,
      &:focus {
        background-color: transparent;
        color: var(--c-light--lighter);
      }
    }
  }
</style>