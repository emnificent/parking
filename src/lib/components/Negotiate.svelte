<script>
  import { slide } from 'svelte/transition';

  export let domain;
  export let form;

  let displayForm = false;
  function revealForm() {
    displayForm = true;
  }
</script>

<section>
  <h2>Negotiate</h2>
  <p>Tight budget? No sweat, shoot me your project idea and your price point. If it tickles my fancy, we can talk discount! <span class="mobile-delete"><br /></span> But hey, this domain's a gem, remember that.</p>

  { #if displayForm }
    <form method="POST" transition:slide={{ duration: 300 }}>
      <input type="text" name="domain" value={domain} readonly tabindex="-1" aria-hidden="true" class="screenreaders-only" />
      <input type="email" name="email" placeholder="name@email.com" required />
      <textarea name="message" rows="5" placeholder="Describe your project and specify your budget" required></textarea>
      <button>Send me a message</button>
    </form>
  { :else if !form }
    <button on:click={revealForm}>Let's talk</button>
  { :else }
    { #if form?.success }
      <p class="message success">Thanks for your message!</p>
    { :else if form?.error }
      <p class="message error">There was an error, try again later.</p>
    { /if }
  { /if }
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

  button {
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

  form {
    display: flex;
    flex-direction: column;
    gap: 8px;

    & textarea,
    & input,
    & button {
      padding: 8px 16px;
      border-radius: 8px;
    }

    & textarea,
    & input {
      background-color: var(--c-background--bold);
      color: var(--c-text);
      border: none;

      &::placeholder {
        color: var(--c-text);
        opacity: 0.5;
      }

      &:focus-visible {
        outline: var(--c-primary) 2px solid;
        border-radius: 8px;
      }
    }

    & textarea {
      resize: vertical;
    }

    & button {
      align-self: flex-end;
    }
  }

  .message {
    padding: 8px 16px;
    border-radius: 8px;
    color: var(--c-background--bold);
    font-weight: var(--fw--bold);
    width: fit-content;
    align-self: center;

    &.success {
      background-color: var(--c-success);
    }

    &.error {
      background-color: var(--c-error);
    }
  }
</style>