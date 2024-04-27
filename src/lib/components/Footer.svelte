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
    padding-block: 16px 8px;

    @media screen and (width >= 768px) {
      padding-top: 24px;
    }

    @media screen and (width >= 1280px) {
      padding-top: 32px;
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