<script>
	import { onMount } from 'svelte';
	import { animate } from 'motion';

	import background from '$assets/raycast-wallpaper.webp';
	import ogImage from '$assets/og-image.jpg';
	import Header from '$components/Header.svelte';
	import Main from '$components/Main.svelte';
	import Search from '$components/Search.svelte';
	import Profile from '$components/Profile.svelte';
	import CoverLetter from '$components/CoverLetter.svelte';
	import ButtonAnimation from '$components/ButtonAnimation.svelte';
	import keyboardSVG from '$lib/keys.svg';

	import Location from '../Store.js';

	let searchQuery = '';
	let destination = 'main';
	Location.subscribe((data) => {
		destination = data;
	});

	const openURL = (url) => {
		window.open(url, '_blank');
	};

	const handleKeyDown = (event) => {
		switch (event.key) {
			case 'k':
				if (event.metaKey) {
					Location.update(() => 'main');
				}
				break;
			case 'b':
				if (event.metaKey) {
					openURL('https://bento.me/sekeidesign');
				}
				break;
		}
	};

	let text;
	let raycastWindow;
	let backgroundCover;
	let keys;
	let instructions;

	onMount(() => {
		animate(backgroundCover, { opacity: 0 }, { duration: 0.75, delay: 0.8 });
		animate(keys, { opacity: 0 }, { duration: 0.75, delay: 0.8 });
		animate(text, { opacity: 1, y: [32, 0] }, { duration: 0.75, delay: 1 });
		animate(
			raycastWindow,
			{ opacity: 1, y: [48, 0], rotateX: [4, 0] },
			{ duration: 0.75, delay: 1.2 }
		);
		animate(instructions, { opacity: 1, y: [24, 0] }, { duration: 0.75, delay: 1.4 });
	});
</script>

<svelte:head>
	<title>PG Gonni | Design Engineer | Montreal, QC</title>
	<meta
		name="description"
		content="Design Engineer based on Montreal. 7+ years of experience making cool shit that runs on your computer."
	/>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="og:image" content={ogImage} />
</svelte:head>
<svelte:window on:keydown={handleKeyDown} />
<div
	class="w-screen h-screen flex flex-col gap-8 justify-end md:justify-center items-center p-4 pt-10 md:p-10 cursor-default overflow-hidden perspective"
>
	<img src={background} alt="" class="absolute inset-0 w-full h-full object-cover -z-30" />
	<div class="absolute inset-0 w-full h-full -z-20 bg-[#8A82FF] mix-blend-hue" />
	<div class="absolute inset-0 w-full h-full -z-20 bg-[#18171F]" bind:this={backgroundCover} />
	<div class="absolute inset-0 w-full h-full -z-10" bind:this={keys}>
		<ButtonAnimation />
	</div>
	<div class="flex flex-col items-center opacity-0" bind:this={text}>
		<span class="text-sm text-[#E4E2FF] opacity-90">Application for</span>
		<span class="text-xl drop-shadow-pro text-[#E4E2FF]">Head of Product Design</span>
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
	<div bind:this={instructions} class="hidden md:flex gap-2 items-end opacity-0">
		<span class="text-slate-300 text-sm opacity-75">Navigate with your keyboard</span>
		<img
			src={keyboardSVG}
			alt="A layout representing the up, down, left, and right keys on a keyboard."
		/>
	</div>
</div>

<style>
	.perspective {
		perspective: 500px;
	}
</style>
