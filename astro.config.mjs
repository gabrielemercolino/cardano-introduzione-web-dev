import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	site: "https://cardano-introduzione-web-dev.vercel.app",
	integrations: [
		starlight({
			title: "Cardano web dev",
			locales: {
				root: {
					label: "Italiano",
					lang: "it-IT",
				},
			},
			social: {
				github: "https://github.com/gabrielemercolino",
			},
			sidebar: [
				{
					label: "Basi",
					autogenerate: { directory: "basi" },
				},
				{
					label: "Avanzato",
					autogenerate: { directory: "avanzato" },
				},
				{
					label: "Blog",
					autogenerate: { directory: "blog" },
				},
			],
		}),
	],
});
