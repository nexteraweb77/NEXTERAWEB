import { DeferredGoogleMap } from "@/components/DeferredGoogleMap";
import { HeroLogoMatrixAccent } from "@/components/HeroLogoMatrixAccent";
import { HomeReturnLink } from "@/components/HomeReturnLink";
import { Reveal } from "@/components/Reveal";
import { ScrollParallaxLayer } from "@/components/ScrollParallaxLayer";
import { INSTAGRAM_PROFILE_URL } from "@/lib/social-urls";
import { Inter, Montserrat } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

/** Hero + secțiuni: doar greutățile folosite — mai puține fișiere font la încărcare (LCP pe mobil). */
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "500", "600", "700"],
});

const WHATSAPP_CHAT_URL = "/whatsapp";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-black text-zinc-100">
      <main className="pt-[calc(4rem+env(safe-area-inset-top,0px))]">
        <section className="relative overflow-x-clip overflow-y-visible pb-10 max-sm:pb-6 sm:pb-16 lg:pb-20">
          <ScrollParallaxLayer
            className="pointer-events-none absolute inset-0"
            multiplier={0.038}
          >
            <div className="absolute -top-48 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-400/[0.36] blur-[92px]" />
            <div className="absolute -bottom-56 -left-56 h-[min(100vw,640px)] w-[min(100vw,640px)] max-w-[140%] rounded-full bg-emerald-300/[0.20] blur-[104px] sm:-bottom-64 sm:-left-64" />
            <div
              className="absolute inset-x-0 bottom-0 h-[min(48vh,420px)] bg-gradient-to-t from-black/70 via-black/20 to-transparent"
              aria-hidden
            />
          </ScrollParallaxLayer>

          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-3 pb-4 pt-10 max-sm:pt-8 min-[430px]:px-5 sm:gap-10 sm:px-6 sm:pb-5 sm:pt-14 lg:pb-5 lg:pt-20">
            <Reveal className="relative" instant>
              <div className="max-sm:-translate-y-2 translate-y-0 sm:translate-y-0 sm:-translate-y-2.5">
              <div className="mx-auto flex w-full max-w-[min(100%,56rem)] flex-col items-center gap-7 text-center max-[360px]:px-0.5 max-sm:gap-5 sm:gap-8 lg:grid lg:max-w-5xl lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] lg:items-start lg:gap-x-14 lg:gap-y-6 lg:text-left xl:gap-x-16">
                <div className="relative z-10 flex w-full max-w-[min(100%,20rem)] flex-col items-center gap-3 max-sm:pb-0 sm:max-w-sm sm:gap-3.5 lg:w-full lg:max-w-full lg:min-w-0 lg:items-start lg:gap-4">
                  <div className="relative isolate mx-auto w-fit shrink-0 lg:mx-0">
                    <HeroLogoMatrixAccent />
                    <Image
                      src="/logo-hero.webp"
                      alt="NEXTERAWEB logo"
                      width={224}
                      height={224}
                      sizes="(max-width: 640px) 112px, (max-width: 1024px) 140px, 160px"
                      className="hero-logo-mark relative z-10 h-[6.75rem] w-[6.75rem] shrink-0 object-contain min-[400px]:h-[7.75rem] min-[400px]:w-[7.75rem] sm:h-[8.75rem] sm:w-[8.75rem] lg:h-40 lg:w-40"
                      fetchPriority="high"
                      priority
                      unoptimized
                    />
                  </div>
                  <div
                    className={`${montserrat.className} w-full text-balance text-center text-[clamp(1.86rem,8.2vw,3.05rem)] font-bold uppercase leading-[1.12] tracking-[0.08em] min-[400px]:tracking-[0.11em] sm:leading-none sm:text-[clamp(1.62rem,3.55vw,2.48rem)] sm:tracking-[0.14em] lg:text-left lg:text-[2.08rem] lg:tracking-[0.18em] xl:text-[2.38rem]`}
                  >
                    <span className="relative inline-block pr-[0.42em] sm:pr-[0.4em] lg:pr-[0.38em]">
                      <span className="tagline-neon-shimmer">NEXTERAWEB</span>
                      <span className="tagline-neon-shimmer pointer-events-none absolute right-[-0.02em] sm:right-[-0.03em] lg:right-[-0.04em] top-0 -translate-y-[40%] sm:-translate-y-[42%] lg:-translate-y-[45%] text-[0.46em] sm:text-[0.44em] lg:text-[0.42em] font-semibold tracking-normal opacity-80">
                        ™
                      </span>
                    </span>
                  </div>
                </div>

                <div className="relative z-0 flex w-full min-w-0 max-w-[min(100%,22rem)] flex-col items-center gap-2.5 max-sm:mt-0 min-[400px]:max-w-[min(100%,24rem)] min-[430px]:max-w-[min(100%,26rem)] sm:mt-0 sm:max-w-[40rem] sm:gap-4 lg:max-w-none lg:items-start lg:gap-5 lg:rounded-2xl lg:border lg:border-white/[0.09] lg:bg-gradient-to-br lg:from-white/[0.04] lg:via-transparent lg:to-emerald-500/[0.055] lg:p-8 lg:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_80px_rgba(0,0,0,0.35)] lg:backdrop-blur-md">
                  <p
                    className={`${inter.className} text-pretty text-balance text-[clamp(1.22rem,4.1vw,1.58rem)] font-bold leading-snug tracking-[-0.018em] text-zinc-100 min-[400px]:text-[clamp(1.24rem,3.85vw,1.62rem)] min-[430px]:text-[1.32rem] min-[430px]:leading-snug sm:text-xl sm:font-semibold sm:leading-snug md:text-[1.35rem] md:leading-snug lg:text-left lg:max-w-xl lg:text-[1.24rem] lg:font-semibold lg:leading-relaxed lg:text-zinc-100/95`}
                    translate="no"
                  >
                    Dacă site-ul tău nu îți aduce clienți, ai doar o pagină de{" "}
                    <span className="whitespace-nowrap">internet!</span>
                  </p>
                  <span
                    className="block h-px w-12 shrink-0 rounded-full bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent sm:w-14 lg:hidden"
                    aria-hidden
                  />
                  <h1
                    className={`${montserrat.className} text-pretty text-balance text-[clamp(1.42rem,4.1vw,1.72rem)] font-light leading-[1.22] tracking-[-0.012em] text-white min-[430px]:text-[clamp(1.5rem,3.6vw,1.82rem)] min-[430px]:leading-snug sm:text-[clamp(1.55rem,3.2vw,1.88rem)] sm:leading-snug md:text-[clamp(1.75rem,2.6vw,2.05rem)] md:leading-tight lg:max-w-xl lg:text-left lg:text-[clamp(1.58rem,2.1vw,2.08rem)] lg:leading-[1.2] lg:tracking-[-0.02em]`}
                    translate="no"
                  >
                    Construiesc cărți de vizită digitale care emană autoritate și
                    stil
                  </h1>
                </div>
              </div>
              <p className="mx-auto mt-2 max-w-xl text-pretty text-center text-base leading-7 text-zinc-300 max-sm:mt-2 max-sm:leading-snug sm:mt-5 sm:text-lg sm:leading-8">
                Design exclusivist, adaptat impecabil pe orice ecran. Strategie
                pură și execuție de top,{" "}
                <span className="text-emerald-300/85">lucrezi direct cu mine</span>
                {" "}
                —{" "}
                <span className="text-white">
                  fără intermediari, fără bătăi de cap
                </span>
              </p>
              <div className="mx-auto mt-4 flex w-full max-w-xl flex-col gap-2.5 pb-[env(safe-area-inset-bottom,0px)] max-sm:mt-4 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3 sm:pb-0">
                <a
                  href="#contact"
                  className="inline-flex min-h-12 w-full max-w-full items-center justify-center rounded-full bg-emerald-500/90 px-4 py-2.5 text-center text-sm font-semibold leading-snug text-black text-pretty shadow-[0_0_0_1px_rgba(16,185,129,0.35),0_16px_50px_rgba(16,185,129,0.18)] transition duration-300 ease-out [text-wrap:balance] hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-[0_0_0_1px_rgba(16,185,129,0.45),0_22px_55px_rgba(16,185,129,0.22)] active:translate-y-0 sm:min-h-14 sm:w-auto sm:min-w-[12.5rem] sm:px-6 sm:leading-normal"
                >
                  Vreau mai mulți clienți
                </a>
                <a
                  href="#portofoliu"
                  className="btn-glass-outline inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md sm:w-auto sm:min-w-[11rem]"
                >
                  Vezi portofoliu
                </a>
                <a
                  href={WHATSAPP_CHAT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-semibold text-black shadow-[0_0_0_1px_rgba(37,211,102,0.45),0_16px_50px_rgba(37,211,102,0.18)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#1ebe57] hover:shadow-[0_0_0_1px_rgba(37,211,102,0.55),0_22px_55px_rgba(37,211,102,0.22)] active:translate-y-0 sm:w-auto sm:min-w-[11rem]"
                >
                  <svg
                    className="h-4 w-4 shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href={INSTAGRAM_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#515bd4] px-6 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(221,42,123,0.25),0_16px_50px_rgba(221,42,123,0.12)] transition duration-300 ease-out hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_0_0_1px_rgba(221,42,123,0.35),0_22px_55px_rgba(221,42,123,0.18)] active:translate-y-0 sm:w-auto sm:min-w-[11rem]"
                >
                  Instagram
                </a>
              </div>
              </div>

              <div
                id="servicii"
                className="scroll-anchor mt-10 w-full max-w-xl max-sm:mt-12 sm:mt-11"
                style={{ contentVisibility: "auto" }}
              >
                <div
                  className={`${montserrat.className} mt-6 text-left text-[1.05rem] font-light leading-[1.72] tracking-[-0.01em] text-zinc-100 sm:text-lg sm:leading-[1.75]`}
                >
                  Nu construiesc doar simple site-uri, ci experiențe digitale
                  gândite să aducă{" "}
                  <strong className="font-semibold text-white">
                    rezultate reale
                  </strong>{" "}
                  afacerii{" "}
                  <span className="whitespace-nowrap">tale!</span>
                </div>

                <h2 className="mt-6 text-left text-3xl font-semibold leading-snug tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Serviciile mele
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                  {(
                    [
                      {
                        title: "💻 Site-uri de prezentare moderne",
                        lead: "Construiesc experiențe digitale care inspiră încredere și generează rezultate",
                        bullets: [
                          "✔️ Design profesional și responsive",
                          "✔️ Optimizate pentru mobil și viteză",
                        ],
                      },
                      {
                        title: "🛒 Magazine Online (E-commerce)",
                        lead: "Transformă-ți produsele într-o experiență de shopping fluidă și securizată",
                        bullets: [
                          "✔️ Sistem de produse și coș de cumpărături",
                          "✔️ Integrare plăți online (Card/Ramburs)",
                        ],
                      },
                      {
                        title: "📅 Sisteme de programări și rezervări",
                        lead: "Automatizează-ți agenda. Lasă site-ul să lucreze pentru tine 24/7",
                        bullets: [
                          "✔️ Rezervări online pentru servicii sau evenimente",
                          "✔️ Calendar și formulare personalizate",
                        ],
                      },
                      {
                        title: "⚙️ Automatizări pentru business",
                        lead: "Eficiență digitală. Simplifică modul în care comunici cu clienții tăi",
                        bullets: [
                          "✔️ Răspunsuri automate inteligente",
                          "✔️ Integrare WhatsApp Business",
                        ],
                      },
                      {
                        title: "📈 Optimizare și creștere conversii",
                        lead: "Design strategic. Site-uri construite cu un singur scop: să vândă",
                        bullets: [
                          "✔️ Structură clară și eficientă",
                          "✔️ Tehnici de psihologie vizuală pentru atragerea clienților.",
                        ],
                      },
                      {
                        title: "🎨 Identitate vizuală & rebranding",
                        lead: "Esența afacerii tale transpusă în design. Creez branduri care inspiră încredere",
                        bullets: [
                          "✔️ Logo vectorial minimalist",
                          "✔️ Coerență vizuală totală",
                          "✔️ Detalii fine (Favicon & Icons)",
                        ],
                      },
                    ] as const
                  ).map((c) => (
                    <details
                      key={c.title}
                      className={[
                        "group/service glass-panel interactive-service-card overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 ease-out",
                        "hover:border-white/[0.14] hover:shadow-[0_12px_40px_rgba(0,0,0,0.28)]",
                        "open:border-emerald-400/35 open:bg-white/[0.03] open:shadow-[0_16px_48px_rgba(0,0,0,0.35),0_0_0_1px_rgba(16,185,129,0.18)]",
                        "open:[&_.service-chevron]:rotate-180",
                      ].join(" ")}
                    >
                      <summary className="list-none cursor-pointer select-none px-5 py-5 sm:px-6 sm:py-6 [&::-webkit-details-marker]:hidden">
                        <div className="flex gap-4 sm:items-start sm:gap-5">
                          <div className="relative mt-1 shrink-0 sm:mt-1.5">
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition group-hover/service:ring-emerald-400/35 group-open/service:ring-emerald-400/40">
                              <span className="relative inline-flex h-3 w-3 items-center justify-center">
                                <span className="absolute hidden h-full w-full animate-ping rounded-full bg-emerald-400/35 sm:inline-flex" />
                                <span className="nex-online-dot relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_1px_rgba(16,185,129,0.35),0_0_18px_rgba(16,185,129,0.35)] [animation:nex-online-pulse_1.8s_ease-in-out_infinite]" />
                              </span>
                            </span>
                          </div>
                          <div className="flex min-w-0 flex-1 flex-col gap-3">
                            <h3 className="text-left text-sm font-semibold leading-[1.55] tracking-[-0.01em] text-white sm:text-[0.95rem] sm:leading-[1.6]">
                              {c.title}
                            </h3>
                            <div className="flex w-full min-w-0 items-center justify-end gap-2.5">
                              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-400/75 transition group-open/service:text-zinc-500">
                                <span className="inline-block whitespace-nowrap group-open/service:hidden">
                                  Vezi detalii
                                </span>
                                <span className="hidden whitespace-nowrap group-open/service:inline-block">
                                  Restrânge
                                </span>
                              </span>
                              <svg
                                className="service-chevron h-[1.125rem] w-[1.125rem] shrink-0 text-emerald-400/90 transition-transform duration-300 ease-out"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                aria-hidden
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </summary>
                      <div className="border-t border-white/[0.08] bg-black/20 px-5 pb-6 pt-3 backdrop-blur-sm sm:px-6 sm:pb-7">
                        {"lead" in c && c.lead ? (
                          <p
                            className={`${inter.className} text-pretty border-b border-white/[0.07] pb-3 text-[0.9375rem] font-semibold leading-relaxed tracking-[0.01em] text-zinc-100 sm:pb-3.5 sm:text-base sm:leading-[1.65]`}
                          >
                            {c.lead}
                          </p>
                        ) : null}
                        <ul
                          className={`space-y-3 text-sm leading-[1.65] text-zinc-300 sm:text-[0.9375rem] sm:leading-[1.7] ${"lead" in c && c.lead ? "mt-3" : "mt-1"}`}
                        >
                          {c.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    </details>
                  ))}
                </div>

                <div
                  className="mt-5 w-full sm:mt-6"
                  aria-label="Calitate și personalizare"
                >
                  <div className="rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.045] to-white/[0.015] px-5 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06),0_0_0_1px_rgba(252,211,77,0.12),0_0_36px_rgba(245,158,11,0.075),0_0_52px_rgba(251,191,36,0.055)] backdrop-blur-[2px] transition-[border-color,box-shadow] duration-500 ease-out motion-reduce:transition-none motion-reduce:hover:shadow-[0_24px_80px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06),0_0_0_1px_rgba(252,211,77,0.12),0_0_36px_rgba(245,158,11,0.075),0_0_52px_rgba(251,191,36,0.055)] motion-reduce:hover:border-white/[0.09] hover:border-amber-200/22 hover:shadow-[0_28px_90px_rgba(0,0,0,0.44),inset_0_1px_0_rgba(255,255,255,0.08),0_0_0_1px_rgba(253,224,71,0.16),0_0_44px_rgba(245,158,11,0.11),0_0_64px_rgba(251,191,36,0.085),0_0_28px_rgba(16,185,129,0.055)] sm:px-8 sm:py-10">
                    <blockquote className="text-center">
                      <p
                        className={`${inter.className} text-pretty text-[1.0625rem] font-normal leading-[1.72] tracking-normal text-zinc-200 antialiased sm:text-[1.125rem] sm:leading-[1.75]`}
                      >
                        Indiferent dacă ai nevoie de o soluție construită integral
                        de la zero sau de adaptarea unei platforme existente,
                        rezultatul rămâne același: un site modelat perfect după
                        nevoile afacerii tale, fără compromisuri tehnice sau
                        vizuale
                      </p>
                    </blockquote>
                  </div>
                </div>

                <div className="mt-6 w-full space-y-5 sm:mt-7 sm:space-y-5">
                  <div id="portofoliu" className="scroll-anchor">
                    <div className="group relative overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-white/[0.07] via-white/[0.02] to-transparent p-5 shadow-[0_20px_60px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.09)] backdrop-blur-md transition duration-500 hover:border-emerald-400/25 hover:shadow-[0_28px_80px_rgba(0,0,0,0.45),0_0_45px_rgba(16,185,129,0.08)] sm:p-6 lg:p-7">
                    <div className="matrix-rain" aria-hidden />
                      <div
                        className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-emerald-500/[0.14] blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                        aria-hidden
                      />
                      <div
                        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/35 to-transparent"
                        aria-hidden
                      />
                      <div
                        className="pointer-events-none absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent"
                        aria-hidden
                      />
                      <div className="relative flex flex-col gap-5 max-sm:flex-row max-sm:items-center max-sm:justify-between max-sm:gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                        <h2
                          className={`${montserrat.className} min-w-0 text-left text-[1.35rem] font-semibold leading-tight tracking-[-0.02em] text-transparent sm:text-2xl lg:text-[1.8rem] bg-gradient-to-br from-white via-zinc-100 to-zinc-500 bg-clip-text`}
                        >
                          Proiecte care definesc standarde
                        </h2>
                        <HomeReturnLink
                          href="/portofoliu"
                          returnAnchorId="portofoliu"
                          className="group/portfolio-cta inline-flex h-12 shrink-0 items-center justify-center gap-2 self-start rounded-full border border-emerald-400/35 bg-gradient-to-r from-emerald-500/20 via-emerald-500/10 to-teal-500/10 px-7 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(16,185,129,0.2),0_10px_36px_rgba(16,185,129,0.15)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-emerald-400/55 hover:from-emerald-500/30 hover:via-emerald-500/15 hover:shadow-[0_14px_44px_rgba(16,185,129,0.22)] active:translate-y-0 max-sm:self-auto sm:self-center sm:text-base"
                        >
                          Vezi aici
                          <svg
                            className="h-4 w-4 text-emerald-100/90 transition group-hover/portfolio-cta:translate-x-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            aria-hidden
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </HomeReturnLink>
                      </div>
                    </div>
                  </div>

                  <div id="de-ce-lucrezi" className="scroll-anchor mt-5 sm:mt-6">
                    <div className="group/cta-duo relative overflow-hidden rounded-[1.75rem] border border-white/[0.055] bg-gradient-to-br from-white/[0.028] via-white/[0.012] to-transparent shadow-[0_4px_24px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm sm:backdrop-blur-xl transition-[border-color,box-shadow,transform] duration-500 ease-out hover:border-emerald-400/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.28),0_0_0_1px_rgba(16,185,129,0.08),inset_0_1px_0_rgba(255,255,255,0.06)]">
                    <div className="matrix-rain" aria-hidden />
                      <div
                        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/[0.035] blur-[72px] transition-opacity duration-500 group-hover/cta-duo:opacity-90"
                        aria-hidden
                      />
                      <div
                        className="pointer-events-none absolute -bottom-12 -left-12 h-72 w-72 rounded-full bg-teal-400/[0.04] blur-[80px]"
                        aria-hidden
                      />

                      <div className="relative px-5 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
                        <div className="flex flex-col gap-5 max-sm:flex-row max-sm:items-start max-sm:justify-between max-sm:gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
                          <div className="max-w-2xl max-sm:min-w-0 max-sm:flex-1">
                            <h2 className={`${inter.className} text-xl font-medium tracking-[-0.02em] text-zinc-50 sm:text-2xl lg:text-[1.65rem] lg:leading-snug`}>
                              De ce să lucrezi cu mine?
                            </h2>
                          </div>
                          <HomeReturnLink
                            href="/abilitati"
                            returnAnchorId="de-ce-lucrezi"
                            className="group/afla-neon inline-flex h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full border border-emerald-400/35 bg-gradient-to-r from-emerald-500/20 via-emerald-500/10 to-teal-500/10 px-6 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(16,185,129,0.2),0_10px_36px_rgba(16,185,129,0.15)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-emerald-400/55 hover:from-emerald-500/30 hover:via-emerald-500/15 hover:shadow-[0_14px_44px_rgba(16,185,129,0.22)] active:translate-y-0 max-sm:self-auto max-sm:mt-0.5 lg:self-center"
                          >
                            Află aici
                            <svg
                              className="h-4 w-4 text-emerald-100/90 transition group-hover/afla-neon:translate-x-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              aria-hidden
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                              />
                            </svg>
                          </HomeReturnLink>
                        </div>
                      </div>

                      <div
                        id="cum-lucram-cta"
                        className="scroll-anchor relative bg-white/[0.015] px-5 pb-5 pt-6 sm:px-6 sm:pb-6 sm:pt-7 lg:px-8 lg:pb-7 lg:pt-8"
                      >
                        <div
                          className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent sm:inset-x-8"
                          aria-hidden
                        />
                        <div className="flex flex-col gap-5 max-sm:flex-row max-sm:items-start max-sm:justify-between max-sm:gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
                          <div className="max-w-2xl max-sm:min-w-0 max-sm:flex-1">
                            <h2 className={`${inter.className} text-xl font-medium tracking-[-0.02em] text-zinc-50 sm:text-2xl lg:text-[1.65rem] lg:leading-snug`}>
                              Cum lucrăm împreună?
                            </h2>
                          </div>
                          <HomeReturnLink
                            href="/cum-lucram"
                            returnAnchorId="cum-lucram-cta"
                            className="group/afla-neon2 inline-flex h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full border border-emerald-400/35 bg-gradient-to-r from-emerald-500/20 via-emerald-500/10 to-teal-500/10 px-6 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(16,185,129,0.2),0_10px_36px_rgba(16,185,129,0.15)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-emerald-400/55 hover:from-emerald-500/30 hover:via-emerald-500/15 hover:shadow-[0_14px_44px_rgba(16,185,129,0.22)] active:translate-y-0 max-sm:self-auto max-sm:mt-0.5 lg:self-center"
                          >
                            Află aici
                            <svg
                              className="h-4 w-4 text-emerald-100/90 transition group-hover/afla-neon2:translate-x-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              aria-hidden
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                              />
                            </svg>
                          </HomeReturnLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="pachete"
          className="scroll-anchor relative z-10 border-t border-white/[0.06] bg-black"
        >
          <div className="relative z-10 mx-auto max-w-6xl px-4 pt-6 pb-9 sm:px-6 sm:pt-8 sm:pb-10 lg:pt-10 lg:pb-12">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  💎 Pachete și Investiție 💎
                </h2>
                <p className="mt-4 text-sm font-light italic text-zinc-300 sm:text-base">
                  Alege soluția care se potrivește cel mai bine etapei în care se
                  află afacerea ta
                </p>
              </div>
            </Reveal>

            <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3 sm:mt-6">
              <Reveal>
                <details className="group glass-panel border-white/10 p-6 transition hover:border-white/20">
                  <summary className="list-none cursor-pointer select-none">
                    <div className="flex flex-col gap-3">
                      <div className="min-w-0">
                        <div className="text-base font-semibold text-white">
                          🔹 BASIC – Start Online
                        </div>
                        <div className="mt-2 text-sm text-zinc-300">
                          Investiție: de la 250€
                        </div>
                        <div className="mt-2 text-sm text-zinc-300">
                          Ideal pentru prezentarea rapidă a unui serviciu sau
                          proiect personal
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md transition group-open:bg-white/12">
                          Vezi detalii
                          <span className="text-emerald-300 transition group-open:rotate-180">
                            ▾
                          </span>
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-5 space-y-2 text-sm leading-7 text-zinc-300">
                    <div>
                      Site de tip Landing Page (toată informația pe o singură
                      pagină fluidă)
                    </div>
                    <div>
                      Design modern & Responsive: site-ul va arăta perfect pe
                      telefon, tabletă și laptop
                    </div>
                    <div>
                      Structură esențială: Secțiuni dedicate pentru Despre noi,
                      Servicii și Contact
                    </div>
                    <div>
                      Configurare domeniu .ro: Te ajut cu tot procesul de
                      achiziție și setare
                    </div>
                    <div>Livrare rapidă: 2–4 zile lucrătoare</div>
                    <div className="mt-3 flex items-start gap-2 border-t border-white/10 pt-3 text-base font-semibold leading-snug text-emerald-100">
                      <span className="text-xl leading-none text-emerald-300">
                        +
                      </span>
                      <span className="min-w-0 flex-1 text-pretty">
                        10 zile mentenanta{" "}
                        <span className="ml-1 font-medium tracking-[0.08em] text-white/90">
                          pachetul{" "}
                          <span className="font-semibold text-emerald-200/95">
                            PROTECT
                          </span>
                        </span>{" "}
                        + Prima luna-domeniu+hosting{" "}
                        <span className="ml-1 inline-block text-[1.05em] font-extrabold uppercase tracking-[0.06em] text-emerald-100">
                          Gratuite
                        </span>
                      </span>
                    </div>
                  </div>
                </details>
              </Reveal>

              <Reveal delayMs={80}>
                <details className="group glass-panel-accent p-6 transition hover:border-emerald-400/45">
                  <summary className="list-none cursor-pointer select-none">
                    <div className="flex flex-col gap-3">
                      <div className="min-w-0">
                        <div className="text-base font-semibold text-white">
                          🔹 STANDARD – Business Growth (Cel mai popular)
                        </div>
                        <div className="mt-2 text-sm text-zinc-300">
                          Investiție: de la 450€
                        </div>
                        <div className="mt-2 text-sm text-zinc-300">
                          Ideal pentru firme mici și mijlocii care vor o prezență
                          solidă și credibilă
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md transition group-open:bg-white/12">
                          Vezi detalii
                          <span className="text-emerald-300 transition group-open:rotate-180">
                            ▾
                          </span>
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-5 space-y-2 text-sm leading-7 text-zinc-300">
                    <div>
                      Site multi-pagină: Structură completă (Acasă, Servicii,
                      Despre, Blog/Galerie, Contact)
                    </div>
                    <div>
                      SEO de bază inclus: Optimizarea textelor și imaginilor
                      pentru ca Google să te găsească mai ușor
                    </div>
                    <div>
                      Formular de contact inteligent: Clienții îți scriu direct
                      pe e-mail, fără erori
                    </div>
                    <div>
                      Viteză de încărcare optimizată: Un site rapid înseamnă
                      clienți care nu pleacă de pe pagină
                    </div>
                    <div>
                      Securitate SSL: Site protejat și marcat ca „Secure” în
                      browser
                    </div>
                    <div className="mt-3 flex items-start gap-2 border-t border-white/10 pt-3 text-base font-semibold leading-snug text-emerald-100">
                      <span className="text-xl leading-none text-emerald-300">
                        +
                      </span>
                      <span className="min-w-0 flex-1 text-pretty">
                        20 de zile mentenanta{" "}
                        <span className="ml-1 font-medium tracking-[0.08em] text-white/90">
                          pachetul{" "}
                          <span className="font-semibold text-emerald-200/95">
                            GROWTH
                          </span>
                        </span>{" "}
                        + prima luna domeniu+hosting{" "}
                        <span className="ml-1 inline-block text-[1.05em] font-extrabold uppercase tracking-[0.06em] text-emerald-100">
                          Gratuite
                        </span>
                      </span>
                    </div>
                  </div>
                </details>
              </Reveal>

              <Reveal delayMs={140}>
                <details className="group glass-panel border-white/10 p-6 transition hover:border-white/20 lg:border-emerald-400/25 lg:shadow-[0_12px_44px_rgba(0,0,0,0.35),0_0_0_1px_rgba(16,185,129,0.14)]">
                  <summary className="list-none cursor-pointer select-none">
                    <div className="flex flex-col gap-3">
                      <div className="min-w-0">
                        <div className="text-base font-semibold text-white">
                          🔹 PREMIUM – Elite Brand
                        </div>
                        <div className="mt-2 text-sm text-zinc-300">
                          Investiție: de la 750€
                        </div>
                        <div className="mt-2 text-sm text-zinc-300">
                          Soluția completă pentru cei care vor să domine piața și
                          să ofere o experiență de top
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md transition group-open:bg-white/12">
                          Vezi detalii
                          <span className="text-emerald-300 transition group-open:rotate-180">
                            ▾
                          </span>
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-5 space-y-2 text-sm leading-7 text-zinc-300">
                    <div>
                      Design Premium Personalizat: Animații discrete și elemente
                      grafice unice
                    </div>
                    <div>
                      Conversie maximă: Integrare buton WhatsApp (contact
                      instant) și chat live
                    </div>
                    <div>
                      SEO Avansat: Analiza cuvintelor cheie și indexare manuală
                      în Google Search Console
                    </div>
                    <div>
                      Local SEO: Integrare Google Maps și optimizare pentru
                      căutările locale
                    </div>
                    <div>
                      Secțiune Testimoniale: Dovada socială care convinge
                      vizitatorii să devină clienți
                    </div>
                    <div className="mt-3 flex items-start gap-2 border-t border-white/10 pt-3 text-base font-semibold leading-snug text-emerald-100">
                      <span className="text-xl leading-none text-emerald-300">
                        +
                      </span>
                      <span className="min-w-0 flex-1 text-pretty">
                        30 de zile mentenanta{" "}
                        <span className="ml-1 font-medium tracking-[0.08em] text-white/90">
                          pachetul{" "}
                          <span className="font-semibold text-emerald-200/95">
                            PARTNER
                          </span>
                        </span>{" "}
                        + prima luna domeniu+hosting{" "}
                        <span className="ml-1 inline-block text-[1.05em] font-extrabold uppercase tracking-[0.06em] text-emerald-100">
                          Gratuite
                        </span>
                        .
                      </span>
                    </div>
                  </div>
                </details>
              </Reveal>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:mt-7 lg:grid-cols-2">
              <Reveal>
                <details className="group glass-panel !border-amber-300/35 p-6 transition hover:!border-amber-200/50">
                  <summary className="list-none cursor-pointer select-none">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0 flex-1 pr-2">
                        <div className="text-xl font-semibold leading-snug text-white sm:text-2xl">
                          Extra Opțiuni (Upgrade-uri Strategice)
                        </div>
                        <p className="mt-2 text-sm font-normal leading-relaxed text-zinc-400 sm:text-base sm:text-zinc-500">
                          Personalizează-ți proiectul cu funcționalități care
                          accelerează creșterea
                        </p>
                      </div>
                      <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md transition group-open:bg-white/12">
                        Vezi detalii
                        <span className="text-emerald-300 transition group-open:rotate-180">
                          ▾
                        </span>
                      </div>
                    </div>
                  </summary>
                  <div className="mt-6 space-y-8 border-t border-white/10 pt-6">
                    <p className="text-sm font-normal italic leading-relaxed text-zinc-400 sm:text-base sm:text-zinc-500">
                      *Prețuri dinamice, în funcție de amploarea și detaliile
                      proiectului*
                    </p>
                    <div>
                      <h4
                        className={`${montserrat.className} mb-4 text-base font-semibold uppercase tracking-[0.12em] text-white sm:text-lg sm:tracking-[0.1em]`}
                      >
                        Branding &amp; Identitate
                      </h4>
                      <div className="space-y-5">
                        <div>
                          <div className="text-base font-medium text-white">
                            Design Logo Minimalist , favicon,icons{" "}
                            <span className="text-emerald-300/95 tabular-nums whitespace-nowrap">
                              +400€
                            </span>
                          </div>
                          <p className="mt-2 text-base leading-relaxed text-zinc-400">
                            Crearea unei identități vizuale moderne, livrată în
                            format vectorial (pentru web și tipar)
                          </p>
                        </div>
                        <div>
                          <div className="text-base font-medium text-white">
                            Design Premium Extra{" "}
                            <span className="text-emerald-300/95 tabular-nums whitespace-nowrap">
                              +150€
                            </span>
                          </div>
                          <p className="mt-2 text-base leading-relaxed text-zinc-400">
                            Animații avansate, micro-interacțiuni luxury și
                            layout-uri personalizate pagină cu pagină
                          </p>
                        </div>
                        <div>
                          <div className="text-base font-medium text-white">
                            Copywriting Profesional{" "}
                            <span className="text-emerald-300/95 tabular-nums whitespace-nowrap">
                              +200€
                            </span>
                          </div>
                          <p className="mt-2 text-base leading-relaxed text-zinc-400">
                            Scriu textele pentru tine, folosind tehnici de
                            persuasiune care transformă vizitatorii în clienți
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4
                        className={`${montserrat.className} mb-4 text-base font-semibold uppercase tracking-[0.12em] text-white sm:text-lg sm:tracking-[0.1em]`}
                      >
                        Funcționalități Avansate
                      </h4>
                      <div className="space-y-5">
                        <div>
                          <div className="text-base font-medium text-white">
                            Sistem Rezervări / Calendar{" "}
                            <span className="text-emerald-300/95 tabular-nums whitespace-nowrap">
                              +300€
                            </span>
                          </div>
                          <p className="mt-2 text-base leading-relaxed text-zinc-400">
                            Automatizare completă pentru programări, sincronizată
                            cu calendarul tău (Google/Outlook)
                          </p>
                        </div>
                        <div>
                          <div className="text-base font-medium text-white">
                            Formular Contact Avansat{" "}
                            <span className="text-emerald-300/95 tabular-nums whitespace-nowrap">
                              +100€
                            </span>
                          </div>
                          <p className="mt-2 text-base leading-relaxed text-zinc-400">
                            Câmpuri personalizate, logică condiționată și
                            protecție anti-spam de ultimă generație
                          </p>
                        </div>
                        <div>
                          <div className="text-base font-medium text-white">
                            Integrare WhatsApp, Email, Instagram &amp; Maps{" "}
                            <span className="text-emerald-300/95 tabular-nums whitespace-nowrap">
                              +100€
                            </span>
                          </div>
                          <p className="mt-2 text-base leading-relaxed text-zinc-400">
                            Pachet de contact rapid (buton plutitor WhatsApp +
                            hartă interactivă Google)
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4
                        className={`${montserrat.className} mb-4 text-base font-semibold uppercase tracking-[0.12em] text-white sm:text-lg sm:tracking-[0.1em]`}
                      >
                        Performanță &amp; Lansare
                      </h4>
                      <div className="space-y-5">
                        <div>
                          <div className="text-base font-medium text-white">
                            Setup Tehnic Complet{" "}
                            <span className="text-emerald-300/95 tabular-nums whitespace-nowrap">
                              +100€
                            </span>
                          </div>
                          <p className="mt-2 text-base leading-relaxed text-zinc-400">
                            Achiziție domeniu .ro, configurare hosting, email
                            profesional (nume@firma.ro) și certificat SSL
                          </p>
                        </div>
                        <div>
                          <div className="text-base font-medium text-white">
                            SEO Local &amp; Google My Business{" "}
                            <span className="text-emerald-300/95 tabular-nums whitespace-nowrap">
                              +300€
                            </span>
                          </div>
                          <p className="mt-2 text-base leading-relaxed text-zinc-400">
                            Optimizare pentru căutările locale și configurarea
                            profilului Google pentru a apărea pe hartă
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </Reveal>

              <Reveal delayMs={80}>
                <div className="glass-panel flex h-full flex-col justify-center border-white/10 p-6">
                  <Link
                    href="/asigurare-digitala"
                    className="inline-flex min-h-16 w-full items-center justify-center rounded-2xl border border-amber-300/35 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 px-8 py-4 text-center text-lg font-semibold text-black shadow-[0_0_0_1px_rgba(251,191,36,0.35),0_22px_70px_rgba(251,191,36,0.22)] transition hover:brightness-105 sm:text-xl"
                  >
                    Asigurare Digitala
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section
          id="despre"
          className="scroll-anchor relative overflow-hidden border-t border-white/10"
        >
          <ScrollParallaxLayer
            className="pointer-events-none absolute inset-0"
            multiplier={0.022}
          >
            <div className="absolute -top-24 right-[-5%] h-[380px] w-[380px] rounded-full bg-emerald-500/[0.08] blur-3xl" />
            <div className="absolute -bottom-20 left-[-8%] h-[340px] w-[340px] rounded-full bg-teal-400/[0.06] blur-3xl" />
          </ScrollParallaxLayer>

          <div className="relative mx-auto max-w-6xl px-4 py-7 sm:px-6 sm:py-9 lg:py-10">
            <Reveal instant>
              <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/[0.09] bg-gradient-to-b from-white/[0.06] via-black/40 to-black/55 shadow-[0_16px_56px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl">
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(16,185,129,0.09),transparent_50%)]"
                  aria-hidden
                />
                <div className="relative px-5 pb-1 pt-8 text-center sm:px-10 sm:pt-10 lg:px-12 lg:pt-11">
                  <p
                    className={`${montserrat.className} text-xs font-semibold uppercase tracking-[0.16em] text-emerald-400/95 sm:text-sm sm:tracking-[0.18em]`}
                  >
                    Despre mine
                  </p>
                  <h2
                    className={`${montserrat.className} mt-3.5 text-balance bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-[1.55rem] font-medium leading-[1.14] tracking-[-0.02em] text-transparent sm:mt-4 sm:text-[1.8rem] sm:leading-[1.12] lg:text-[2.05rem]`}
                  >
                    Pasiune transformată în performanță
                  </h2>
                  <p
                    className={`${inter.className} mx-auto mt-5 max-w-xl text-pretty text-[1rem] font-normal leading-[1.68] tracking-[0.01em] text-zinc-400 sm:mt-6 sm:max-w-2xl sm:text-[1.0625rem] sm:leading-[1.72] sm:text-zinc-300/95 lg:text-[1.125rem] lg:leading-[1.75]`}
                  >
                    Cod, strategie și execuție — direct de la sursă. Mai jos poți
                    descoperi întregul meu parcurs, dacă vrei să citești cum am ajuns
                    aici
                  </p>
                </div>

                <details className="group/despre border-t border-white/[0.08]">
                  <summary className="list-none cursor-pointer select-none px-5 py-6 transition-colors hover:bg-gradient-to-r hover:from-white/[0.04] hover:via-transparent hover:to-emerald-500/[0.03] sm:px-10 sm:py-7 lg:px-12 [&::-webkit-details-marker]:hidden">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                      <div className="relative max-w-[min(100%,34rem)] border-l border-emerald-400/30 pl-4 text-left sm:pl-5">
                        <span
                          className={`${montserrat.className} block text-[1.15rem] font-light leading-snug tracking-[-0.02em] text-zinc-100 sm:text-[1.3rem] sm:leading-snug lg:text-[1.4rem]`}
                        >
                          Descoperă povestea completă
                        </span>
                        <span
                          className={`${inter.className} mt-3 block max-w-prose text-pretty text-base font-medium leading-relaxed tracking-[0.01em] text-zinc-100 sm:mt-3.5 sm:text-lg sm:leading-relaxed sm:text-zinc-50`}
                        >
                          Inspirat de muzică, ghidat de cod, dedicat excelenței
                        </span>
                      </div>
                      <div className="flex shrink-0 items-center gap-2 self-start sm:self-auto">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-400/85 transition group-open/despre:text-zinc-500 sm:text-[11px]">
                          <span className="group-open/despre:hidden">
                            Deschide
                          </span>
                          <span className="hidden group-open/despre:inline">
                            Închide
                          </span>
                        </span>
                        <svg
                          className="h-5 w-5 shrink-0 text-emerald-400/90 transition-transform duration-300 ease-out group-open/despre:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          aria-hidden
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </div>
                    </div>
                  </summary>

                  <div className="space-y-8 border-t border-white/[0.06] bg-black/25 px-5 pb-8 pt-6 sm:space-y-10 sm:px-10 sm:pb-10 lg:px-12">
                    <div
                      className={`${montserrat.className} relative overflow-hidden rounded-2xl border border-emerald-500/18 bg-gradient-to-br from-emerald-500/[0.07] via-white/[0.02] to-transparent px-5 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:px-8 sm:py-10`}
                    >
                      <div
                        className="pointer-events-none absolute inset-y-4 left-0 w-[3px] rounded-full bg-gradient-to-b from-emerald-400/90 via-emerald-500/50 to-teal-500/40 sm:inset-y-5"
                        aria-hidden
                      />
                      <div
                        className="pointer-events-none absolute -right-12 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-3xl"
                        aria-hidden
                      />
                      <p
                        className={`${inter.className} relative text-pretty text-center text-[1.05rem] font-normal leading-[1.85] tracking-[0.01em] text-zinc-200 sm:text-left sm:text-[1.08rem] sm:leading-[1.88]`}
                      >
                        Muzica m-a invatat ritmul, iar studiile in mecatronică mi-au
                        format precizia. Pentru mine, un site premium este un mecanism fin,
                        unde tehnologia întâlnește arta. Totul începe cu un gând, un
                        cuvânt, un pixel sau un cod, așezat exact unde îi este locul. Așa
                        cum un robot industrial execută fiecare mișcare fără eroare, eu
                        îți
                        construiesc site-ul cu o logică impecabilă, unde codul și
                        designul lucrează în sincron. Rezultatul? O prezență online care
                        funcționează ceas, vibrează și inspiră încredere de la primul
                        scroll
                      </p>
                    </div>

                    <div className="relative space-y-8 sm:space-y-10">
                      <div
                        className="pointer-events-none absolute left-5 top-8 bottom-8 hidden w-px bg-gradient-to-b from-emerald-500/25 via-white/10 to-emerald-500/20 md:left-6 md:block"
                        aria-hidden
                      />

                      <article className="relative md:pl-14">
                        <div className="absolute left-0 top-1 hidden h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/15 to-black/40 text-[0.65rem] font-semibold tracking-wider text-emerald-200/95 shadow-[0_8px_28px_rgba(16,185,129,0.18)] md:flex">
                          01
                        </div>
                        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_12px_40px_rgba(0,0,0,0.25)] sm:p-7">
                          <h3 className="text-lg font-medium tracking-[0.04em] text-white sm:text-xl">
                            Filozofia mea este simplă:
                          </h3>
                          <p
                            className={`${inter.className} mt-4 text-pretty text-[1.05rem] font-normal leading-[1.8] tracking-[0.01em] text-zinc-300 sm:text-[1.1rem] sm:leading-[1.85]`}
                          >
                            Dincolo de design și cod, sunt partenerul care îți
                            transformă ideile într-o prezență digitală care vinde.
                            Pentru mine, un site nu este o simplă pagină web, ci un
                            motor de creștere. De aceea, fiecare pixel și fiecare
                            linie de cod sunt aliniate unui singur obiectiv: succesul
                            afacerii tale
                          </p>
                        </div>
                      </article>

                      <article className="relative md:pl-14">
                        <div className="absolute left-0 top-1 hidden h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/15 to-black/40 text-[0.65rem] font-semibold tracking-wider text-emerald-200/95 shadow-[0_8px_28px_rgba(16,185,129,0.18)] md:flex">
                          02
                        </div>
                        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_12px_40px_rgba(0,0,0,0.25)] sm:p-7">
                          <h3 className="text-lg font-medium tracking-[0.04em] text-white sm:text-xl">
                            Ce aduc la masa discuțiilor?
                          </h3>
                          <p
                            className={`${inter.className} mt-4 text-pretty text-[1.05rem] font-normal leading-[1.8] tracking-[0.01em] text-zinc-300 sm:text-[1.1rem] sm:leading-[1.85]`}
                          >
                            Folosesc tehnologii moderne pentru a livra platforme care
                            arată impecabil și funcționează eficient pe orice
                            dispozitiv. Rezultatul? O imagine de brand consolidată și
                            o experiență fluidă care convertește vizitatorii în clienți
                            loiali
                          </p>
                        </div>
                      </article>
                    </div>
                  </div>
                </details>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="scroll-anchor border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:py-12">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Contact:
              </h2>
              <div className="mt-4 max-w-2xl space-y-3 text-zinc-300">
                <p className="text-lg font-medium leading-snug text-white sm:text-xl">
                  Hai să construim ceva memorabil 😊
                </p>
                <p className="max-w-xl text-pretty text-base font-normal leading-relaxed text-[#F5F5F7]/95 sm:text-lg sm:leading-relaxed">
                  <a
                    href={WHATSAPP_CHAT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Deschide WhatsApp pentru consultanță gratuită"
                    className="group/consult inline-flex items-baseline gap-1 text-lg font-bold tracking-tight text-[#D4AF37] drop-shadow-[0_0_28px_rgba(212,175,55,0.22)] transition duration-200 hover:text-[#E8C547] hover:drop-shadow-[0_0_32px_rgba(232,197,71,0.28)] sm:text-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5AC8FA]/70"
                  >
                    <span>Consultanță gratuită</span>
                    <span
                      className="translate-y-px font-semibold text-[0.88em] text-[#D4AF37] transition group-hover/consult:text-[#E8C547] sm:text-[0.9em]"
                      aria-hidden
                    >
                      ↗
                    </span>
                  </a>{" "}
                  <span className="text-[#F5F5F7]/88">
                    pentru proiecte care vor să iasă din anonimat
                  </span>
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={40}>
              <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] shadow-[0_20px_60px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)]">
                <div className="relative border-b border-white/10 px-5 py-8 sm:px-8 sm:py-9 lg:px-10">
                  <div
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_0%,rgba(16,185,129,0.12),transparent_55%)]"
                    aria-hidden
                  />
                  <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
                    <div className="max-w-md">
                      <p className="text-base font-medium leading-snug text-sky-400 sm:text-lg">
                        Economisește timp
                      </p>
                      <p className="mt-2 text-sm leading-6 text-zinc-400 sm:mt-3 sm:text-[0.95rem] sm:leading-7">
                        Am pregătit mesajul de pornire. Doar apasă send și hai să
                        începem construcția proiectului tău.
                      </p>
                    </div>
                    <a
                      href={WHATSAPP_CHAT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Programează o discuție pe WhatsApp"
                      className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-emerald-500/90 px-6 text-sm font-semibold text-black text-pretty shadow-[0_0_0_1px_rgba(16,185,129,0.4),0_12px_40px_rgba(16,185,129,0.2)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-[0_0_0_1px_rgba(16,185,129,0.5),0_16px_48px_rgba(16,185,129,0.25)] active:translate-y-0 lg:w-auto lg:min-w-[14.5rem]"
                    >
                      <svg
                        className="h-4 w-4 shrink-0"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Programează o discuție
                    </a>
                  </div>
                </div>

                <div className="grid divide-y divide-white/[0.08] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                  <a
                    href="tel:+40753834965"
                    aria-label="Apel telefonic la 0753834965"
                    className="group relative flex flex-col items-center gap-3 overflow-hidden p-6 text-center transition-all duration-300 ease-out will-change-transform motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 motion-reduce:hover:shadow-none sm:p-7
                    hover:-translate-y-1 hover:z-10 hover:bg-white/[0.07] hover:shadow-[0_16px_48px_rgba(0,0,0,0.38),0_0_0_1px_rgba(52,199,89,0.25),inset_0_1px_0_rgba(255,255,255,0.07)]
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#34C759]/55
                    active:translate-y-0 active:scale-[0.99] active:duration-150"
                  >
                    <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.35rem] bg-[#34C759] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_24px_rgba(52,199,89,0.35)] ring-1 ring-white/20 transition duration-300 ease-out group-hover:scale-105 group-hover:brightness-110 group-hover:shadow-[0_10px_32px_rgba(52,199,89,0.45)] motion-reduce:group-hover:scale-100">
                      <svg
                        className="h-[1.35rem] w-[1.35rem] transition duration-300 group-hover:scale-105 motion-reduce:group-hover:scale-100"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <div className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                        Telefon
                      </div>
                      <span className="sr-only">0753834965</span>
                    </div>
                  </a>

                  <a
                    href="mailto:contact.nexteraweb@gmail.com"
                    aria-label="Trimite email la contact.nexteraweb@gmail.com"
                    className="group relative flex flex-col items-center gap-3 overflow-hidden p-6 text-center transition-all duration-300 ease-out will-change-transform motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 motion-reduce:hover:shadow-none sm:p-7
                    hover:-translate-y-1 hover:z-10 hover:bg-white/[0.07] hover:shadow-[0_16px_48px_rgba(0,0,0,0.38),0_0_0_1px_rgba(90,200,250,0.2),inset_0_1px_0_rgba(255,255,255,0.07)]
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5AC8FA]/45
                    active:translate-y-0 active:scale-[0.99] active:duration-150"
                  >
                    <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.35rem] bg-gradient-to-b from-[#5AC8FA] via-[#3BA3F4] to-[#0A84FF] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_8px_24px_rgba(10,132,255,0.35)] ring-1 ring-white/25 transition duration-300 ease-out group-hover:scale-105 group-hover:brightness-110 group-hover:shadow-[0_10px_32px_rgba(90,200,250,0.35)] motion-reduce:group-hover:scale-100">
                      <svg
                        className="h-[1.35rem] w-[1.35rem] drop-shadow-sm transition duration-300 group-hover:scale-105 motion-reduce:group-hover:scale-100"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.49 5.67a1.5 1.5 0 01-1.51 0L1.5 8.67z" />
                        <path d="M22.5 6.908V17.25a3 3 0 01-3 3h-15a3 3 0 01-3-3V6.908l9.26 6.174a1.5 1.5 0 001.48 0L22.5 6.908z" />
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <div className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                        Email
                      </div>
                      <span className="sr-only">contact.nexteraweb@gmail.com</span>
                    </div>
                  </a>

                  <a
                    href={INSTAGRAM_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Deschide profilul Instagram @amos.rapcod"
                    className="group relative flex flex-col items-center gap-3 overflow-hidden p-6 text-center transition-all duration-300 ease-out will-change-transform motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 motion-reduce:hover:shadow-none sm:p-7
                    hover:-translate-y-1 hover:z-10 hover:bg-white/[0.07] hover:shadow-[0_16px_48px_rgba(0,0,0,0.38),0_0_0_1px_rgba(221,42,123,0.22),inset_0_1px_0_rgba(255,255,255,0.07)]
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#dd2a7b]/45
                    active:translate-y-0 active:scale-[0.99] active:duration-150"
                  >
                    <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.35rem] border border-white/10 bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#515bd4] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_8px_24px_rgba(221,42,123,0.25)] ring-1 ring-white/15 transition duration-300 ease-out group-hover:scale-105 group-hover:border-white/25 group-hover:brightness-110 group-hover:shadow-[0_10px_32px_rgba(221,42,123,0.35)] motion-reduce:group-hover:scale-100">
                      <svg
                        className="h-[1.35rem] w-[1.35rem] transition duration-300 group-hover:scale-105 motion-reduce:group-hover:scale-100"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <div className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                        Instagram
                      </div>
                      <span className="sr-only">
                        Deschide profilul Instagram în tab nou
                      </span>
                    </div>
                  </a>
                </div>

                <div className="border-t border-white/10">
                  <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 sm:px-8">
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <svg
                        className="h-4 w-4 text-emerald-400/80"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        aria-hidden
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      <span className="font-medium uppercase tracking-[0.14em]">
                        Brașov · România
                      </span>
                    </div>
                    <a
                      className="text-xs font-medium text-emerald-300/95 transition hover:text-emerald-200"
                      href="https://www.google.com/maps/search/?api=1&query=Bra%C8%99ov%2C%20Romania"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Deschide în Google Maps →
                    </a>
                  </div>
                  <DeferredGoogleMap
                    title="Hartă Brașov"
                    src="https://www.google.com/maps?q=Bra%C8%99ov%2C%20Romania&output=embed"
                    className="glass-inset relative aspect-[5/3] w-full overflow-hidden sm:aspect-[2.4/1]"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <footer className="border-t border-white/10 bg-black/55 backdrop-blur-2xl">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              <div>
                <div className="text-sm font-semibold tracking-wide text-white">
                  NEXTERAWEB™
                </div>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  Ecosisteme digitale complete: magazine online de înaltă performanță, platforme customizate și aplicații mobile, toate integrate prin automatizări inteligente pentru eficiență maximă
                </p>
                <p className="mt-2 text-sm font-medium leading-6 text-zinc-200/90">
                  Toate preturile afisate contin TVA
                </p>
              </div>

              <div>
                <div className="text-sm font-semibold text-white">
                  Navigare rapidă
                </div>
                <div className="mt-4 grid gap-2 text-sm text-zinc-400">
                  <a className="hover:text-white transition" href="#servicii">
                    Servicii
                  </a>
                  <a className="hover:text-white transition" href="#portofoliu">
                    Portofoliu
                  </a>
                  <a className="hover:text-white transition" href="#pachete">
                    Pachete
                  </a>
                  <a className="hover:text-white transition" href="#despre">
                    Despre
                  </a>
                  <a className="hover:text-white transition" href="#contact">
                    Contact
                  </a>
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold text-white">Contact</div>
                <div className="mt-4 space-y-2 text-sm text-zinc-400">
                  <div>
                    Telefon:{" "}
                    <a
                      className="text-zinc-200 hover:text-white transition"
                      href="tel:+40753834965"
                    >
                      0753834965
                    </a>
                  </div>
                  <div>
                    Email:{" "}
                    <a
                      className="text-zinc-200 hover:text-white transition"
                      href="mailto:contact.nexteraweb@gmail.com"
                    >
                      contact.nexteraweb@gmail.com
                    </a>
                  </div>
                  <div>
                    WhatsApp:{" "}
                    <a
                      className="text-zinc-200 hover:text-white transition"
                      href={WHATSAPP_CHAT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Deschide chat
                    </a>
                  </div>
                  <div>
                    Instagram:{" "}
                    <a
                      className="text-zinc-200 hover:text-white transition"
                      href={INSTAGRAM_PROFILE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @amos.rapcod
                    </a>
                  </div>
                  <div>Locație: Brașov</div>
                </div>
              </div>
            </div>

            <div id="footer-legale" className="glass-muted mt-10 scroll-mt-24 p-6">
              <div className="text-sm font-semibold text-white">
                Informații utile
              </div>
              <div className="mt-4 grid grid-cols-1 gap-4 text-sm leading-7 text-zinc-400 md:grid-cols-2">
                <p>
                  Ofertele și prețurile afișate sunt orientative și pot varia în
                  funcție de complexitate, conținut, integrări și termenul de
                  livrare. Detaliile finale se stabilesc după o scurtă discuție
                </p>
                <p>
                  Comunicarea este simplă și transparentă: îți spun clar pașii,
                  termenii și ce primești în pachet, astfel încât să știi mereu în
                  ce etapă este proiectul
                </p>
                <p>
                  Pentru solicitări și reclamații privind protecția consumatorilor,
                  poți accesa informațiile oficiale ANPC
                </p>
                <p>
                  Acest site poate folosi tehnologii standard de funcționare (ex.
                  cookie-uri necesare). Pentru drepturile tale privind datele
                  personale, consultă legislația aplicabilă și informările
                  oficiale ale autorităților competente din UE/România
                </p>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="text-sm font-semibold text-white">
                  Pregătire comercială (abonamente & plăți)
                </div>
                <div className="mt-4 space-y-3 text-sm leading-7 text-zinc-400">
                  <p>
                    Serviciile cu plată recurentă (ex. mentenanță digitală) vor fi
                    facturate conform ofertei acceptate. Înainte de prima încasare
                    vor fi publicate aici: date de identificare fiscală ale
                    operatorului (ex. CUI), termeni și condiții, politica de
                    confidențialitate și descrierea clară a serviciului livrat
                  </p>
                  <p>
                    La contracte la distanță, consumatorii beneficiază de drepturi
                    prevăzute de legislația română și de normele UE. Pentru
                    soluționarea alternativă a litigiilor (SAL) și pașii de
                    reclamație, folosește resursele oficiale ANPC
                  </p>
                  <p>
                    Pentru litigii online transfrontaliere în UE poți folosi
                    platforma europeană ODR (Online Dispute Resolution)
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm leading-relaxed tracking-[0.01em] text-zinc-400">
                <a
                  className="font-medium text-amber-200/90 transition-colors duration-300 hover:text-amber-100"
                  href="#footer-legale"
                >
                  Consumatori &amp; plăți
                </a>
                <a
                  className="font-medium text-amber-200/90 transition-colors duration-300 hover:text-amber-100"
                  href="https://anpc.ro/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ANPC — informații consumatori
                </a>
                <a
                  className="font-medium text-amber-200/90 transition-colors duration-300 hover:text-amber-100"
                  href="https://reclamatiisal.anpc.ro/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SAL / reclamații (ANPC)
                </a>
                <a
                  className="font-medium text-amber-200/90 transition-colors duration-300 hover:text-amber-100"
                  href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Platforma ODR (UE)
                </a>
                <a
                  className="font-medium text-amber-200/90 transition-colors duration-300 hover:text-amber-100"
                  href="https://commission.europa.eu/law/law-topic/data-protection_en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Protecția datelor (UE)
                </a>
              </div>

            </div>

            <div className="mt-10 border-t border-white/10 pt-9">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:justify-between lg:gap-8">
                <div
                  className={[
                    montserrat.className,
                    "relative max-w-full overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-white/[0.09] via-white/[0.04] to-white/[0.02] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md sm:px-5 sm:py-3.5 lg:max-w-xl lg:flex-1",
                  ].join(" ")}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -left-10 -bottom-12 h-28 w-28 rounded-full bg-zinc-400/[0.07] blur-2xl"
                  />
                  <div className="relative flex flex-col gap-1">
                    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white sm:text-[0.7rem]">
                      drepturi
                    </span>
                    <p className="text-pretty text-[1.05rem] font-semibold leading-snug tracking-[-0.02em] text-zinc-100 sm:text-lg lg:text-xl">
                      © {new Date().getFullYear()}{" "}
                      <span className="tagline-neon-shimmer">NEXTERAWEB</span>
                      <span className="tagline-neon-shimmer ml-1 relative -top-[0.28em] inline-block text-[0.65em] font-semibold opacity-85">
                        ™
                      </span>
                      <span className="font-medium text-zinc-400"> · </span>
                      <span className="font-medium text-zinc-300">
                        Toate drepturile rezervate
                      </span>
                    </p>
                  </div>
                </div>

                <a
                  href={INSTAGRAM_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[
                    montserrat.className,
                    "group relative max-w-full overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-white/[0.09] via-white/[0.04] to-white/[0.02] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md transition duration-300 sm:px-5 sm:py-3.5 lg:max-w-xl lg:flex-1",
                    "hover:border-emerald-400/25 hover:from-white/[0.11] hover:via-emerald-500/[0.06] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_16px_48px_rgba(0,0,0,0.4),0_0_0_1px_rgba(16,185,129,0.08)]",
                    "outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500/50",
                  ].join(" ")}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-6 -top-10 h-24 w-24 rounded-full bg-emerald-400/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 sm:h-28 sm:w-28"
                  />
                  <div className="relative flex flex-col gap-1">
                    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white sm:text-[0.7rem]">
                      creat de
                    </span>
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-[1.05rem] font-semibold leading-snug tracking-[-0.02em] text-white sm:text-lg lg:text-xl">
                      <span className="bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#515bd4] bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(221,42,123,0.22)] transition group-hover:from-[#f9a03f] group-hover:via-[#ff4aa2] group-hover:to-[#6a6ff2]">
                        @amos.rapcod
                      </span>
                      <span className="hidden font-light text-zinc-600 sm:inline">
                        —
                      </span>
                      <span className="w-full font-medium text-zinc-200 transition group-hover:text-zinc-50 sm:w-auto sm:font-semibold">
                        Digital Entrepreneur
                      </span>
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[0.78rem] font-medium tracking-[0.02em] text-zinc-300/90 sm:text-[0.85rem] sm:text-zinc-300">
                      <span className="whitespace-nowrap">Full-stack Developer</span>
                      <span aria-hidden className="text-zinc-600">
                        —
                      </span>
                      <span className="whitespace-nowrap">Web Design &amp; SEO</span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="mt-5 flex justify-end">
                <a
                  href="#top"
                  className={[
                    montserrat.className,
                    "inline-flex min-h-11 items-center justify-center rounded-full border border-emerald-400/40 bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-emerald-600/10 px-6 text-sm font-semibold text-emerald-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_10px_32px_rgba(16,185,129,0.12)] backdrop-blur-md transition duration-300",
                    "hover:border-emerald-300/55 hover:from-emerald-400/25 hover:via-teal-400/15 hover:to-emerald-500/15 hover:text-white hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_14px_40px_rgba(16,185,129,0.2)]",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400/60",
                  ].join(" ")}
                >
                  Înapoi sus
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
