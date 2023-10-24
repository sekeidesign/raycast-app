<script>
	import { focusAction } from 'svelte-legos';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	import PortfolioChip from '$components/chips/PortfolioChip.svelte';

	export let label = 'Label yo';
	export let isActive = false;
	export let category = 'UX/UI';
	export let imgSrc = 'https://picsum.photos/200/300';
</script>

<button
	class="flex flex-col items-start gap-3 p-2 rounded-lg text-body leading-4 cursor-default bg-black outline-none {isActive
		? 'bg-opacity-0 lg:bg-opacity-10 lg:hover:bg-opacity-10'
		: 'bg-opacity-0 lg:hover:bg-opacity-5'}"
	tabindex="-1"
	on:click
	use:focusAction={isActive}
>
	<div class="w-full h-32 overflow-hidden rounded relative">
		<div class="relative z-10 w-full h-full">
			<img src={imgSrc} alt={`${label} Project Cover Image`} class="w-full h-full object-cover" />
		</div>
		<div class="absolute top-2 right-2 z-20">
			<PortfolioChip label={category} {isActive} />
		</div>
	</div>
	<div class="flex flex-col items-stars gap-1">
		<span class="text-primary text-left">{label}</span>
		<!-- <span class="text-secondary">{secondaryLabel}</span> -->
	</div>
</button>
