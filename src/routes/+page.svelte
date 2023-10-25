<script>
	import { blur } from 'svelte/transition';

	import background from '$assets/raycast-wallpaper.webp';
	import Header from '$components/Header.svelte';
	import Main from '$components/Main.svelte';
	import Search from '$components/Search.svelte';
	import Profile from '$components/Profile.svelte';
	import CoverLetter from '$components/CoverLetter.svelte';

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
</script>

<svelte:window on:keydown={handleKeyDown} />
<div
	class="w-screen h-screen flex items-end md:items-center justify-center pt-10 md:p-10 cursor-default overflow-hidden"
>
	<img src={background} alt="" class="absolute inset-0 w-full h-full object-cover -z-10" />
	<div
		class="bg-white flex flex-col-reverse md:flex-col overflow-hidden backdrop-brightness-150 bg-opacity-80 shadow-window backdrop-blur-xl rounded-t-window md:rounded-window h-full w-full max-h-[90%] md:max-h-window md:max-w-window"
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
