import { createFileRoute } from "@tanstack/react-router";
import SocialLink from "#/components/SocialLink";

export const Route = createFileRoute("/")({ component: Home });

const socialPlatforms = [
	{ name: "LinkedIn", url: "https://www.linkedin.com/in/hurlbut/" },
	{ name: "Bluesky", url: "https://bsky.app/profile/hurlbut.me" },
	{ name: "GitHub", url: "https://github.com/JakeHurlbut" },
	{ name: "X", url: "https://x.com/JakeHurlbut" },
];

function Home() {
	return (
		<div className="pt-20 sm:pt-24 md:pt-32">
			<h1 className="text-primary scroll-m-20 text-center text-5xl font-bold tracking-tight text-balance md:text-6xl">
				Jacob Hurlbut
			</h1>
			<p className="text-primary mx-auto mt-8 text-center text-lg font-light md:text-xl lg:text-2xl dark:font-normal group">
				Professional&nbsp;
				<span className="font-bold transition-colors group-hover:text-[#D24303]">
					Hockey&nbsp;
				</span>
				Data Wrangler
			</p>
			<div className="mx-auto mt-10 grid max-w-2xl grid-flow-row gap-4 px-6 md:auto-cols-fr md:grid-flow-col md:px-2">
				{socialPlatforms.map((platform) => (
					<SocialLink
						key={platform.url}
						service={platform.name}
						url={platform.url}
					/>
				))}
			</div>
		</div>
	);
}
