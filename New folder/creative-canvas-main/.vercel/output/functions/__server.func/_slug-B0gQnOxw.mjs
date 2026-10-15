import { r as projects } from "./_ssr/portfolio-KBD70r5x.mjs";
import { K as notFound, _ as createFileRoute, g as lazyRouteComponent } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-B0gQnOxw.js
var $$splitComponentImporter = () => import("./_slug-CFM-B7xO.mjs");
var Route = createFileRoute("/work/$slug")({
	loader: ({ params }) => {
		const project = projects.find((item) => item.slug === params.slug);
		if (!project) throw notFound();
		return project;
	},
	head: ({ loaderData }) => ({ meta: [
		{ title: `${loaderData?.title ?? "Project"} — Asif Yousaf` },
		{
			name: "description",
			content: loaderData?.description ?? "An engineering case study by Asif Yousaf."
		},
		{
			property: "og:title",
			content: `${loaderData?.title ?? "Project"} — Asif Yousaf`
		},
		{
			property: "og:description",
			content: loaderData?.description ?? "An engineering case study by Asif Yousaf."
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
