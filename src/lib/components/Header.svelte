<script>
  import domainStore from '$lib/store/domainStore.js';
  $: domainName = $domainStore;
</script>

<header>
  <h1><span class="domain">{domainName}</span><br />is for sale</h1>
</header>

<style lang="scss">
  header {
    text-align: center;
    margin-block: 48px 96px;

    & h1 {
      font-weight: var(--fw--bold);
      font-size: var(--fs-text);
      
      @media screen and (width >= 768px) {
        font-size: var(--fs-title);
      }

      & .domain {
        font-family: 'Ultra', sans-serif;
        font-weight: var(--fw);
        font-size: var(--fs-title--small);
        color: var(--c-primary);
        display: block;
        
        @media screen and (width >= 768px) {
          font-size: 3rem;
        }

        @media screen and (width >= 1280px) {
          font-size: 5rem;
        }
      }
    }
  }
</style>
