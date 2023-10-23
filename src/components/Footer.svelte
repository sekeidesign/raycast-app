<script>
	import ShortcutChip from '$components/chips/ShortcutChip.svelte';
	export let actionLabel = 'Open link';
</script>

<div
	class="bg-[#F2F0EE] h-10 border-t border-black border-opacity-10 hidden md:flex items-center justify-end px-4 flex-shrink-0"
>
	<div class="flex gap-3 items-center text-xs font-medium text-secondary">
		<span class="text-primary">{actionLabel}</span>
		<ShortcutChip>⏎</ShortcutChip>
		<div class="w-0.5 h-3 bg-black bg-opacity-10 rounded-full" />
		My Bento
		<div class="flex gap-0.5">
			<ShortcutChip>⌘</ShortcutChip>
			<ShortcutChip>B</ShortcutChip>
		</div>
		<div class="w-0.5 h-3 bg-black bg-opacity-10 rounded-full" />
		Email me
		<div class="flex gap-0.5">
			<ShortcutChip>⌘</ShortcutChip>
			<ShortcutChip>⇧</ShortcutChip>
			<ShortcutChip>E</ShortcutChip>
		</div>
	</div>
</div>
