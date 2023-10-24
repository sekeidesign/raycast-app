/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontSize: {
				'2xs': '0.625rem',
				section: '0.75rem',
				body: '0.8125rem',
				reader: '0.9375rem'
			},
			borderRadius: {
				window: '.625rem'
			},
			boxShadow: {
				window:
					'0px 20px 56px 0px rgba(0, 0, 0, 0.45), 0px 1px 1px 0px #FFF inset, 0px 0px 0.5px 0.75px rgba(0, 0, 0, 0.17)',
				chip: '0px 4px 12px 0px rgba(0, 0, 0, 0.50);',
				avatar:
					'0px 8px 16px 0px rgba(0, 0, 0, 0.15), 0px 1px 1px 0px rgba(255, 255, 255, 0.50) inset, 0px 0px 0.5px 0.75px rgba(0, 0, 0, 0.17);'
			},
			textColor: {
				primary: 'rgba(13, 13, 13, 1)',
				secondary: 'rgba(13, 13, 13, 0.50)',
				tertiary: 'rgba(13, 13, 13, 0.35)',
				raycast: '#A82222'
			},
			minWidth: {
				5: '20px',
				6: '24px'
			},
			maxWidth: {
				window: '750px'
			},
			maxHeight: {
				window: '560px'
			},
			height: {
				screen: 'calc(100dvh)'
			}
		}
	},
	plugins: []
};

module.exports = config;
