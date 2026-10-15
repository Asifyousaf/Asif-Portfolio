import { i as __toESM } from "../_runtime.mjs";
import { i as stages, n as profile, r as projects, t as otherWork } from "./portfolio-KBD70r5x.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as ArrowRight, i as ArrowUpRight, n as Plus, s as ArrowDown } from "../_libs/lucide-react.mjs";
import { n as Contact, r as Navigation, t as Button } from "./Contact-DDVyCM1U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DAzhGeHy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Installation() {
	const host = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const element = host.current;
		if (!element) return;
		let disposed = false;
		let cleanup = () => {};
		import("../_libs/three.mjs").then((n) => n.t).then((THREE) => {
			if (disposed) return;
			let renderer;
			try {
				renderer = new THREE.WebGLRenderer({
					alpha: true,
					antialias: true,
					powerPreference: "low-power"
				});
			} catch {
				return;
			}
			const styles = getComputedStyle(element);
			const accent = new THREE.Color(styles.getPropertyValue("--scene-accent").trim());
			const surface = new THREE.Color(styles.getPropertyValue("--scene-surface").trim());
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
			element.appendChild(renderer.domElement);
			element.classList.add("scene-ready");
			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera(34, 1, .1, 100);
			camera.position.z = 8.8;
			const group = new THREE.Group();
			scene.add(group);
			const geometry = new THREE.TorusKnotGeometry(1.34, .43, 180, 4, 2, 3);
			const material = new THREE.MeshStandardMaterial({
				color: surface,
				metalness: .86,
				roughness: .27,
				flatShading: true
			});
			const mesh = new THREE.Mesh(geometry, material);
			group.add(mesh);
			const edgesGeometry = new THREE.EdgesGeometry(geometry, 12);
			const edgesMaterial = new THREE.LineBasicMaterial({
				color: accent,
				transparent: true,
				opacity: .85
			});
			group.add(new THREE.LineSegments(edgesGeometry, edgesMaterial));
			const ambient = new THREE.AmbientLight(accent, 1.5);
			scene.add(ambient);
			const light = new THREE.DirectionalLight(accent, 8);
			light.position.set(3, 5, 4);
			scene.add(light);
			const fill = new THREE.DirectionalLight(new THREE.Color(styles.getPropertyValue("--scene-light").trim()), 5);
			fill.position.set(-4, -2, 3);
			scene.add(fill);
			group.rotation.set(.45, -.3, -.4);
			const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
			let visible = true, frame = 0, pointerX = 0, pointerY = 0;
			const resize = () => {
				const { width, height } = element.getBoundingClientRect();
				if (!width || !height) return;
				renderer.setSize(width, height);
				camera.aspect = width / height;
				camera.updateProjectionMatrix();
				renderer.render(scene, camera);
			};
			const pointer = (event) => {
				pointerX = (event.clientX / window.innerWidth - .5) * .6;
				pointerY = (event.clientY / window.innerHeight - .5) * .4;
			};
			const animate = (time) => {
				frame = requestAnimationFrame(animate);
				if (!visible || document.hidden || reduced.matches) return;
				group.rotation.y += (pointerX + time * 6e-5 - group.rotation.y) * .025;
				group.rotation.x += (.45 + pointerY - group.rotation.x) * .035;
				renderer.render(scene, camera);
			};
			const observer = new IntersectionObserver(([entry]) => {
				visible = entry?.isIntersecting ?? false;
			});
			observer.observe(element);
			const resizeObserver = new ResizeObserver(resize);
			resizeObserver.observe(element);
			window.addEventListener("pointermove", pointer, { passive: true });
			resize();
			frame = requestAnimationFrame(animate);
			cleanup = () => {
				cancelAnimationFrame(frame);
				observer.disconnect();
				resizeObserver.disconnect();
				window.removeEventListener("pointermove", pointer);
				geometry.dispose();
				material.dispose();
				edgesGeometry.dispose();
				edgesMaterial.dispose();
				renderer.dispose();
				renderer.domElement.remove();
			};
		}).catch(() => {});
		return () => {
			disposed = true;
			cleanup();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "installation",
		ref: host,
		role: "img",
		"aria-label": "An angular, interconnected digital sculpture, responding to your movement",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "installation-fallback",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
			]
		})
	});
}
function MotionSystem() {
	const cursor = (0, import_react.useRef)(null);
	const progress = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
		const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("is-visible");
				observer.unobserve(entry.target);
			}
		}), { threshold: .12 });
		document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
		const move = (e) => {
			if (!cursor.current || e.pointerType !== "mouse" || reduced.matches) return;
			cursor.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
			cursor.current.classList.add("cursor-visible");
			const target = e.target instanceof Element ? e.target.closest("a,button") : null;
			cursor.current.classList.toggle("cursor-active", Boolean(target));
		};
		const scroll = () => {
			const height = document.documentElement.scrollHeight - window.innerHeight;
			if (progress.current) progress.current.style.transform = `scaleX(${height > 0 ? window.scrollY / height : 0})`;
		};
		window.addEventListener("pointermove", move, { passive: true });
		window.addEventListener("scroll", scroll, { passive: true });
		scroll();
		return () => {
			observer.disconnect();
			window.removeEventListener("pointermove", move);
			window.removeEventListener("scroll", scroll);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "reading-progress",
		ref: progress
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "system-cursor",
		ref: cursor,
		"aria-hidden": "true"
	})] });
}
function SelectedWork() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "work",
		className: "work-section section-shell",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-label",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01 / SELECTED WORK" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "REAL PROBLEMS. WORKING PRODUCTS." })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-title-row reveal",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
					"Built to make",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: "a difference."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"A selection of web, mobile and AI",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"products. From idea to deployment."
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "project-editorial",
				children: projects.map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: `project-feature project-${i} reveal`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/work/$slug",
						params: { slug: project.slug },
						className: "project-image-link",
						"aria-label": `View ${project.title} case study`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "project-image-frame",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: project.image,
									alt: project.alt,
									loading: "lazy",
									width: "1536",
									height: "768"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "image-open",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "project-index",
									children: ["PROJECT / ", project.number]
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "project-caption",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: project.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/work/$slug",
								params: { slug: project.slug },
								children: project.title
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: project.short })
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/work/$slug",
							params: { slug: project.slug },
							className: "case-link",
							"aria-label": `Read ${project.title} case study`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 24 })
						})]
					})]
				}, project.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "more-work",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "MORE EXPLORATIONS"
				}), otherWork.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: item.url,
					target: "_blank",
					rel: "noopener noreferrer",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.title }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "more-category",
							children: item.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 18 })
					]
				}, item.title))]
			})
		]
	});
}
function SystemMap() {
	const [active, setActive] = (0, import_react.useState)(2);
	const stage = stages[active];
	if (!stage) return null;
	const handleKeys = (event) => {
		let next = active;
		if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (active + 1) % stages.length;
		else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (active - 1 + stages.length) % stages.length;
		else if (event.key === "Home") next = 0;
		else if (event.key === "End") next = stages.length - 1;
		else return;
		event.preventDefault();
		setActive(next);
		document.getElementById(`stage-${next}`)?.focus();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "system",
		className: "system-section section-shell",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-label",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "03 / THE SYSTEM" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "FROM FIRST PRINCIPLES TO PRODUCTION" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-title-row reveal",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
					"Good products.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: "Connected thinking."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Not just what I build.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"How I bring it all together."
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "system-nodes",
				role: "tablist",
				"aria-label": "Engineering stages",
				onKeyDown: handleKeys,
				children: stages.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "node-wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "editorial",
						className: `system-node ${active === index ? "node-selected" : ""}`,
						role: "tab",
						tabIndex: active === index ? 0 : -1,
						"aria-selected": active === index,
						"aria-controls": "stage-details",
						id: `stage-${index}`,
						onClick: () => setActive(index),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "node-number",
								children: ["0", index + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 16 })
						]
					}), index < 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						className: "node-arrow",
						size: 18
					})]
				}, item.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "system-detail",
				id: "stage-details",
				role: "tabpanel",
				"aria-labelledby": `stage-${active}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow text-primary",
						children: stage.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: stage.heading }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: stage.description })
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "system-evidence",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "TOOLS & PRINCIPLES"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: stage.tools }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "IN PRACTICE"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: stage.example })
					]
				})]
			}, active)
		]
	});
}
var skillCategories = [
	{
		code: "01",
		tag: "MOBILE & WEB",
		title: "Frontend & Mobile Ecosystem",
		skills: [
			"React Native",
			"Expo SDK & Router",
			"TypeScript",
			"React",
			"Next.js",
			"Shopify Skia (GPU)",
			"NativeWind / Tailwind",
			"Kotlin (Android)",
			"Reanimated"
		]
	},
	{
		code: "02",
		tag: "BACKEND & APIS",
		title: "Backend & Systems Architecture",
		skills: [
			"Python",
			"FastAPI",
			"Node.js",
			"Express.js",
			"RESTful APIs",
			"WebSockets",
			"GraphQL",
			"Edge Functions"
		]
	},
	{
		code: "03",
		tag: "DATA & CLOUD",
		title: "Data, Cloud & Security",
		skills: [
			"PostgreSQL",
			"Supabase & RLS",
			"MongoDB",
			"Firebase",
			"Docker",
			"Git / GitHub Actions",
			"In-App Purchases (IAP)",
			"SecureStore / JWT"
		]
	},
	{
		code: "04",
		tag: "AI & INTELLIGENCE",
		title: "Applied AI & LLM Systems",
		skills: [
			"Google Gemini API",
			"LangChain",
			"RAG Architectures",
			"Vector Search (FAISS)",
			"Context Embeddings",
			"Prompt Engineering",
			"Intelligent Chatbots"
		]
	}
];
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionSystem, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { home: true }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "hero",
					"aria-labelledby": "hero-name",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-topline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "status-square" }), "INDEPENDENT THINKING. CONNECTED SYSTEMS."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "BASED IN DUBAI, UAE / 25.2048° N, 55.2708° E" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "hero-title",
							id: "hero-name",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "name-line",
								children: ["ASIF ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "name-cross",
									"aria-hidden": "true",
									children: "✳"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "surname outline-name",
								children: "YOUSAF"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Installation, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-subtitle",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Full-Stack Developer." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Engineering ideas into real products.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Across web, mobile & applied AI."
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hero-actions",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "studio",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#work",
										children: ["Explore selected work ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "text-action",
									href: `mailto:${profile.email}`,
									children: ["Get in touch ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 15 })]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "scene-annotation",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"SYSTEM_001 / INTERCONNECTED",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"IDEA → FORM → FUNCTION"
							] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-bottom",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#work",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { size: 15 }), "SCROLL TO EXPLORE"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "hero-note",
								children: [
									"CREATIVE BY INSTINCT.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"ENGINEERED WITH INTENT."
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "discipline-strip",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CREATIVE DEVELOPMENT" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "FULL-STACK ENGINEERING" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "APPLIED AI" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "↗" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "IDEAS → REALITY" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectedWork, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "about",
					className: "about-section section-shell",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-label",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02 / BEHIND THE SYSTEM" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "THE PERSON. THE PRACTICE." })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "about-content",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "about-portrait reveal",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/profile.jpg",
								alt: "Asif Yousaf",
								width: "400",
								height: "400",
								loading: "lazy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "portrait-caption",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ASIF YOUSAF" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "DUBAI, UAE ↗" })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "about-text reveal",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
									"A creative mind.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"An engineering",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary",
										children: "way of thinking."
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I’m Asif, a full-stack developer building web, mobile and AI-integrated applications. I connect carefully considered interfaces to the systems that make them work." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "From high-performance cross-platform marketplaces with GPU vector visualizers to intelligent customer support assistants and commercial fleet booking platforms, my focus is practical: make complex things useful, and bring them all the way to production." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "about-capabilities",
									children: skillCategories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "skill-group",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "skill-group-header",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "skill-group-title",
												children: cat.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "skill-group-code",
												children: [
													cat.code,
													" / ",
													cat.tag
												]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "skill-pills",
											children: cat.skills.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "skill-pill",
												children: s
											}, s))
										})]
									}, cat.title))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "about-credentials",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "credentials-list",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "credential-card",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "credential-badge",
												children: "EDUCATION"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "credential-body",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "BSc (Hons) Creative Computing" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bath Spa University · Dubai, UAE" })]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "credential-card",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "credential-badge",
												children: "LOCATION"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "credential-body",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Dubai, United Arab Emirates" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Available for Full-Stack & Mobile Roles" })]
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										className: "resume-download-btn",
										href: "/Asif-CV.pdf",
										target: "_blank",
										rel: "noopener noreferrer",
										children: ["Download Full Résumé / CV ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })]
									})]
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SystemMap, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] })
		]
	});
}
//#endregion
export { Index as component };
