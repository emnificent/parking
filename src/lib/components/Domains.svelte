<script>
	import { onMount } from 'svelte';
  import domainsList from '$lib/data/domains.js';

  // Fisher-Yates x Durstenfeld
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffle(domainsList);

  import domainStore from '$lib/store/domainStore.js';
  $: filteredDomainsList = domainsList.filter(element => element.name !== $domainStore);

  // generate the background bubbles
  onMount(() => {
    const container = document.getElementById('bubbles-container');
    // generate 256 bubbles
    for (let i = 0; i < 256; i++) {
      let bubble = document.createElement('span');
      // [-25; 100]
      const top = `top:${randomInt(125) - 25}%`;
      const left = `left:${randomInt(125) - 25}%`;
      // [4; 24]
      const width = `width:${randomInt(20) + 4}px`;
      const animation = ['normal', 'reverse'];
      // [0; 30]
      const animationDelay = `animation-delay:-${randomInt(48)}s`

      bubble.setAttribute('style', `${top}; ${left}; ${width}; ${animationDelay}`);
      bubble.classList.add('bubble',
        `bubble-${animation[Math.floor(Math.random() * animation.length)]}`
      );

      container.appendChild(bubble);
    }
  });

  // [0; seed]
  function randomInt(seed) {
    return Math.floor(Math.random() * (seed + 1))
  }
</script>

{ #if filteredDomainsList.length > 0 }
  <section>
    <div class="title-container">
      <h2>More gems</h2>
    </div>
    <ul id="domains-list" class="list-content">
      { #each filteredDomainsList as domain }
        <li><a href="https://{domain.name}" target="_blank">{domain.name}</a></li>
      { /each }
    </ul>

    <div class="bubbles-container" id="bubbles-container"></div>
  </section>
{ /if }

<style lang="scss">
  section {
    background-color: var(--c-background--bold);
    padding: 32px;
    border-radius: 16px;
    position: relative;

    &:hover,
    &:focus-within {
      & .bubble {
        opacity: 0;
      }
    }
  }

  .title-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-family: 'Chicle', sans-serif;
    font-size: calc(var(--fs-title--small) + var(--chicle-fix));
    margin-bottom: 20px;
    padding: 4px 16px;
    width: fit-content;
    border-radius: 8px;
    background-color: var(--c-background--bold);
    box-shadow: 
      var(--c-background--bold) 8px 8px 16px, 
      var(--c-background--bold) -8px -8px 16px;
    position: relative;
    z-index: 9999;
      
    @media screen and (width >= 768px) {
      font-size: calc(var(--fs-title) + var(--chicle-fix));
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    position: relative;
    z-index: 9999;

    @media screen and (width >= 768px) {
      display: grid;
      grid-template: auto / repeat(2, 1fr);
      gap: 20px 32px;
    }
    
    @media screen and (width >= 1280px) {
      grid-template: auto / repeat(4, 1fr);
    }
  }

  li {
    padding: 2px 10px;
    width: fit-content;
    border-radius: 8px;
    background-color: var(--c-background--bold);
    box-shadow: 
      var(--c-background--bold) 4px 4px 8px, 
      var(--c-background--bold) -4px -4px 8px;
  }

  a {
    font-family: 'Roboto Mono', monospace;
  }

  .bubbles-container {
    position: absolute;
    width: calc(100% - 32px);
    height: calc(100% - 32px);
    top: 16px;
    left: 16px;
    border-radius: 8px;
    z-index: 99;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 999;
      box-shadow: 
        var(--c-background--bold) 8px 8px 16px inset, 
        var(--c-background--bold) -8px -8px 16px inset;
    }
  }

  :global(.bubble) {
    position: absolute;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: var(--c-primary);
    filter: blur(6px);
    animation: circular-motion 48s linear infinite;
    opacity: 0.6;
    transition: opacity 0.6s;
  }

  :global(.bubble-reverse) {
    animation-direction: reverse;
  }

  @keyframes circular-motion {
    from {
      transform: rotate(0deg) translate(128px) rotate(0deg);
    }
    to {
      transform: rotate(360deg) translate(128px) rotate(-360deg);
    }
  }
</style>