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
		<p class="text-primary font-bold text-lg leading-normal">Why MetaLab?</p>
		<p class="text-secondary text-body leading-normal">
			Reasons I’d love to join the team and think I would make a great fit for this role
		</p>
	</div>
	<div class="p-2 flex flex-col gap-2" bind:this={scrollContainer}>
		<div class="px-2 pt-2 hidden">
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
				I’m excited to submit my application for the role of Design Technologist at MetaLab. This is
				a role I advocated for passionately during my time there previously, and I’m excited to see
				it come to life and for the opportunity to help shape this role early on.
			</p>

			<SectionHeader>A technical designer at heart</SectionHeader>
			<p>
				I've spent the last 6 years honing my skills as a product designer, all the while upping my
				skills as a front-end developer, and taking deep care in ensuring smooth and seamless
				transition from pixels to lines of code. Even during my time at MetaLab, I was praised by my
				project's engineering teams for my attention to implementation details, identifying and
				thinking through edge cases, and approach products with development in mind.
			</p>

			<SectionHeader>Systems thinker</SectionHeader>
			<p>
				At Metafy, I manage the design system both in Figma and in our codebase, ensuring high
				parity between the two, and advocating for design details and pixel perfect execution.

				<br /> One of my biggest strengths is thinking in design at scale. All the way from ideation
				to shipping, I consider how designs and the systems we put in place can scale to accomodate a
				wide range of cases.
			</p>
			<SectionHeader>A fast learned</SectionHeader>
			<p>
				Although the majority of my development experience is in Svelte and Vue, I have a knack for
				quick learning and taking on new challenges with little hesitation. Recently, I designed and
				built <a href="https://testflight.apple.com/join/2d5Lt1v2" class="text-raycast underline"
					>my first iOS app</a
				>
				all within a month, while learning SwiftUI from scratch. <br /> I previously worked with
				React too, notably while building
				<a
					href="https://www.figma.com/community/widget/1052257340061758363/figjenda"
					class="text-raycast underline">FigJenda</a
				>, a Figma widget used by 32,000 people, which won me the award for Best Widget for Teams
				presented by Figma themselves!
			</p>

			<SectionHeader>Attention to detail</SectionHeader>
			<p>
				I pride myself in my attention to detail, and my ability to execute designs with pixel
				perfect precision. Hell, even this very website is a pixel perfect recreation of Raycast’s,
				from the interface, down to the interactions and keyboard shortcuts. UI.
			</p>

			<SectionHeader>A love for the team</SectionHeader>
			<p>
				Most importantly though, I remember my time at MetaLab very fondly, working with some of the
				most talent people and some of my favourite humans I've ever had the pleasure of working
				with. I'm so excited for the opportunity to work with the same folks, with the same care and
				attention to detail, on industry setting products.
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
