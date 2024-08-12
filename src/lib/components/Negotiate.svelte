<script>
  import domainStore from '$lib/store/domainStore.js';
  $: domainName = $domainStore;
</script>

<section>
  <h2>Negotiate</h2>
  <p>Tight budget? No sweat, shoot me your project idea and your price point. If it tickles my fancy, we can talk discount! <span class="mobile-delete"><br /></span> Rumors say some even got their domain transfer for free?!</p>

  <a href="https://www.namepros.com/parked/{domainName}" target="_blank">Let's talk</a>
</section>

<style lang="scss">
  .mobile-delete {
    @media screen and (width < 768px) {
      display: none;
    }
  }

  section {
    width: 90vw;
    max-width: 640px;
    margin-inline: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  h2 {
    font-size: var(--fs-title--small);
    font-family: 'Climate Crisis', sans-serif;
    
    @media screen and (width >= 768px) {
      font-size: var(--fs-title);
    }
  }

  a {
    border: 2px solid transparent;
    width: fit-content;
    align-self: center;
    background-color: var(--c-primary);
    color: var(--c-background--bold);
    font-weight: var(--fw--bold);
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 0.3s;

    &:hover,
    &:focus {
      color: var(--c-primary);
      background-color: transparent;
    }

    &:hover {
      border-color: var(--c-primary);
    }
  }
</style>