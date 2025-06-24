<script>
  import domainStore from '$lib/store/domainStore.js';
  $: domainName = $domainStore;
</script>

<section>
  <h2>Negotiate</h2>
  <div>
    <p>Share your projet and budget for a possible discount!</p>
    <p>Rumors say some even got their domain for free 🤫</p>
    <p class="disclaimer">(registrar transfer fee not covered)</p>
  </div>

  <a href="https://www.namepros.com/parked/{domainName}" target="_blank">Let's talk!</a>

</section>

<style lang="scss">
  .disclaimer {
    font-size: var(--fs-text--small);
    opacity: 0.5;
  }

  section {
    background-color: oklch(from var(--c-background) calc(l + 0.05) c h);
    padding: 32px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  h2 {
    font-size: var(--fs-title--small);
    font-family: 'Ultra', sans-serif;

    @media screen and (width >= 768px) {
      font-size: var(--fs-title);
    }
  }

  a {
    background-color: oklch(from var(--c-background) calc(l + 0.1) c h);
    font-weight: var(--fw--bold);
    padding: 16px;
    border-radius: 16px;
    text-decoration: none;
    transition: background-color 0.3s, color 0.3s;

    &:hover,
    &:focus-visible {
      color: var(--c-background);
      background-color: var(--c-primary);
    }
  }
</style>
