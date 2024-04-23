<script>
	import { onMount } from 'svelte';
  import domainsList from '$lib/data/domains.js';
	export let domain;

  // Fisher-Yates x Durstenfeld
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffle(domainsList);

  let filteredDomainsList = [];
  onMount(() => {
    filteredDomainsList = domainsList.filter(element => element.name !== domain);
  })

  let closed = true;
  function expandCollapseList() {
    closed = !closed
  }
</script>

<section class:expanded={closed === false}>
  <div class="list__header">
    <label for="dropdown-button">
      <h2>Other domains for sale&nbsp;({filteredDomainsList.length})</h2>
    </label>

    <input type="checkbox" id="dropdown-button" class="dropdown-button" aria-label="expand/collapse list" on:change={expandCollapseList}>
  </div>

  <div class="list-content__wrapper" class:closed>
    <ul id="domains-list" class="list-content">
      { #each filteredDomainsList as domain }
        <li><a href="https://{domain.name}" target="_blank">{domain.name}</a></li>
      { /each }
    </ul>
  </div>
</section>

<style lang="scss">
  section {
    background-color: var(--c-primary);
    padding: 1rem 1rem 0 1rem;
    border-radius: 1rem;
    transition: all 0.3s;

    & h2 {
      color: var(--c-dark);
      transition: color 0.3s;
    }

    &.expanded {
      background-color: var(--c-dark--deeper);
      padding: 1rem;

      @media (prefers-color-scheme: light) {
        background-color: var(--c-light--lighter);
      }

      @media (prefers-color-scheme: dark) {
        & h2 {
          color: var(--c-light);
        }

        & .dropdown-button {
          &::before,
          &::after {
            background-color: var(--c-light);
          }
        }
      }
    }

    @media screen and (width >= 992px) {
      background-color: transparent;

      @media (prefers-color-scheme: dark) {
        & h2 {
          color: var(--c-light);
        }
      }
    }
  }

  h2 {
    font-weight: var(--fw--bold);
    font-size: var(--fs-title--small);
  }

  ul {
    list-style-position: inside;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  a {
    font-family: monospace;
  }

  .list__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1rem;

    @media screen and (width >= 1280px) {
      & input {
        display: none;
      }
    }
  }

  /* list dropdown animation */
  .list-content__wrapper {
    display: grid;
    grid-template-rows: 1fr;
    transition: all 0.3s;

    &.closed {
      grid-template-rows: 0fr;
    }

    @media screen and (width >= 1280px) {
      display: contents;
    }
  }
  .list-content {
    overflow: hidden;
  }

  .dropdown-button {
    appearance: none;
    position: relative;
    height: 2rem;
    width: 2rem;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      translate: 0 -50%;
      height: 20px;
      width: 4px;
      border-radius: 2px;
      background-color: var(--c-dark);
      transition: rotate 0.3s, background-color 0.3s;
    }

    &::before {
      left: 62%;
      rotate: -45deg;
    }

    &::after {
      right: 62%;
      rotate: 45deg;
    }

    &:checked {
      &::before {
        rotate: 45deg;
      }

      &::after {
        rotate: -45deg;
      }
    }
  }
</style>