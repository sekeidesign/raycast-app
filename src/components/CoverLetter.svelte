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
	<div class="flex flex-col p-2 gap-1 h-fit items-start border-b border-black border-opacity-10">
		<p class="text-primary font-bold text-lg leading-normal">Why Raycast?</p>
		<p class="text-secondary text-body leading-normal">
			Reasons I’d love to join your team and think I would make a great fit
		</p>
	</div>
	<div class="p-2 flex flex-col gap-2" bind:this={scrollContainer}>
		<div class="px-2 pt-2">
			<div class="h-80 overflow-hidden relative rounded-lg bg-black bg-opacity-10">
				<iframe
					src="https://www.loom.com/embed/fb0d84c72b894d15b516eb710e348871?sid=fcc8d98c-75e9-435f-b0b9-f4a62b3f975b"
					frameborder="0"
					style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
					title="Intro video"
				/>
			</div>
		</div>
		<div class="py-2 text-reader flex flex-col gap-2">
			<p>
				I’m excited to submit my application for the role of Product Designer for Raycast’s iOS
				product. My love for your product, iOS as a design platform, and SwiftUI as a development
				and prototyping tool, I believe I’d be a great fit for this role.
			</p>

			<SectionHeader>Command palette addict</SectionHeader>
			<div
				class="border-y border-black border-opacity-10 flex flex-col items-center mx-2 p-2 text-center"
			>
				<p class="text-xl text-primary italic mb-1">“Your computer is horrible to use”</p>
				<p class="text-xs text-tertiary">- My girlfriend and anyone who needs to use my laptop.</p>
			</div>
			<p>
				My whole laptop experience is set up to work with command palettes and keyboard shortcuts,
				namely Raycast and Arc, along with the command palettes inside apps like Figma, VSCode, etc.
				I like to act like a little speed demon, moving as fast and efficiently as I can, but of
				course not everyone likes that, which I guess works as a nice deterrent from touching my
				stuff!
			</p>

			<SectionHeader>Experience & passion for the space</SectionHeader>
			<p>
				In the past, I’ve designed a variety of mobile apps <a
					href="https://apps.apple.com/story/id1683690431"
					class="text-raycast underline">(including ones featured in the App Store)</a
				>, as well as my own iOS App for
				<a href="https://testflight.apple.com/join/2d5Lt1v2" class="text-raycast underline"
					>Riverside Music Festival</a
				>, where I designed and built Live Activities and the MVP of the product with SwiftUI.
			</p>
			<p>
				This experience and my passion for everything Apple including the various devices in the
				eco-system, Interactive Widgets, Shortcuts, and other native platform features, makes me
				super excited for the opportunity to explore uncharted territory to bring Raycast’s amazing
				value add to a mobile surface.
			</p>

			<SectionHeader>Remote first</SectionHeader>
			<p>
				Let's address the elephant in the room, an elephant holding a clock and paying close
				attention to time zones. <span class="italic">I am not based in UTC ±3.</span>
			</p>
			<p>
				However, I have years of experience working with distributed teams successfully, ofter
				working across timezones all the way from North America, to EMEA, to Asia, and Australasia!
				Not only that, but I thrive in these types of environments, taking advantage of Loom, Figma,
				and Discord (or Slack... I guess) to keep myself and my teams collaborating smooth like
				butter.
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
