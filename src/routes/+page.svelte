<script>
	import { blur } from 'svelte/transition';

	import background from '$assets/raycast-wallpaper.webp';
	import Header from '$components/Header.svelte';
	import Main from '$components/Main.svelte';
	import Profile from '$components/Profile.svelte';
	import CoverLetter from '$components/CoverLetter.svelte';

	import Location from '../Store.js';

	let searchQuery = '';
	let destination = 'main';
	$: console.log(destination);
	Location.subscribe((data) => {
		destination = data;
	});
</script>

<div
	class="w-screen h-screen flex items-end lg:items-center justify-center pt-10 lg:p-10 cursor-default overflow-hidden"
>
	<img src={background} alt="" class="absolute inset-0 w-full h-full object-cover -z-10" />
	<div
		class="bg-white flex flex-col overflow-hidden backdrop-brightness-150 bg-opacity-80 shadow-window backdrop-blur-xl rounded-window h-full w-full max-h-[90%] lg:max-h-window lg:max-w-window"
	>
		<Header variant={destination === 'main' ? 'search' : 'subpage'} bind:searchQuery />
		{#if searchQuery === ''}
			{#if destination === 'main'}
				<Main />
			{:else if destination === 'profile'}
				<Profile />
			{:else if destination === 'cover-letter'}
				<CoverLetter />
			{/if}
		{:else}
			Search results
		{/if}
	</div>
</div>
