<script>
  export let form;
</script>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<main>
  <div>
    <h2>Message</h2>
    <form method="POST">
      <input type="email" name="email" placeholder="name@email.com" required />
      <textarea name="message" rows="10" placeholder="Your message, be as specific as possible" required></textarea>
      <button>Send</button>
      { #if form?.success }
        <p>Thanks for your message!</p>
      { :else if form?.error }
        <p>There was an error, try again later.</p>
      { /if }
    </form>
  </div>
  <a href="/">Go back</a>
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    height: 100vh;
  }

  h2 {
    font-size: var(--fs-title);
    font-weight: var(--fw--bold);
    margin-bottom: 0.25rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    max-width: 20rem;

    & textarea,
    & input,
    & button {
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      border: none;
    }

    & textarea,
    & input {
      background-color: var(--c-dark--deeper);
      color: var(--c-light);

      &::placeholder {
        color: var(--c-light);
        opacity: 0.5;
      }

      @media (prefers-color-scheme: light) {
        background-color: var(--c-light--lighter);
        color: var(--c-dark);

        &::placeholder {
          color: var(--c-dark);
        }
      }

      &:focus-visible {
        outline: var(--c-primary) 2px solid;
        border-radius: 0.5rem;
      }
    }

    & textarea {
      resize: vertical;
    }

    & button {
      background-color: var(--c-dark--deeper);
      border: 2px solid var(--c-primary);
      color: var(--c-light);
      font-weight: var(--fw--bold);
      transition: background-color 0.3s, color 0.3s;

      &:hover,
      &:focus-visible {
        background-color: var(--c-primary);
        color: var(--c-dark--deeper);
      }

      &:focus-visible {
        outline-offset: 0.25rem;
        outline: var(--c-primary) 2px solid;
        border-radius: 0.25rem;
      }

      @media (prefers-color-scheme: light) {
        background-color: var(--c-light--lighter);
        color: var(--c-dark);
      }
    }
  }
</style>