<script>
  import domainStore from '$lib/store/domainStore.js';
  $: domainName = $domainStore;
</script>

<section>
  <h2>Negotiate</h2>
  <p>Tight budget? No sweat, shoot me your project idea and your price point. If it tickles my fancy, we can talk discount!</p>

  <a href="https://www.namepros.com/parked/{domainName}" target="_blank">Let's talk</a>

  <p>Rumors say some even got their domain for free?!<br /><span class="disclaimer">(registrar transfer fee not covered)</span></p>
</section>

<style lang="scss">
  .disclaimer {
    font-size: var(--fs-text--small);
    opacity: 0.5;
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