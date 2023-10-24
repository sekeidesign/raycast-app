const openURL = (url) => {
	window.open(url, '_blank');
};

export const portfolio = [
	{
		name: 'Navigation Ÿ',
		secondaryLabel: null,
		detail: 'UX/UI',
		actionLabel: 'Open Dribbble',
		action: () => {
			openURL('https://dribbble.com/shots/22868504-Navigation-Y');
		},
		itemType: 'project',
		category: 'Recent projects',
		imgSrc:
			'https://cdn.dribbble.com/userupload/10890618/file/original-ae9ad54b090777da644bcb3e3e309f3a.jpg?resize=1024x768'
	},
	{
		name: 'Adaptive Enticement',
		secondaryLabel: null,
		detail: 'UX/UI',
		actionLabel: 'Open Dribbble',
		action: () => {
			openURL('https://dribbble.com/shots/22868504-Navigation-Y');
		},
		itemType: 'project',
		category: 'Recent projects',
		imgSrc:
			'https://cdn.dribbble.com/userupload/10890618/file/original-ae9ad54b090777da644bcb3e3e309f3a.jpg?resize=1024x768'
	},
	{
		name: 'Native App Tarantinos',
		secondaryLabel: null,
		detail: 'Ideation',
		actionLabel: 'Open Dribbble',
		action: () => {
			openURL('https://dribbble.com/shots/21603875-Metafy-Native-App-Tarantinos');
		},
		itemType: 'project',
		category: 'Recent projects',
		imgSrc:
			'https://cdn.dribbble.com/userupload/7433671/file/original-010080af7ef7b9fed986b3070886b7b6.jpg?resize=1024x768'
	},
	{
		name: 'Mobile App Icons',
		secondaryLabel: null,
		detail: 'Visual Design',
		actionLabel: 'Open Dribbble',
		action: () => {
			openURL('https://dribbble.com/shots/21901065-Metafy-Native-App-Icon-Explorations');
		},
		itemType: 'project',
		category: 'Recent projects',
		imgSrc:
			'https://cdn.dribbble.com/userupload/8278938/file/original-1738f98cd80a85154838670782e9b091.png?resize=1024x768'
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
		category: 'Welcome to Sekei'
	},
	{
		name: 'Why Raycast',
		secondaryLabel: null,
		detail: 'Cover Letter',
		actionLabel: 'Open document',
		destination: 'cover-letter',
		itemType: 'local',
		category: 'Basics'
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
		category: 'Basics'
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
		category: 'Basics'
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
		category: 'Links'
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
		category: 'Links'
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
		category: 'Links'
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
		category: 'Links'
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
		category: 'Links'
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
		category: 'Links'
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
		category: 'Experience'
	},
	{
		name: 'Product Designer',
		secondaryLabel: 'MetaLab',
		detail: "Oct' 21 - Jan' 23",
		actionLabel: 'Open link',
		action: () => {
			openURL('https://metafy.gg/');
		},
		itemType: 'item',
		category: 'Experience'
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
		category: 'Experience'
	},
	{
		name: 'StageGuide',
		secondaryLabel: 'Design & Dev',
		detail: 'iOS App',
		actionLabel: 'Open link',
		action: () => {
			openURL('https://metalab.com/');
		},
		itemType: 'item',
		category: 'Personal Projects'
	},
	{
		name: 'Figjenda',
		secondaryLabel: 'Design & Dev',
		detail: 'FigJam Widget',
		actionLabel: 'Open link',
		action: () => {
			openURL('https://fieldeffect.com/');
		},
		itemType: 'item',
		category: 'Personal Projects'
	}
];
