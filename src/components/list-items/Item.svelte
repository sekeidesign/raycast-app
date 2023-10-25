<script>
	import { focusAction } from 'svelte-legos';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	import ItemIcon from '$components/ItemIcon.svelte';

	export let label = 'Label yo';
	export let secondaryLabel = 'Secondary Label';
	export let detail = 'Detail';
	export let isActive = false;
	export let icon = 'raycast';
</script>

<button
	class="flex items-center gap-3 px-2 py-2.5 rounded-lg w-full text-body cursor-default leading-4 bg-black outline-none {isActive
		? 'bg-opacity-0 md:bg-opacity-10 md:hover:bg-opacity-10'
		: 'bg-opacity-0 md:hover:bg-opacity-5'}"
	tabindex="-1"
	on:click
	use:focusAction={isActive}
>
	<div class="w-5 h-5 overflow-hidden rounded">
		<ItemIcon {icon} />
	</div>
	<div class="flex flex-col sm:flex-row sm:items-center text-left sm:gap-2 flex-grow">
		<span class="text-primary">{label}</span>
		{#if secondaryLabel}
			<span class="text-secondary">{secondaryLabel}</span>
		{/if}
	</div>
	{#if detail}
		<span class="text-secondary text-right">{detail}</span>
	{/if}
</button>
