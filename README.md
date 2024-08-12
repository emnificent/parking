# Parking

This project is my parking page to try to sell my expiring domains, [preview it here](https://parking-cg0.pages.dev/).

I had enough of the boring parking pages domain aftermarket services offer, I wanted something that looked sleek and energetic, while offering options to sell from multiple domain marketplaces, a simple form to start negotiating, and a way to list all the domains I have for sale.

The parking page is designed to work with two marketplaces: [Sedo](https://sedo.com) and [Dynadot](https://dynadot.com), and the contact form is managed through [NamePros](https://namepros.com), but you can easily edit the code to work with different services.

You may fork the project and modify it to suit your needs as the project is under the [MIT License](https://opensource.org/license/MIT).  
If you're not familiar with the requirements that come with an MIT License, [here's a quick summary](https://choosealicense.com/licenses/mit/).

## Make it work for you

- Set your own domains in `src/lib/data/domains.js`.
- Change the footer's copyright to your name in `src/lib/components/Footer.svelte` (line 6).

## More ways to customize

- You don't like [Electric Lime](https://encycolorpedia.com/ccff00)? Change the primary color in `src/lib/styles/global.css` (line 6).
- You use other marketplaces than [Sedo](https://sedo.com) and [Dynadot](https://dynadot.com) to list your domains? Modify the stores in `src/lib/components/Stores.svelte`.  
  Feel free to [open a discussion](https://github.com/emnificent/parking/discussions) if you need help with that.

## Consider crediting me

While not required by the license, you're welcome to credit me in the footer: `src/lib/components/Footer.svelte` (line 6).    
Here's a suggestion, but feel free to come up with your own:
```html
<a href="https://dev.emnificent.com" target="_blank">(based on a) theme by emnificent</a>
```

---

The following is part of [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte)'s guide to build a Svelte project, it may come in handy.

## Developing

Once you've installed dependencies with `npm install`, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
