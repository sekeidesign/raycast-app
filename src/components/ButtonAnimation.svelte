<script>
	import { onMount } from 'svelte';

	let pressCommand = false;
	let pressSpace = false;

	onMount(() => {
		setTimeout(() => {
			pressCommand = true;
		}, 300);
		setTimeout(() => {
			pressSpace = true;
		}, 500);
	});
</script>

<div class="absolute w-full h-full -z-10 flex items-center justify-center gap-4 text-sm">
	<div
		class="{pressCommand
			? ''
			: 'extrude'} bg-[#1F1E28] transition-all ease-button duration-200 border border-[#2b2a37] rounded-lg w-11 h-9 flex items-center justify-center"
	>
		<span class="bg-text-gradient text-transparent bg-clip-text">⌘</span>
	</div>
	<div
		class="{pressSpace
			? ''
			: 'extrude'} bg-[#1F1E28] transition-all ease-button duration-200 border border-[#2b2a37] rounded-lg w-36 h-9 flex items-center justify-center"
	>
		<span class="bg-text-gradient text-transparent bg-clip-text">Space</span>
	</div>
</div>

<style>
	.extrude {
		box-shadow: 0px 6px #2b2a37;
		transform: translate3d(0px, -6px, 0);
	}
	.ease-button {
		transition: all 400 cubic-bezier(0.22, 0.12, 0.02, 1.26);
	}
</style>
