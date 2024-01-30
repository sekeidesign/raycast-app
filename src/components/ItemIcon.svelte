<script>
	import avatar from '$lib/link-icons/avatar.png';
	import bento from '$lib/link-icons/bento.svg';
	import email from '$lib/link-icons/email.svg';
	import fieldEffect from '$lib/link-icons/field-effect.svg';
	import figjenda from '$lib/link-icons/figjenda.svg';
	import instagram from '$lib/link-icons/instagram.svg';
	import linkedin from '$lib/link-icons/linkedin.svg';
	import metafy from '$lib/link-icons/metafy.svg';
	import metalab from '$lib/link-icons/metalab.svg';
	import praiseBoard from '$lib/link-icons/praise-board.svg';
	import raycast from '$lib/link-icons/raycast.svg';
	import stageGuide from '$lib/link-icons/stage-guide.svg';
	import threads from '$lib/link-icons/threads.svg';
	import work from '$lib/link-icons/work.svg';
	import youtube from '$lib/link-icons/youtube.svg';
	import planned from '$lib/link-icons/planned.svg';

	const icons = {
		avatar,
		bento,
		email,
		fieldEffect,
		figjenda,
		instagram,
		linkedin,
		metafy,
		metalab,
		praiseBoard,
		raycast,
		stageGuide,
		threads,
		work,
		youtube,
		planned
	};

	export let icon = '';
</script>

<div class="w-5 h-5 overflow-hidden rounded p-px">
	<img src={icons[icon]} alt="{icon} Icon" class="w-full h-full object-cover rounded" />
</div>
