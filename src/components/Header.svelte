<script>
	import Location from '../Store.js';
	const updateLocation = (destination) => {
		Location.update(() => destination);
	};

	export let variant = 'subpage';
	export let searchQuery = '';

	const handleKeyDown = (event) => {
		switch (event.key) {
			case 'k':
				if (event.metaKey) {
					document.querySelector('input').focus();
				}
			case 'Escape':
				if (variant !== 'subpage') return;
				updateLocation('main');
				break;
		}
	};
</script>

<svelte:window on:keydown={handleKeyDown} />
<div
	class="w-full p-2 md:p-4 flex gap-2 items-center bg-white bg-opacity-70 md:bg-transparent border-t md:border-b rounded-2xl md:rounded-none border-black border-opacity-10 h-14"
>
	{#if variant === 'search'}
		<input
			type="text"
			placeholder="Search for projects, assets, and links..."
			class="w-full md:bg-transparent p-2 md:p-0 bg-black bg-opacity-5 shadow-inner md:shadow-none rounded-xl md:rounded-none placeholder:text-black placeholder:text-opacity-30 outline-none"
			bind:value={searchQuery}
		/>
	{/if}
	{#if variant === 'subpage'}
		<button
			on:click={() => {
				updateLocation('main');
			}}
			class="cursor-default flex items-center justify-center gap-2"
		>
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a
				href="#"
				class="text-primary bg-black transition-opacity duration-100 bg-opacity-10 active:opacity-50 cursor-default rounded-md h-6 w-6 flex items-center justify-center"
				>←</a
			>
			<span class="text-tertiary">Esc</span>
		</button>
	{/if}
</div>
