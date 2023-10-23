<script>
	import { focusAction } from 'svelte-legos';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let label = 'Label yo';
	export let secondaryLabel = 'Secondary Label';
	export let detail = 'Detail';
	export let isActive = false;
</script>

<button
	class="flex items-center gap-3 px-2 py-2.5 rounded-lg w-full text-body cursor-default leading-4 bg-black outline-none {isActive
		? 'bg-opacity-10 hover:bg-opacity-10'
		: 'bg-opacity-0 hover:bg-opacity-5'}"
	tabindex="-1"
	on:click={() => {
		dispatch('click');
	}}
	use:focusAction={isActive}
>
	<div class="w-5 h-5 overflow-hidden rounded">
		<slot name="icon">
			<div class="w-5 h-5 rounded-full bg-black" />
		</slot>
	</div>
	<div class="flex items-center gap-2 flex-grow">
		<span class="text-primary">{label}</span>
		{#if secondaryLabel}
			<span class="text-secondary">{secondaryLabel}</span>
		{/if}
	</div>
	{#if detail}
		<span class="text-secondary">{detail}</span>
	{/if}
</button>
