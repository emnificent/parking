<script>
  export let domain;
</script>

<header>
  <h1><span class="domain">{domain}</span><br />is for sale</h1>
</header>

<style lang="scss">
  header {
    text-align: center;
    margin-block: 20px 128px;

    @media screen and (width >= 768px) {
      margin-bottom: 144px;
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
        font-family: 'Climate Crisis', sans-serif;
        font-weight: var(--fw);
        font-size: var(--fs-title--small);
        color: var(--c-primary);
        
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