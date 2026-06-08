import { writable, type Writable } from 'svelte/store'

export const scrollY: Writable<number> = writable(0);