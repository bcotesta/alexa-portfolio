import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// Optional: Configure Netlify-specific options here
			// edge: false, // if true, will create a Netlify Edge Function
			// split: false, // if true, will split your app into multiple functions
		})
	}
};

export default config;