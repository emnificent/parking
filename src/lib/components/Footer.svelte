<script>
  const year = new Date().getFullYear();
</script>

<footer>
  <p> © {year} <a href="https://dev.emnificent.com" target="_blank">emnificent</a></p>
</footer>

<style lang="scss">
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-block: 1rem 0.5rem;

    @media screen and (width >= 768px) {
      padding-top: 1.5rem;
    }

    @media screen and (width >= 1280px) {
      padding-top: 2rem;
    }

    & p {
      font-size: var(--fs-text--small);
      opacity: 0.5;
    }

    & a {
      &:hover,
      &:focus {
        color: var(--c-text);
        outline: none;
      }
    }

    /* everything below keeps the footer where it belongs */
    margin-top: auto;
  }

  :global(body) {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>