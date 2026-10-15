import { i as __toESM } from "../_runtime.mjs";
import { n as profile } from "./portfolio-KBD70r5x.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as ArrowUpRight, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Contact-DDVyCM1U.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline",
			studio: "studio-button",
			editorial: "editorial-button"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function Navigation({ home = false }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "site-header",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "wordmark",
				"aria-label": "Asif Yousaf home",
				children: [
					"AY",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "wordmark-dot",
						children: "."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "wordmark-caption",
						children: [
							"ASIF YOUSAF",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"DEVELOPER & ENGINEER"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: open ? "main-nav nav-open" : "main-nav",
				"aria-label": "Main navigation",
				children: [home ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#work",
						onClick: () => setOpen(false),
						children: ["Work ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#about",
						onClick: () => setOpen(false),
						children: ["About ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#system",
						onClick: () => setOpen(false),
						children: ["The system ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "03" })]
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					hash: "work",
					children: ["Selected work ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "nav-contact",
					href: `mailto:${profile.email}`,
					children: ["Let’s talk ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 15 })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				className: "menu-toggle",
				"aria-label": open ? "Close navigation" : "Open navigation",
				"aria-expanded": open,
				onClick: () => setOpen(!open),
				children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
			})
		]
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "contact-section section-shell",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-label",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "04 / WHAT’S NEXT" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "A CONVERSATION IS A GOOD START." })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "contact-headline",
				href: `mailto:${profile.email}`,
				children: [
					"Let’s build",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"what’s next.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { "aria-hidden": "true" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "contact-bottom",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "email-link",
					href: `mailto:${profile.email}`,
					children: [profile.email, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 18 })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "social-links",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: profile.github,
							target: "_blank",
							rel: "noopener noreferrer",
							children: ["GitHub ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 14 })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: profile.linkedin,
							target: "_blank",
							rel: "noopener noreferrer",
							children: ["LinkedIn ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 14 })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: profile.resume,
							target: "_blank",
							rel: "noopener noreferrer",
							children: ["Résumé ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 14 })]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 ASIF YOUSAF" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "DESIGNED WITH INTENT. BUILT WITH PRECISION." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					children: "BACK TO TOP ↑"
				})
			] })
		]
	});
}
//#endregion
export { Contact as n, Navigation as r, Button as t };
