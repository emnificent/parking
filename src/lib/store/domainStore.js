import { writable } from 'svelte/store';

const domainStore = writable(undefined);

export default domainStore;