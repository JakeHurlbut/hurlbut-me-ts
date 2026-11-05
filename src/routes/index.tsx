import { createFileRoute } from "@tanstack/react-router";
import SocialLink from "#/components/SocialLink";

export const Route = createFileRoute("/")({ component: Home });

const socialPlatforms = [
	{ name: "LinkedIn", url: "https://www.linkedin.com/in/hurlbut/" },
	{ name: "Bluesky", url: "https://bsky.app/profile/hurlbut.me" },
	{ name: "GitHub", url: "https://github.com/JakeHurlbut" },
	{ name: "Twitter", url: "https://x.com/JakeHurlbut" },
];

function Home() {
	return (
		<main className="grid min-h-dvh place-content-center px-6 py-16 md:px-2">
			<h1 className="text-primary scroll-m-20 text-center text-5xl font-bold tracking-tight text-balance md:text-6xl">
				Jacob Hurlbut
			</h1>
			<p className="text-primary mx-auto mt-8 text-center text-lg font-normal md:text-xl lg:text-2xl group">
				Professional&nbsp;
				<span className="font-bold transition-colors group-hover:text-brand">
					Hockey
				</span>
				&nbsp;Data Wrangler
			</p>
			<div className="mx-auto mt-10 grid w-full max-w-2xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
				{socialPlatforms.map((platform) => (
					<SocialLink
						key={platform.url}
						service={platform.name}
						url={platform.url}
					/>
				))}
			</div>
		</main>
	);
}
