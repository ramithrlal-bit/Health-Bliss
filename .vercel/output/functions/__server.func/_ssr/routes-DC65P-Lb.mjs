import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DC65P-Lb.js
var import_jsx_runtime = require_jsx_runtime();
var hero_default = "/assets/hero-ZS7OrEdq.jpg";
var calm_default = "/assets/calm-sjSHV-MI.jpg";
var PHONE = "+91 82697 99448";
var TEL = "tel:+918269799448";
var professionals = [
	"Psychologist",
	"Counselor",
	"Ayurvedic guider",
	"Meditation guider",
	"Yoga expert",
	"Fitness trainer",
	"Life coach",
	"Spiritual guider",
	"Dietitian",
	"Caring listener"
];
var services = [
	{
		title: "Psychologist",
		body: "For every mental state — difficult or good. You can also call simply because you want more happiness in your life.",
		list: [
			"Anxiety disorders",
			"Bipolar disorder",
			"Depression",
			"Dissociative disorders",
			"ADHD",
			"Post-traumatic stress disorder",
			"Schizophrenia",
			"Obsessive-compulsive disorder",
			"Personality disorders",
			"Impulse control & conduct disorders",
			"Substance use & addictive disorders",
			"Trauma- and stressor-related disorders"
		]
	},
	{
		title: "Relationship issues",
		body: "Relationships grow complex when we lose sight of how society, relationship and nature interconnect. We work through it with logic, universally applicable facts, the science of relationship and simplicity."
	},
	{
		title: "Cleaning subconscious negativity",
		body: "The negativity that quietly works on you without your knowing. A clear, logical solution is available for it."
	},
	{
		title: "Ayurvedic treatment",
		body: "All diseases approached through Ayurveda and naturopathy.",
		list: [
			"Asthma",
			"Arthritis",
			"Digestive problems",
			"Eczema",
			"High blood pressure",
			"Sugar",
			"Migraine"
		]
	},
	{
		title: "Counseling — no appointment needed",
		body: "A rare offering: whenever you feel like it, call a counsellor, psychologist, doctor or health professional directly, with no prior appointment."
	},
	{
		title: "Fitness, weight loss, food & cooking",
		body: "Everything around fitness, weight loss, nutrition, diet plans, healthy eating, food and cooking."
	},
	{
		title: "Feeling lonely",
		body: "Momentarily lonely, temporarily lonely, or living alone for good — you can call in any sense of the word."
	},
	{
		title: "Just talk",
		body: "Most people simply need a good, positive person to talk to — freely, openly, without judgement. You just want a loving and caring listener."
	},
	{
		title: "Scientific spirituality",
		body: "Understood scientifically, spirituality becomes a power station of positivity. Logical help is available through that process."
	},
	{
		title: "Synchronize with nature",
		body: "The most fundamental fact: the more natural you are, the happier you will be. Effortless synchronisation with nature, explained with logic and science."
	}
];
var peaceScale = [
	{
		range: "10 – 8",
		result: "Your body becomes perfect"
	},
	{
		range: "7 – 5",
		result: "Your mind becomes fit"
	},
	{
		range: "4 – 2",
		result: "Your emotions rest in bliss"
	},
	{
		range: "1",
		result: "Enlightenment, bliss, synchrony with nature"
	}
];
function CallButton({ label = "Call now" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: TEL,
		className: "inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold tracking-wide text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5",
		children: [
			label,
			" · ",
			PHONE
		]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between px-5 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "font-display text-lg tracking-tight text-foreground",
							children: ["Health ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "Bliss"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden gap-7 text-sm text-muted-foreground md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#about",
									className: "transition-colors hover:text-primary",
									children: "About"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#services",
									className: "transition-colors hover:text-primary",
									children: "Services"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#meditation",
									className: "transition-colors hover:text-primary",
									children: "Meditation"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contact",
									className: "transition-colors hover:text-primary",
									children: "Contact"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: TEL,
							className: "rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5",
							children: "Call now"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "top",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "relative isolate overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_default,
								alt: "Mist rising over a still lake at sunrise",
								width: 1920,
								height: 1088,
								className: "absolute inset-0 h-full w-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-background/72" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative mx-auto max-w-4xl px-5 py-28 text-center md:py-40",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "animate-rise text-xs uppercase tracking-[0.35em] text-primary",
										children: "The Complete Wisdom"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "animate-rise mt-6 font-display text-4xl leading-tight text-foreground md:text-6xl",
										children: "Health Bliss"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "animate-rise mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg",
										children: "Meditation expert, doctor, psychologist and counsellor — instantly available on call, for every kind of health solution."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-10 flex flex-wrap items-center justify-center gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallButton, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#services",
											className: "rounded-full border border-border bg-card px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary",
											children: "Explore services"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 text-xs tracking-wide text-muted-foreground",
										children: "Male & female counsellors · Hindi & English · Online & on-site visits"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "border-y border-border bg-secondary/50",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:grid-cols-3",
							children: [
								["Open daily", "9 am – 11 pm (emergencies anytime)"],
								["No appointment needed", "Instant call, or traditional booking"],
								["Payments", "UPI and PayPal accepted"]
							].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center sm:text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-lg text-foreground",
									children: k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: v
								})]
							}, k))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "about",
						className: "mx-auto max-w-6xl px-5 py-24",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid items-center gap-14 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.3em] text-primary",
									children: "About us"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 font-display text-3xl leading-snug text-foreground md:text-4xl",
									children: "One call away from someone who truly listens."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 leading-relaxed text-muted-foreground",
									children: "Doctor, meditation expert, psychologist, personal coach, spoon-feeding counsellor and more — instantly available on call for your every health solution. Both options are open to you: instant call treatment, or traditional appointment-based treatment."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8 flex flex-wrap gap-2",
									children: professionals.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-border bg-card px-4 py-1.5 text-xs text-secondary-foreground",
										children: p
									}, p))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
									className: "mt-10 rounded-2xl border-l-4 border-accent bg-card p-6 shadow-[var(--shadow-soft)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "leading-relaxed text-foreground",
										children: "90% जो बातें बचपन में बताई गई हैं वह अवैज्ञानिक, इललॉजिकल, अप्राकृतिक हैं, जो बहुत ज्यादा अंदर अवचेतन में जाकर लगभग सारी बीमारियां, समस्याएं पैदा करती हैं।"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 font-display text-lg text-primary",
										children: "उपाय — ध्यान. कॉल"
									})]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 -z-10 rounded-[3rem] bg-[image:var(--gradient-calm)] animate-breathe" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: calm_default,
									alt: "Balanced stones resting in still water",
									width: 1200,
									height: 900,
									loading: "lazy",
									className: "rounded-[2rem] object-cover shadow-[var(--shadow-soft)]"
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "services",
						className: "border-y border-border bg-secondary/40 py-24",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.3em] text-primary",
									children: "Services"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 max-w-2xl font-display text-3xl leading-snug text-foreground md:text-4xl",
									children: "Care for the mind, the body and everything quietly in between."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
									children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-[var(--shadow-soft)]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-xl text-foreground",
												children: s.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-sm leading-relaxed text-muted-foreground",
												children: s.body
											}),
											s.list && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "mt-5 flex flex-wrap gap-1.5",
												children: s.list.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
													className: "rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground",
													children: i
												}, i))
											})
										]
									}, s.title))
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "meditation",
						className: "mx-auto max-w-6xl px-5 py-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-14 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.3em] text-primary",
									children: "Meditation"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 font-display text-3xl leading-snug text-foreground md:text-4xl",
									children: "Meditation brings peace."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 leading-relaxed text-muted-foreground",
									children: "Imagine peace as a scale from 10 to 1. As you move down the scale, something different in you settles. The simplest and most effective ways of meditation and peace are available here."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallButton, { label: "Start with a call" })
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "space-y-4",
								children: peaceScale.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-5 rounded-2xl border border-border bg-card p-5",
									style: { marginLeft: `${i * 12}px` },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-2xl text-primary",
										children: p.range
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-foreground",
										children: p.result
									})]
								}, p.range))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-16 rounded-2xl border border-border bg-card p-8 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl text-foreground",
									children: "Bliss beyond your thinking"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted-foreground",
									children: "Listen to your favourite topic in the discourses section and let peace arrive naturally."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex flex-wrap justify-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://oshoworld.com/discourses/",
										target: "_blank",
										rel: "noreferrer",
										className: "rounded-full border border-border px-6 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary",
										children: "Discourses"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://www.youtube.com/@Helping.Psychologist.Doctor/videos",
										target: "_blank",
										rel: "noreferrer",
										className: "rounded-full border border-border px-6 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary",
										children: "YouTube — Dr Khanna, Beyond Psychology"
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "contact",
						className: "border-t border-border bg-secondary/50 py-24",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.3em] text-primary",
									children: "Contact"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 font-display text-3xl text-foreground md:text-4xl",
									children: "Whenever it feels heavy, call."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-12 grid gap-6 md:grid-cols-3",
									children: [
										["Working hours", "All days, 9 am to 11 pm. In an emergency you can call anytime."],
										["How we meet", "Online sessions and on-site client visits are both available."],
										["Languages", "Conversations in Hindi and English."],
										["Payments & donation", "PayPal and UPI both accepted."],
										["Counsellors", "Male and female counsellors available."],
										["Booking", "Call instantly, or take a traditional appointment."]
									].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl border border-border bg-card p-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-lg text-foreground",
											children: k
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm leading-relaxed text-muted-foreground",
											children: v
										})]
									}, k))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-12 rounded-[2rem] bg-primary p-10 text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-[0.3em] text-primary-foreground/70",
										children: "Call / UPI"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: TEL,
										className: "mt-4 block font-display text-3xl text-primary-foreground md:text-5xl",
										children: PHONE
									})]
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "mx-auto max-w-6xl px-5 py-10 text-center text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Health Bliss — The Complete Wisdom." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2",
					children: "Information here is guidance and support, not a substitute for emergency medical care."
				})]
			})
		]
	});
}
//#endregion
export { Index as component };
