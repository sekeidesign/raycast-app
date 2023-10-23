/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontSize: {
				'2xs': '0.625rem',
				section: '0.75rem',
				body: '0.8125rem'
			},
			borderRadius: {
				window: '.625rem'
			},
			boxShadow: {
				window:
					'0px 20px 56px 0px rgba(0, 0, 0, 0.45), 0px 1px 1px 0px #FFF inset, 0px 0px 0.5px 0.75px rgba(0, 0, 0, 0.17)',
				chip: 'box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.50);'
			},
			textColor: {
				primary: 'rgba(13, 13, 13, 1)',
				secondary: 'rgba(13, 13, 13, 0.50)',
				tertiary: 'rgba(13, 13, 13, 0.35)'
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
			}
		}
	},
	plugins: []
};

module.exports = config;
