<script>
  import domainStore from '$lib/store/domainStore.js';
  $: domainName = $domainStore;
</script>

<section>
  <h2>Negotiate</h2>
  <p>Share your project and budget for a possible discount.</p>

  <a href="https://www.namepros.com/parked/{domainName}" target="_blank">Let's talk!</a>

  <div>
    <p>Rumors say some even got their domain for free!</p>
    <p class="disclaimer">(registrar transfer fee not covered)</p>
  </div>

</section>

<style lang="scss">
  .disclaimer {
    font-size: var(--fs-text--small);
    opacity: 0.5;
  }

  section {
    background-color: oklch(from var(--c-background) calc(l + 0.05) c h);
    padding: 2rem;
    border-radius: 1rem;
    border: 1px solid oklch(from var(--c-primary) calc(l - 0.5) calc(c - 0.1) h / 0.5);
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  h2 {
    font-size: var(--fs-title--small);
    font-family: 'Ultra', sans-serif;

    @media screen and (width >= 768px) {
      font-size: var(--fs-title);
    }
  }

  @property --c-gradient-start {
    syntax: "<color>";
    inherits: false;
    initial-value: #00000000;
  }

  @property --c-gradient-end {
    syntax: "<color>";
    inherits: false;
    initial-value: #00000000;
  }

  a {
    font-weight: var(--fw--bold);
    padding: 1rem;
    border-radius: 0.5rem;
    text-decoration: none;
    
    --c-gradient-start: oklch(from var(--c-background) calc(l + 0.1) c h);
    --c-gradient-end: var(--c-primary);
    background: linear-gradient(to right, var(--c-gradient-start), var(--c-gradient-end));

    transition: color 0.3s, --c-gradient-start 0.3s;

    &:hover,
    &:focus-visible {
      --c-gradient-start: var(--c-primary);
      color: var(--c-background);
    }
  }
</style>
