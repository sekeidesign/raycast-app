<script>
	import { onMount, createEventDispatcher } from 'svelte';

	import Location from '../Store.js';
	const updateLocation = (destination) => {
		Location.update(() => destination);
	};

	import Item from '$components/list-items/Item.svelte';
	import PortfolioItem from '$components/list-items/PortfolioItem.svelte';
	import SectionHeader from '$components/SectionHeader.svelte';
	import Footer from '$components/Footer.svelte';

	import { portfolio, homeLinks } from '$lib/data.js';

	let activeIndex = 0;
	let activeProjectIndex = 0;
	$: actionLabel =
		activeIndex === 0
			? portfolio[activeProjectIndex].actionLabel
			: homeLinks[activeIndex - 1].actionLabel;

	const openURL = (url) => {
		window.open(url, '_blank');
	};

	const handleKeyDown = (event) => {
		switch (event.key) {
			case 'ArrowDown':
				activeIndex = activeIndex === homeLinks.length ? 0 : activeIndex + 1;
				break;
			case 'ArrowUp':
				activeIndex = activeIndex === 0 ? homeLinks.length : activeIndex - 1;
				break;
			case 'ArrowRight':
				if (activeIndex > 0) return;
				activeProjectIndex =
					activeProjectIndex === portfolio.length - 1 ? 0 : activeProjectIndex + 1;
				break;
			case 'ArrowLeft':
				if (activeIndex > 0) return;
				activeProjectIndex =
					activeProjectIndex === 0 ? portfolio.length - 1 : activeProjectIndex - 1;
				break;
			case 'Enter':
				if (activeIndex === 0) {
					portfolio[activeProjectIndex].action;
				} else {
					homeLinks[activeIndex - 1].action;
				}
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

<div class="py-2 overflow-y-auto flex-grow" bind:this={scrollContainer}>
	<div class="px-2">
		<SectionHeader>Recent work</SectionHeader>
		<div class="grid grid-cols-2 lg:grid-cols-4">
			{#each portfolio as item, index}
				{#if item.itemType === 'project'}
					<PortfolioItem
						label={item.name}
						isActive={activeProjectIndex === index && activeIndex === 0}
						category={item.detail}
						imgSrc={item.imgSrc}
						on:click={() => {
							item.action();
						}}
					/>
				{/if}
			{/each}
		</div>
	</div>
	<div class="w-full h-px bg-black bg-opacity-10 my-2" />
	<div class="px-2">
		{#each homeLinks as item, index}
			{#if item.itemType !== 'project'}
				{#if homeLinks[index - 1] === undefined || homeLinks[index - 1].category !== item.category}
					<SectionHeader>{item.category}</SectionHeader>
				{/if}
				<Item
					label={item.name}
					secondaryLabel={item.secondaryLabel}
					detail={item.detail}
					isActive={activeIndex === index + 1}
					on:click={() => {
						item.itemType === 'local' ? updateLocation(item.destination) : item.action();
					}}
				/>
			{/if}
		{/each}
	</div>
</div>
<Footer {actionLabel} />
