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
    margin-block: 20px 96px;

    @media screen and (width >= 768px) {
      margin-bottom: 128px;
    }

    @media screen and (width >= 1280px) {
      margin-bottom: 160px;
    }

    & h1 {
      font-weight: var(--fw--bold);
      font-size: var(--fs-text);
      
      @media screen and (width >= 768px) {
        font-size: var(--fs-title);
      }

      & .domain {
        font-family: 'Chicle', sans-serif;
        font-weight: var(--fw);
        font-size: calc(var(--fs-title--small) + var(--chicle-fix));
        color: var(--c-primary);
        
        @media screen and (width >= 768px) {
          font-size: calc(3rem + var(--chicle-fix));
        }

        @media screen and (width >= 1280px) {
          font-size: calc(5rem + var(--chicle-fix));
        }
      }
    }
  }
</style>