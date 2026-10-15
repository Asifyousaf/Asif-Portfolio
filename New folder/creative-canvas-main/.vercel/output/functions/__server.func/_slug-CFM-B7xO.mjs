import { r as projects } from "./_ssr/portfolio-KBD70r5x.mjs";
import { y as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { t as Route } from "./_slug-B0gQnOxw.mjs";
import { i as ArrowUpRight, o as ArrowLeft } from "./_libs/lucide-react.mjs";
import { n as Contact, r as Navigation, t as Button } from "./_ssr/Contact-DDVyCM1U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CFM-B7xO.js
var import_jsx_runtime = require_jsx_runtime();
function CaseStudy() {
	const project = Route.useLoaderData();
	const next = projects[(projects.findIndex((item) => item.slug === project.slug) + 1) % projects.length];
	if (!next) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "case-study",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					className: "case-back",
					to: "/",
					hash: "work",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 15 }), "BACK TO SELECTED WORK"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "eyebrow text-primary",
					children: [
						project.number,
						" / ",
						project.category
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "case-title",
					children: project.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "case-intro",
					children: project.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "case-actions",
					children: [
						project.live && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "studio",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: project.live,
								target: "_blank",
								rel: "noopener noreferrer",
								children: [
									project.live.includes("linkedin") ? "Watch demo on LinkedIn" : "Visit live project",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})
								]
							})
						}),
						project.source && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "text-action",
							href: project.source,
							target: "_blank",
							rel: "noopener noreferrer",
							children: ["View source ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })]
						}),
						"note" in project && project.note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-muted-foreground border border-border px-3 py-2",
							children: project.note
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "case-cover",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: project.image,
						alt: project.alt,
						width: "1536",
						height: "768"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "case-details",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow",
						children: "TECHNOLOGY STACK"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "case-stack",
						children: project.stack.map((tool) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tool }, tool))
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "The challenge." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: project.problem }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-10",
							children: "My contribution."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: project.contributions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item)) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-10",
							children: "The connected system."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "case-flow",
							children: project.flow.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"0",
								i + 1,
								" / ",
								i === 3 ? "OUTPUT" : "PROCESS"
							] }), item] }, item))
						})
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					className: "case-next",
					to: "/work/$slug",
					params: { slug: next.slug },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow block mb-3",
						children: "NEXT PROJECT"
					}), next.title] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 35 })]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})] })]
	});
}
//#endregion
export { CaseStudy as component };
