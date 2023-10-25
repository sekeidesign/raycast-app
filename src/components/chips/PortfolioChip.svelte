<script>
	export let label = 'Label';
	export let isActive = false;
</script>

<div
	class="px-2 py-1 bg-[#D93E37] bg-opacity-50 backdrop-brightness-50 shadow-chip backdrop-blur-lg flex items-center justify-center rounded-full border border-[#D93E37] border-opacity-50 relative w-fit {isActive
		? 'saturate-0 md:saturate-100'
		: 'saturate-0'}"
>
	<span
		class="text-2xs leading-3 font-semibold text-transparent tracking-tight bg-gradient-to-r from-[#FD8F98] to-[#F98A59] bg-clip-text"
		>{label}</span
	>
	{#if isActive}
		<div class="w-3 h-3 rounded-full bg-white blur-[6px] absolute -top-0.5 -right-1" />
	{/if}
</div>
