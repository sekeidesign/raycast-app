<script>
	import Location from '../Store.js';
	const updateLocation = (destination) => {
		Location.update(() => destination);
	};

	import ShortcutChip from '$components/chips/ShortcutChip.svelte';

	export let variant = 'subpage';

	const handleKeyDown = (event) => {
		if (event.key === 'Escape') {
			if (variant !== 'subpage') return;
			updateLocation('main');
		}
	};
</script>

<svelte:window on:keydown={handleKeyDown} />
<div class="w-full p-4 flex gap-2 items-center border-b border-black border-opacity-10 h-14">
	{#if variant === 'search'}
		<input
			type="text"
			placeholder="Search for projects, assets, and links..."
			class="w-full bg-transparent placeholder:text-black placeholder:text-opacity-30 outline-none"
		/>
	{/if}
	{#if variant === 'subpage'}
		<ShortcutChip><span class="text-primary">←</span></ShortcutChip>
		<span>Back</span>
	{/if}
</div>
