<script>
	import { onMount } from 'svelte';
	import { animate } from 'motion';

	import background from '$assets/raycast-wallpaper.webp';
	import Header from '$components/Header.svelte';
	import Main from '$components/Main.svelte';
	import Search from '$components/Search.svelte';
	import Profile from '$components/Profile.svelte';
	import CoverLetter from '$components/CoverLetter.svelte';
	import ButtonAnimation from '$components/ButtonAnimation.svelte';

	import Location from '../Store.js';

	let searchQuery = '';
	let destination = 'main';
	Location.subscribe((data) => {
		destination = data;
	});

	const handleKeyDown = (event) => {
		switch (event.key) {
			case 'k':
				if (event.metaKey) {
					Location.update(() => 'main');
				}
				break;
		}
	};

	let text;
	let raycastWindow;
	let backgroundCover;
	let keys;

	onMount(() => {
		animate(backgroundCover, { opacity: 0 }, { duration: 0.75, delay: 0.8 });
		animate(keys, { opacity: 0 }, { duration: 0.75, delay: 0.8 });
		animate(text, { opacity: 1, y: [32, 0] }, { duration: 0.75, delay: 1 });
		animate(
			raycastWindow,
			{ opacity: 1, y: [48, 0], rotateX: [4, 0] },
			{ duration: 0.75, delay: 1.2 }
		);
	});
</script>

<svelte:head>
	<title>PG Gonni | Raycast Product Designer Application</title>
	<meta
		name="description"
		content="I'm excited to share my application for the Product Designer, Mobile role. Instead of a typical cover letter and portfolio, I wanted to share more about me in a format very familiar to the Raycast team!"
	/>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>
<svelte:window on:keydown={handleKeyDown} />
<div
	class="w-screen h-screen flex flex-col gap-8 justify-end md:justify-center items-center p-4 pt-10 md:p-10 cursor-default overflow-hidden perspective"
>
	<img src={background} alt="" class="absolute inset-0 w-full h-full object-cover -z-30" />
	<div class="absolute inset-0 w-full h-full -z-20 bg-[#131011]" bind:this={backgroundCover}>
		<svg
			viewBox="0 0 1800 1800"
			xmlns="http://www.w3.org/2000/svg"
			class="bg-blend-darken opacity-20 saturate-0"
		>
			<filter id="noiseFilter">
				<feTurbulence type="fractalNoise" baseFrequency="1" numOctaves="3" stitchTiles="stitch" />
			</filter>

			<rect width="100%" height="100%" filter="url(#noiseFilter)" />
		</svg>
	</div>
	<div class="absolute inset-0 w-full h-full -z-10" bind:this={keys}>
		<ButtonAnimation />
	</div>
	<div class="flex flex-col items-center opacity-0" bind:this={text}>
		<span class="text-sm text-[#ffe2e2] opacity-90">Application for</span>
		<span class="text-xl drop-shadow-pro text-[#ffe2e2]">Product Designer, Mobile</span>
	</div>
	<div
		class="bg-white flex flex-col-reverse md:flex-col overflow-hidden backdrop-brightness-150 bg-opacity-70 md:bg-opacity-80 shadow-window backdrop-blur-xl rounded-2xl md:rounded-window h-full w-full max-h-[calc(90dvh)] md:max-h-window md:max-w-window opacity-0"
		bind:this={raycastWindow}
	>
		<Header variant={destination === 'main' ? 'search' : 'subpage'} bind:searchQuery />
		{#if destination === 'main' && searchQuery === ''}
			<Main />
		{:else if destination === 'main' && searchQuery !== ''}
			<Search {searchQuery} on:clearSearch={() => (searchQuery = '')} />
		{:else if destination === 'profile'}
			<Profile />
		{:else if destination === 'cover-letter'}
			<CoverLetter />
		{/if}
	</div>
</div>

<style>
	.perspective {
		perspective: 500px;
	}
</style>
