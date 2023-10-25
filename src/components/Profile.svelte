<script>
	import { profileLinks } from '$lib/data.js';

	import { onMount } from 'svelte';

	import SectionHeader from '$components/SectionHeader.svelte';
	import Chip from '$components/chips/Chip.svelte';
	import Item from '$components/list-items/Item.svelte';
	import Footer from '$components/Footer.svelte';
	import avatarLarge from '$lib/avatar-large.webp';

	const skills = [
		'Product Design',
		'Design Systems',
		'TailwindCSS',
		'SvelteKit',
		'SwiftUI',
		'Pretty funny',
		'Kinda cool'
	];

	import Location from '../Store.js';
	const updateLocation = (destination) => {
		Location.update(() => destination);
	};

	let activeIndex = 0;
	let activeProjectIndex = 0;
	$: actionLabel = profileLinks[activeIndex].actionLabel;

	const openURL = (url) => {
		window.open(url, '_blank');
	};

	const handleKeyDown = (event) => {
		switch (event.key) {
			case 'ArrowDown':
				activeIndex = activeIndex === profileLinks.length - 1 ? 0 : activeIndex + 1;
				break;
			case 'ArrowUp':
				activeIndex = activeIndex === 0 ? profileLinks.length - 1 : activeIndex - 1;
				break;
			case 'Enter':
				profileLinks[activeIndex].action;
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
			case 'k':
				if (event.metaKey) {
					updateLocation('main');
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
<div class="flex-grow overflow-y-scroll" bind:this={scrollContainer}>
	<div class="flex p-4 gap-3 h-fit items-center border-b border-black border-opacity-10">
		<div class="w-16 h-16 rounded-full overflow-hidden shadow-avatar">
			<img
				src={avatarLarge}
				alt="A warm toned headshot of PG Gonni in a cafe, looking off to camera left with a subtle smile"
				class="w-full h-full object-cover"
			/>
		</div>
		<div class="flex-grow">
			<p class="text-primary font-bold text-lg leading-normal">PG Gonni</p>
			<p class="text-secondary text-body leading-normal">
				Design Engineer, cat father, and lover of walks
			</p>
		</div>
		<div class="text-body text-right">
			<p class="text-secondary leading-normal">Montreal, QC</p>
			<p class="text-tertiary leading-normal">GMT -4</p>
		</div>
	</div>
	<div class="p-2">
		<SectionHeader>Skills</SectionHeader>
		<div class="p-2 flex flex-wrap gap-2">
			{#each skills as skill}
				<Chip label={skill} />
			{/each}
		</div>
		{#each profileLinks as item, index}
			{#if item.itemType !== 'project'}
				{#if profileLinks[index - 1] === undefined || profileLinks[index - 1].category !== item.category}
					<SectionHeader>{item.category}</SectionHeader>
				{/if}
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
			{/if}
		{/each}
	</div>
</div>
<Footer {actionLabel} />
