import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import appCss from "../styles.css?url";

const TYPEKIT_CSS = "https://use.typekit.net/scj5ddn.css";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ title: "Jacob Hurlbut" },
			{ name: "description", content: "Professional Hockey Data Wrangler" },
		],
		links: [
			{ rel: "icon", href: "/favicon.ico" },
			// Kit CSS @imports a tracking stylesheet from p.typekit.net, and font
			// files are fetched from use.typekit.net in CORS mode.
			{ rel: "preconnect", href: "https://p.typekit.net" },
			{
				rel: "preconnect",
				href: "https://use.typekit.net",
				crossOrigin: "anonymous",
			},
			{ rel: "stylesheet", href: TYPEKIT_CSS },
			{ rel: "stylesheet", href: appCss },
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
				{/* Rendered directly: HeadContent dedupes meta tags by name, which would drop one of these. */}
				<meta
					name="theme-color"
					content="#ffffff"
					media="(prefers-color-scheme: light)"
				/>
				<meta
					name="theme-color"
					content="#314158"
					media="(prefers-color-scheme: dark)"
				/>
			</head>
			<body>
				{children}
				<TanStackDevtools
					config={{ position: "bottom-right" }}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
