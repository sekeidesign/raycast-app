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
		animate(raycastWindow, { opacity: 1, y: [32, 0] }, { duration: 0.75, delay: 1.2 });
	});
</script>

<svelte:window on:keydown={handleKeyDown} />
<div
	class="w-screen h-screen flex flex-col gap-8 justify-end md:justify-center items-center p-4 pt-10 md:p-10 cursor-default overflow-hidden"
>
	<img src={background} alt="" class="absolute inset-0 w-full h-full object-cover -z-30" />
	<div class="absolute inset-0 w-full h-full -z-20 bg-[#1b090b]" bind:this={backgroundCover} />
	<div class="absolute inset-0 w-full h-full -z-10" bind:this={keys}>
		<ButtonAnimation />
	</div>
	<div class="flex flex-col items-center opacity-0" bind:this={text}>
		<span class="text-sm text-[#ffe2e2] opacity-90">Application for</span>
		<span class="text-xl drop-shadow-pro text-[#ffe2e2]">Product Designer, Mobile</span>
	</div>
	<div
		class="bg-white flex flex-col-reverse md:flex-col overflow-hidden backdrop-brightness-150 bg-opacity-70 md:bg-opacity-80 shadow-window backdrop-blur-xl rounded-window h-full w-full max-h-[90%] md:max-h-window md:max-w-window opacity-0"
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
