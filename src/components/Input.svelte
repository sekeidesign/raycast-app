<script>
	import { focusAction } from 'svelte-legos';

	export let isFocused = true;
</script>

<div class="w-full p-4 border-b border-black border-opacity-10 h-14">
	<input
		type="text"
		placeholder="Search for projects, assets, and links..."
		class="w-full bg-transparent placeholder:text-black placeholder:text-opacity-30 outline-none"
		use:focusAction={isFocused}
	/>
</div>
