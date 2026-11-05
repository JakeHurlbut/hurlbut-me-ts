import { Button } from "./ui/button";

interface SocialLinkProps {
	service: string;
	url: string;
}

export default function SocialLink({ service, url }: SocialLinkProps) {
	const rel = service === "Mastodon" ? "me" : "noreferrer";
	return (
		<Button
			size="xl"
			variant="outline"
			className="dark:border-emerald-200 dark:text-slate-200 dark:shadow-inner dark:hover:text-slate-50 text-primary"
			asChild
		>
			<a href={url} rel={rel} target="_blank">
				{service}
			</a>
		</Button>
	);
}
