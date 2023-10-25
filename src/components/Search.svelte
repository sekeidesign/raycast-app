<script>
	import { onMount } from 'svelte';
	import Fuse from 'fuse.js';
	import Location from '../Store.js';
	const updateLocation = (destination) => {
		Location.update(() => destination);
	};

	import Item from '$components/list-items/Item.svelte';
	import SectionHeader from '$components/SectionHeader.svelte';
	import Footer from '$components/Footer.svelte';

	import { portfolio, homeLinks, profileLinks } from '$lib/data.js';
	const allLinks = [...portfolio, ...homeLinks, ...profileLinks];

	export let searchQuery = '';
	const fuse = new Fuse(allLinks);
	$: results = fuse.search('por', { keys: ['name', 'secondaryLabel', 'detail'] });
	$: console.log(results, allLinks);

	let activeIndex = -1;
	$: actionLabel = activeIndex === -1 ? 'Close' : allLinks[activeIndex].actionLabel;

	const openURL = (url) => {
		window.open(url, '_blank');
	};

	const handleKeyDown = (event) => {
		switch (event.key) {
			case 'ArrowDown':
				activeIndex =
					activeIndex === allLinks.length - 1 || activeIndex === -1 ? 0 : activeIndex + 1;
				break;
			case 'ArrowUp':
				activeIndex = activeIndex === 0 ? allLinks.length : activeIndex - 1;
				break;
			case 'Enter':
				allLinks[activeIndex].action;
				break;
			case 'b':
				if (event.metaKey) {
					openURL('https://bento.me/sekeidesign');
				}
				break;
			case 'e':
				if (event.metaKey && event.shiftKey) {
					openURL('mailto:pg@sekei.ca');
				}
				break;
		}
	};

	let scrollContainer;

	onMount(() => {
		scrollContainer.addEventListener('keydown', function (e) {
			if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
				e.preventDefault(); // Prevent the default arrow key scrolling behavior
			}
		});
	});
</script>

<svelte:window on:keydown={handleKeyDown} />

<div class="p-2 overflow-y-auto flex-grow" bind:this={scrollContainer}>
	<SectionHeader>Results</SectionHeader>
	{#each results as item, index}
		<Item
			label={item.name}
			secondaryLabel={item.secondaryLabel}
			detail={item.detail}
			isActive={activeIndex === index}
			icon={item.icon}
			on:click={() => {
				item.itemType === 'local' ? updateLocation(item.destination) : item.action();
			}}
		/>
	{/each}
</div>

<Footer {actionLabel} />
