import { TechnologyName, technologies } from "./technologies";

export const projects = [
	{
		category: "Web applications",
		items: [
			{
				title: "Next Pizza",
				description: "Web app for ordering pizza",
				technologies: [
					TechnologyName.TAILWIND_CSS,
					TechnologyName.NEXTJS,
					TechnologyName.STRIPE,
					TechnologyName.TYPESCRIPT,
				],
			},
		],
	},
	{
		category: "Algorithmic bots",
		items: [
			{
				title: "Forex Trading Bot",
				description: "Algo bot for trading forex currency markets",
				technologies: [
					TechnologyName.NODE_JS,
					TechnologyName.JAVASCRIPT,
					TechnologyName.ELECTRON,
				],
			},
		],
	},
	{ category: "Freelance projects", items: [] },
	{ category: "Other projects", items: [] },
];
