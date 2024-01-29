import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	site: 'talkshowtemplate.pages.dev',
	server: {
		port: 3000
	},
	integrations: [tailwind()],
	output: 'server',
	adapter: cloudflare({
		mode: 'directory'
	}),
	compressHTML: true
});
