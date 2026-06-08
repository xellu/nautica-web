<script lang="ts">
	import './layout.css';
	let { children } = $props();

	//scroll tracking
	import { scrollY } from '$lib/scripts/Scroll';
	let scrollTemp: number = $state(0);

</script>

<svelte:head><link rel="icon" href="/brand/icon.svg" /></svelte:head>

<svelte:window bind:scrollY={scrollTemp} onscroll={() => {
	scrollY.set(scrollTemp)
}}></svelte:window>

{@render children()}