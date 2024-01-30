<script>
	import { onMount } from 'svelte';

	import SectionHeader from '$components/SectionHeader.svelte';
	import Footer from '$components/Footer.svelte';

	import Location from '../Store.js';
	const updateLocation = (destination) => {
		Location.update(() => destination);
	};

	let scrollContainer;

	onMount(() => {
		scrollContainer.click();
	});
</script>

<div class="flex-grow overflow-y-scroll">
	<div
		class="flex flex-col p-2 py-4 gap-1 h-fit items-start border-b border-black border-opacity-10"
	>
		<p class="text-primary font-bold text-2xl leading-normal">Why Planned 🖤 PG</p>
		<p class="text-secondary text-body leading-normal">
			Reasons I’d love to join the team and think I would make a great fit for this role
		</p>
	</div>
	<div class="p-2 flex flex-col gap-2" bind:this={scrollContainer}>
		<div class="px-2 pt-2">
			<div class="h-80 overflow-hidden relative rounded-lg bg-black bg-opacity-10">
				<iframe
					src="https://www.loom.com/share/7f3dbdde3254489c8413ba4f877c9435"
					frameborder="0"
					style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
					title="Intro video"
				/>
			</div>
		</div>
		<div class="py-2 text-reader flex flex-col gap-2">
			<p>
				I’m excited to submit my application for the role of Head of Product Design at Planned, and
				for the opportunity to help shape such an interesting product, and to lead by example,
				enabling my team to build something they're deeply proud of.
			</p>

			<SectionHeader>A Design Engineer at heart</SectionHeader>
			<p>
				I've spent the last 7+ years honing my skills as a product designer, a web developer, and a
				product thinker, but that's all too verbose, so I like to call myself a Design Engineer! In
				my career, Ive often been praised praised by my project's engineering teams for my attention
				to implementation details, identifying and thinking through edge cases, and how I approach
				product with development in mind.
			</p>

			<SectionHeader>A passionate product thinker</SectionHeader>
			<p>
				I love to think deep about product, understanding users, their behaviours, their needs, and
				combining that to design solutions that start in their simplest possible form, and using and
				additive process to build on top of that when necessary. I belive this approach to leads to
				simpler, more focused product, which are my north star. I pride myself in my ability to
				think about Design at scale, which comes from my deep expertise in Design Systems.
			</p>

			<SectionHeader>A mentor in the community</SectionHeader>
			<p>
				I would bore you if I described every way in which I try to give back to the community with
				mentoring and education. From my <a
					href="https://codingfordesigners.dev/"
					class="text-raycast underline">Intro to Coding for Designers</a
				>
				course, to teaching Design Systems to Github Design Leads, and even organizing and hosting
				<a
					href="https://www.linkedin.com/feed/update/urn:li:activity:7080626168932036608/"
					class="text-raycast underline">Lorem Ipsum</a
				>, a product meetup here in Montreal.<br />

				<br /> I like to show up for others the way they've shown up for me in the past. I wouldn't be
				where I am in my career without all the mentors and leaders I've encountered, and I try to pay
				that forward every day.
			</p>

			<SectionHeader>A passion for AI and Engineering</SectionHeader>
			<p>
				I've consistently shown up as a bridge between Design and Engineering, and combining that
				skill set and interests to help us experiment with new features like our AI powered cover
				image generator in Metafy's article editor.
			</p>
			<SectionHeader>Endless tinkering</SectionHeader>
			<p>
				I love tinkering and taking on new challenges with little hesitation. Recently, I designed
				and built <a
					href="https://testflight.apple.com/join/2d5Lt1v2"
					class="text-raycast underline">my first iOS app</a
				>
				all within a month, while learning SwiftUI from scratch. <br /> I previously worked with
				React too, notably while building
				<a
					href="https://www.figma.com/community/widget/1052257340061758363/figjenda"
					class="text-raycast underline">FigJenda</a
				>, a Figma widget used by 32,000 people, which won me the award for Best Widget for Teams
				presented by Figma themselves!
			</p>
		</div>
	</div>
</div>
<Footer actionLabel="Close" />

<style>
	p {
		padding: 0 0.5rem;
	}
</style>
