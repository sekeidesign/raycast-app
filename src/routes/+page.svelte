<script>
	import { onMount } from 'svelte';

	import Item from '$components/list-items/Item.svelte';
	import PortfolioItem from '$components/list-items/PortfolioItem.svelte';
	import SectionHeader from '$components/SectionHeader.svelte';
	import background from '$assets/raycast-wallpaper.webp';
	import Input from '$components/Input.svelte';
	import Footer from '$components/Footer.svelte';

	import { portfolio, homeLinks } from '$lib/data.js';

	let isSearchFocused = true;
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
			default:
				isSearchFocused = true;
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

<div
	class="w-screen h-screen flex items-end md:items-center justify-center pt-10 md:p-10 cursor-default"
>
	<img src={background} alt="" class="absolute inset-0 w-full h-full object-cover -z-10" />
	<div
		class="bg-white flex flex-col overflow-hidden backdrop-brightness-150 bg-opacity-80 shadow-window backdrop-blur-xl rounded-window h-full w-full max-h-[90%] md:max-h-window max-w-window"
	>
		<Input isFocused={isSearchFocused} />
		<div class="py-2 overflow-y-auto flex-grow" bind:this={scrollContainer}>
			<div class="px-2">
				<SectionHeader>Recent work</SectionHeader>
				<div class="grid grid-cols-2 md:grid-cols-4">
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
								item.action();
							}}
						/>
					{/if}
				{/each}
			</div>
		</div>
		<Footer {actionLabel} />
	</div>
</div>
