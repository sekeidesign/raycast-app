const openURL = (url) => {
	window.open(url, '_blank');
};

export const portfolio = [
	{
		name: 'Navigation Ÿ',
		secondaryLabel: 'Portfolio',
		detail: 'UX/UI',
		actionLabel: 'Open Dribbble',
		action: () => {
			openURL('https://dribbble.com/shots/22868504-Navigation-Y');
		},
		itemType: 'project',
		category: 'Recent projects',
		icon: 'work',
		imgSrc: 'navY'
	},
	{
		name: 'Adaptive Enticement',
		secondaryLabel: 'Portfolio',
		detail: 'UX/UI',
		actionLabel: 'Open Dribbble',
		action: () => {
			openURL(
				'https://dribbble.com/shots/22910319-Adaptive-Enticement?utm_source=Clipboard_Shot&utm_campaign=sekeidesign&utm_content=Adaptive%20Enticement&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=sekeidesign&utm_content=Adaptive%20Enticement&utm_medium=Social_Share'
			);
		},
		itemType: 'project',
		category: 'Recent projects',
		icon: 'work',
		imgSrc: 'adaptiveEnticement'
	},
	{
		name: 'Native App Tarantinos',
		secondaryLabel: 'Portfolio',
		detail: 'Ideation',
		actionLabel: 'Open Dribbble',
		action: () => {
			openURL('https://dribbble.com/shots/21603875-Metafy-Native-App-Tarantinos');
		},
		itemType: 'project',
		category: 'Recent projects',
		icon: 'work',
		imgSrc: 'tarantinos'
	},
	{
		name: 'Mobile App Icons',
		secondaryLabel: 'Portfolio',
		detail: 'Visual Design',
		actionLabel: 'Open Dribbble',
		action: () => {
			openURL('https://dribbble.com/shots/21901065-Metafy-Native-App-Icon-Explorations');
		},
		itemType: 'project',
		category: 'Recent projects',
		icon: 'work',
		imgSrc: 'appIcons'
	}
];

export const homeLinks = [
	{
		name: 'PG Gonni',
		secondaryLabel: 'Design Engineer',
		detail: 'Profile',
		actionLabel: 'Open profile',
		destination: 'profile',
		itemType: 'local',
		category: 'Welcome to Sekei',
		icon: 'avatar'
	},
	{
		name: 'Why Raycast',
		secondaryLabel: null,
		detail: 'Intro & Cover Letter',
		actionLabel: 'Open document',
		destination: 'cover-letter',
		itemType: 'local',
		category: 'Basics',
		icon: 'raycast'
	},
	{
		name: 'My work',
		secondaryLabel: null,
		detail: 'Portfolio',
		actionLabel: 'Open link',
		action: () => {
			openURL('https://dribbble.com/sekeidesign');
		},
		itemType: 'item',
		category: 'Basics',
		icon: 'work'
	},
	{
		name: 'Praise board',
		secondaryLabel: null,
		detail: 'References',
		actionLabel: 'Open link',
		action: () => {
			openURL(
				'https://sekeidesign.notion.site/4e3305fddb6e44e0bbe6c9f177da48a4?v=59be50e9dc9a4de3935287dbf8de4810&pvs=4'
			);
		},
		itemType: 'item',
		category: 'Basics',
		icon: 'praiseBoard'
	},
	{
		name: 'Email me',
		secondaryLabel: null,
		detail: 'Contact',
		actionLabel: 'Send email',
		action: () => {
			openURL('mailto:pg@sekei.ca');
		},
		itemType: 'item',
		category: 'Links',
		icon: 'email'
	},
	{
		name: 'LinkedIn',
		secondaryLabel: '/in/pgonni',
		detail: 'Social',
		actionLabel: 'Open link',
		action: () => {
			openURL('https://www.linkedin.com/in/pgonni/');
		},
		itemType: 'item',
		category: 'Links',
		icon: 'linkedin'
	},
	{
		name: 'Instagram',
		secondaryLabel: '@sekeidesign',
		detail: 'Social',
		actionLabel: 'Open link',
		action: () => {
			openURL('https://www.instagram.com/sekeidesign/');
		},
		itemType: 'item',
		category: 'Links',
		icon: 'instagram'
	},
	{
		name: 'YouTube',
		secondaryLabel: '@sekeidesign',
		detail: 'Social',
		actionLabel: 'Open link',
		action: () => {
			openURL('https://youtube.com/@sekeidesign');
		},
		itemType: 'item',
		category: 'Links',
		icon: 'youtube'
	},
	{
		name: 'Threads',
		secondaryLabel: '@sekeidesign',
		detail: 'Social',
		actionLabel: 'Open link',
		action: () => {
			openURL('https://www.threads.net/@sekeidesign');
		},
		itemType: 'item',
		category: 'Links',
		icon: 'threads'
	},
	{
		name: 'My Bento',
		secondaryLabel: 'sekeidesign',
		detail: 'Linktree',
		actionLabel: 'Open link',
		action: () => {
			openURL('https://bento.me/sekeidesign');
		},
		itemType: 'item',
		category: 'Links',
		icon: 'bento'
	}
];

export const profileLinks = [
	{
		name: 'Design Engineer',
		secondaryLabel: 'Metafy',
		detail: 'Current',
		actionLabel: 'Open link',
		action: () => {
			openURL('https://metafy.gg/');
		},
		itemType: 'item',
		category: 'Experience',
		icon: 'metafy'
	},
	{
		name: 'Product Designer',
		secondaryLabel: 'MetaLab',
		detail: "Oct' 21 - Jan' 23",
		actionLabel: 'Open link',
		action: () => {
			openURL('https://metalab.com/');
		},
		itemType: 'item',
		category: 'Experience',
		icon: 'metalab'
	},
	{
		name: 'Product Designer',
		secondaryLabel: 'Field Effect',
		detail: "Dec' 20 - Oct' 21",
		actionLabel: 'Open link',
		action: () => {
			openURL('https://fieldeffect.com/');
		},
		itemType: 'item',
		category: 'Experience',
		icon: 'fieldEffect'
	},
	{
		name: 'StageGuide',
		secondaryLabel: 'Design & Dev',
		detail: 'iOS App',
		actionLabel: 'Open link',
		action: () => {
			openURL('https://testflight.apple.com/join/2d5Lt1v2');
		},
		itemType: 'item',
		category: 'Personal Projects',
		icon: 'stageGuide'
	},
	{
		name: 'Figjenda',
		secondaryLabel: 'Design & Dev',
		detail: 'FigJam Widget',
		actionLabel: 'Open link',
		action: () => {
			openURL('https://www.figma.com/community/widget/1052257340061758363/figjenda');
		},
		itemType: 'item',
		category: 'Personal Projects',
		icon: 'figjenda'
	}
];
