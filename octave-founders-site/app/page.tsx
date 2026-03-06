"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  Calendar,
  Check,
  Instagram,
  Link2,
  Mail,
  MessageCircle,
  Shield,
  Sparkles,
  Ticket,
  Users,
  Video
} from "lucide-react";

const CONTACT_EMAIL = "hello@octaveatl.com";
const SOCIALS = {
  instagram: "https://instagram.com/yourhandle",
  tiktok: "https://tiktok.com/@yourhandle",
  discord: "https://discord.gg/yourinvite"
};

// Put an mp4 at /public/videos/hero.mp4 (or change this path)
const HERO_VIDEO_URL = "/videos/hero.mp4";

function EqualizerMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 24" aria-hidden="true" className={className} fill="none">
      {[6, 14, 10, 18, 8, 16, 12, 20, 11, 15].map((h, i) => (
        <rect key={i} x={i * 6} y={24 - h} width={4} height={h} rx={2} className="fill-white/90" />
      ))}
    </svg>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

function SocialRow({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10"
        href={SOCIALS.instagram}
        target="_blank"
        rel="noreferrer"
      >
        <Instagram className="h-4 w-4" />
        Instagram
      </a>
      <a
        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10"
        href={SOCIALS.tiktok}
        target="_blank"
        rel="noreferrer"
      >
        <Video className="h-4 w-4" />
        TikTok
      </a>
      <a
        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10"
        href={SOCIALS.discord}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle className="h-4 w-4" />
        Discord
      </a>
    </div>
  );
}

function MascotCard({
  title,
  subtitle,
  accent = "from-rose-500/30 via-red-500/10"
}: {
  title: string;
  subtitle: string;
  accent?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} to-transparent`} />
      <div className="relative flex items-start gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-black/40 ring-1 ring-white/10">
          <svg viewBox="0 0 40 40" className="h-7 w-7" fill="none" aria-hidden="true">
            <path
              d="M20 4c6.2 0 11 4.8 11 11 0 8.4-8.2 14.8-11 15.9C17.2 29.8 9 23.4 9 15 9 8.8 13.8 4 20 4Z"
              className="fill-white/80"
            />
            <path
              d="M14.5 17.2c2-2.4 3.7-3.6 5.5-3.6 1.8 0 3.5 1.2 5.5 3.6"
              className="stroke-black/60"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div>
          <div className="text-sm font-semibold">{title}</div>
          <div className="text-xs text-white/60">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  const tiers = useMemo(
    () => [
      {
        key: "genin",
        name: "Founding Genin",
        priceOneTime: "$250",
        includes: "Includes Year 1 of Genin Membership",
        bestFor: "Core community members who want access + belonging.",
        cta: "Join as Founding Genin",
        stripeHref: "#",
        highlights: [
          "Priority entry line (member check-in)",
          "Early access to events (24–48 hours)",
          "Members-only programming",
          "Members section access (access only)"
        ],
        founderForever: ["Founder digital badge", "Name on the Founders Wall"],
        capNote: "High cap (community core)"
      },
      {
        key: "jonin",
        name: "Founding Jōnin",
        priceOneTime: "$500",
        includes: "Includes Year 1 of Jōnin Membership",
        bestFor: "Regulars who want reliability on busy nights.",
        cta: "Join as Founding Jōnin",
        stripeHref: "#",
        highlights: [
          "Everything in Genin",
          "Guaranteed entry window (before 11:30pm)*",
          "VIP table priority booking window",
          "1 guest pass per month*"
        ],
        founderForever: ["Founder badge", "Founders Wall"],
        capNote: "Capped (capacity promise tier)"
      },
      {
        key: "hokage",
        name: "Founding Hokage",
        priceOneTime: "$1,000",
        includes: "Includes Year 1 of Hokage Circle",
        bestFor: "Culture leaders and “I bring the crew” members.",
        cta: "Join as Founding Hokage",
        stripeHref: "#",
        highlights: [
          "Everything in Jōnin",
          "Top priority within the guarantee window*",
          "2 guest passes per month*",
          "Quarterly private community events"
        ],
        founderForever: ["Hokage Founder badge", "Special marker on Founders Wall"],
        capNote: "Strictly capped (premium access)"
      }
    ],
    []
  );

  const renewals = useMemo(
    () => [
      { level: "Genin Membership", monthly: "$25 / month", annual: "$240 / year" },
      { level: "Jōnin Membership", monthly: "$45 / month", annual: "$450 / year" },
      { level: "Hokage Circle", monthly: "$75 / month", annual: "$750 / year" }
    ],
    []
  );

  async function submitWaitlist(e: React.FormEvent) {
    e.preventDefault();
    const v = email.trim();
    if (!v) return;

    try {
      setStatus("sending");
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: v, source: "octave-founders" })
      });
      if (!res.ok) throw new Error("submit failed");
      setStatus("ok");
      setEmail("");
    } catch {
      setStatus("err");
    }
  }

  return (
    <div className="min-h-screen bg-octave-bg text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(239,68,68,0.22),transparent_55%),radial-gradient(55%_55%_at_10%_35%,rgba(244,63,94,0.18),transparent_60%),radial-gradient(55%_55%_at_90%_55%,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,5,7,0.0),rgba(5,5,7,0.7),rgba(5,5,7,1))]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 shadow-sm ring-1 ring-white/10">
            <EqualizerMark className="h-5 w-8" />
          </div>
          <div>
            <div className="text-sm font-semibold tracking-wide">OCTAVE</div>
            <div className="text-xs text-white/60">Anime Social Club • Atlanta</div>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a href="#tiers" className="hover:text-white">Memberships</a>
          <a href="#rules" className="hover:text-white">Rules</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
          <a href="#media" className="hover:text-white">Media</a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="secondary">
            <a className="inline-flex items-center" href={`mailto:${CONTACT_EMAIL}`}>
              <Mail className="mr-2 h-4 w-4" /> Contact
            </a>
          </Button>

          <Dialog>
            <DialogTrigger asChild>
              <Button>Join Waitlist</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Join the OCTAVE waitlist</DialogTitle>
                <DialogDescription>Get Founding drop updates + community events first.</DialogDescription>
              </DialogHeader>

              <form onSubmit={submitWaitlist} className="mt-3 space-y-3">
                <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@domain.com" />
                <Button className="w-full" disabled={status === "sending"}>
                  {status === "sending" ? "Joining…" : "Join"}
                </Button>
                {status === "ok" && <p className="text-sm text-emerald-300">You’re in. We’ll keep you posted.</p>}
                {status === "err" && <p className="text-sm text-rose-300">Couldn’t submit. Try again, or email us.</p>}
                <SocialRow className="pt-1" />
                <p className="text-xs text-white/50">You can unsubscribe anytime.</p>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      {/* Hero */}
      <main className="relative z-10">
        <section className="mx-auto w-full max-w-6xl px-5 pb-8 pt-10 md:pb-14 md:pt-16">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-5">
              <div className="flex flex-wrap gap-2">
                <Pill><Sparkles className="mr-2 h-3.5 w-3.5" />Founding Drop • Limited</Pill>
                <Pill><Users className="mr-2 h-3.5 w-3.5" />Community-first</Pill>
                <Pill><Calendar className="mr-2 h-3.5 w-3.5" />Activates on opening day</Pill>
              </div>

              <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
                Atlanta’s home for anime, manga, and alternative culture.
                <span className="block text-white/70">Built for the community that shows up.</span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-white/70">
                Founding Memberships are a pre-opening drop that includes your first year of membership{" "}
                <span className="text-white">(starting on opening day)</span> plus permanent Founder recognition.
              </p>

              <div className="flex flex-col gap-2 sm:flex-row">
                <Button size="lg" className="gap-2">
                  <a className="inline-flex items-center" href="#tiers">
                    Choose a Tier <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="secondary"><a href="#faq">How it works</a></Button>
              </div>

              <SocialRow className="pt-2" />

              <div className="grid gap-3 pt-2 sm:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Term</CardTitle>
                    <CardDescription>12 months</CardDescription>
                  </CardHeader>
                  <CardContent className="text-xs text-white/60">Starts on opening date.</CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Founder status</CardTitle>
                    <CardDescription>Forever</CardDescription>
                  </CardHeader>
                  <CardContent className="text-xs text-white/60">Badge + Founders Wall.</CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Best value</CardTitle>
                    <CardDescription>Priority entry</CardDescription>
                  </CardHeader>
                  <CardContent className="text-xs text-white/60">High impact, low cost.</CardContent>
                </Card>
              </div>

              <div className="grid gap-3 pt-2 sm:grid-cols-3">
                <MascotCard title="Genin Energy" subtitle="New members, community-first vibe." accent="from-red-500/25 via-rose-500/10" />
                <MascotCard title="Jōnin Access" subtitle="Guarantee window + VIP booking." accent="from-red-500/25 via-orange-500/10" />
                <MascotCard title="Hokage Circle" subtitle="Culture leaders + private events." accent="from-red-500/25 via-white/10" />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="show" className="relative">
              <div className="absolute -inset-2 rounded-[28px] bg-red-500/10 blur-xl" />
              <Card className="relative overflow-hidden rounded-[28px] bg-octave-panel">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-octave-panel" />
                  <video className="h-56 w-full object-cover" src={HERO_VIDEO_URL} autoPlay muted loop playsInline />
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <Badge>Featured</Badge>
                    <Badge className="bg-octave-red text-white">Black + Red</Badge>
                  </div>
                </div>

                <CardHeader className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <Shield className="h-4 w-4" /> Rules protect capacity
                    </div>
                    <div className="text-xs text-white/50">Replace video with your clips</div>
                  </div>
                  <CardTitle className="text-lg">What you get pre-opening</CardTitle>
                  <CardDescription>Immediate benefits you can deliver before doors open.</CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                  <div className="grid gap-3">
                    {[
                      { icon: <Check className="h-4 w-4" />, title: "Founder status reserved", desc: "Badge + name reserved for the Founders Wall." },
                      { icon: <Ticket className="h-4 w-4" />, title: "Early announcements", desc: "First access to drops, meetups, and launch updates." },
                      { icon: <Users className="h-4 w-4" />, title: "Community meetups", desc: "Optional watch parties / manga meetups (partner venues)." }
                    ].map((x) => (
                      <div key={x.title} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                        <div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/10">{x.icon}</div>
                        <div>
                          <div className="text-sm font-medium">{x.title}</div>
                          <div className="text-xs text-white/60">{x.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div className="text-sm font-medium">Activation & fairness</div>
                    <p className="mt-1 text-xs leading-relaxed text-white/60">
                      Your 12 months starts on the opening date (not your purchase date). This protects members while we build.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row">
                    <Button className="w-full"><a href="#tiers">Pick a tier</a></Button>
                    <Button
                      variant="secondary"
                      className="w-full"
                      onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
                      type="button"
                    >
                      Read FAQ
                    </Button>
                  </div>

                  <p className="text-[11px] text-white/45">
                    *Capacity perks (guaranteed entry, guest credits) are limited and require an active membership.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Media */}
        <section id="media" className="mx-auto w-full max-w-6xl px-5 pb-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">Media</h2>
            <p className="max-w-3xl text-sm leading-relaxed text-white/65">
              Add short clips from meetups, creator showcases, cosplay nights, or your own original animations. Avoid using copyrighted anime footage unless you have rights.
            </p>
          </motion.div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {["Community Meetup", "Cosplay Night", "DJ / Alt-Culture"].map((label) => (
              <Card key={label} className="overflow-hidden rounded-[22px]">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80" />
                  <div className="h-40 w-full bg-[radial-gradient(60%_60%_at_50%_40%,rgba(239,68,68,0.22),transparent_65%),radial-gradient(45%_45%_at_30%_60%,rgba(255,255,255,0.10),transparent_60%)]" />
                  <div className="absolute left-4 top-4 rounded-xl border border-white/10 bg-white/10 px-3 py-1 text-xs">Video placeholder</div>
                </div>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-base">{label}</CardTitle>
                  <CardDescription>Swap with your clips (MP4) or embeds.</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Tiers */}
        <section id="tiers" className="mx-auto w-full max-w-6xl px-5 pb-10 pt-4 md:pb-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">Founding tiers</h2>
            <p className="max-w-3xl text-sm leading-relaxed text-white/65">
              Founding Memberships are a limited pre-opening drop. Each tier includes Year 1 (from opening day) plus Founder recognition.
            </p>
          </motion.div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {tiers.map((t, idx) => (
              <motion.div key={t.key} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: idx * 0.06 }}>
                <Card className="h-full rounded-[26px]">
                  <CardHeader className="space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <CardTitle className="text-lg">{t.name}</CardTitle>
                        <CardDescription>{t.includes}</CardDescription>
                      </div>
                      <Badge>{t.capNote}</Badge>
                    </div>

                    <div className="pt-2">
                      <div className="text-3xl font-semibold">{t.priceOneTime}</div>
                      <div className="text-xs text-white/60">one-time (pre-opening)</div>
                    </div>

                    <p className="text-sm text-white/70"><span className="text-white/90">Best for:</span> {t.bestFor}</p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {t.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2 text-sm text-white/75">
                          <Check className="mt-0.5 h-4 w-4 text-white/70" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/25 p-3">
                      <div className="text-xs font-semibold text-white/80">Founder perks (forever)</div>
                      <div className="mt-2 space-y-1">
                        {t.founderForever.map((p) => (
                          <div key={p} className="flex items-start gap-2 text-xs text-white/65">
                            <Sparkles className="mt-0.5 h-3.5 w-3.5" />
                            <span>{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full" size="lg">
                      <a className="inline-flex items-center" href={t.stripeHref}>
                        {t.cta} <Link2 className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <p className="text-[11px] text-white/45">Replace “#” with Stripe Checkout links for each tier.</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <Card className="rounded-[26px] bg-octave-panel">
              <CardHeader>
                <CardTitle className="text-base">After Year 1 (renewal options)</CardTitle>
                <CardDescription>
                  Founder status stays forever. Renew to keep active benefits (capacity perks require an active membership).
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 md:grid-cols-3">
                  {renewals.map((r) => (
                    <div key={r.level} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-sm font-semibold">{r.level}</div>
                      <div className="mt-1 text-xs text-white/70">{r.monthly}</div>
                      <div className="text-xs text-white/55">{r.annual}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Rules + FAQ */}
        <section className="mx-auto w-full max-w-6xl px-5 pb-16">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div id="rules" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-3">
              <h3 className="text-xl font-semibold">Perk rules (clear + fair)</h3>
              <p className="text-sm text-white/65">These rules protect the community experience and keep promises deliverable.</p>

              <Tabs defaultValue="priority" className="mt-4">
                <TabsList className="bg-white/5">
                  <TabsTrigger value="priority">Priority entry</TabsTrigger>
                  <TabsTrigger value="guarantee">Guarantee</TabsTrigger>
                  <TabsTrigger value="guests">Guest passes</TabsTrigger>
                </TabsList>

                <TabsContent value="priority" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Priority Entry Line</CardTitle>
                      <CardDescription>Faster entry when doors are open and safe.</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-white/70">
                      <ul className="list-disc space-y-2 pl-5">
                        <li>Dedicated member check-in line (QR + ID).</li>
                        <li>Not a “skip capacity” pass — just faster entry at the door.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="guarantee" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Guaranteed Entry Window (Jōnin/Hokage)</CardTitle>
                      <CardDescription>A capacity promise — limited and protected.</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-white/70">
                      <ul className="list-disc space-y-2 pl-5">
                        <li>Guaranteed entry if you arrive <b>before 11:30pm</b> (example window).</li>
                        <li>Still subject to legal capacity and safety requirements.</li>
                        <li>Ticketed/special events may require RSVP or may be excluded (always labeled in advance).</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="guests" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Guest Pass Credits</CardTitle>
                      <CardDescription>Growth without overcrowding.</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-white/70">
                      <ul className="list-disc space-y-2 pl-5">
                        <li>Jōnin: 1 guest pass/month • Hokage: 2 guest passes/month.</li>
                        <li>Valid before 11:30pm and not intended for large group stacking.</li>
                        <li>Not valid on certain special events unless stated.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>

            <motion.div id="faq" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-3">
              <h3 className="text-xl font-semibold">FAQ</h3>
              <p className="text-sm text-white/65">The basics — fast.</p>

              <Accordion className="mt-4">
                <AccordionItem>
                  <AccordionTrigger>When do Founding benefits start?</AccordionTrigger>
                  <AccordionContent>On opening day. Your 12-month term begins from the opening date, not the purchase date.</AccordionContent>
                </AccordionItem>

                <AccordionItem>
                  <AccordionTrigger>What do I get immediately (pre-opening)?</AccordionTrigger>
                  <AccordionContent>
                    Founder status reserved (badge + name reserved for Founders Wall) plus early announcements and community meetups.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem>
                  <AccordionTrigger>What happens after 12 months?</AccordionTrigger>
                  <AccordionContent>You can renew to keep active benefits. Founder identity remains forever even if you don’t renew.</AccordionContent>
                </AccordionItem>

                <AccordionItem>
                  <AccordionTrigger>Is this equity or an investment?</AccordionTrigger>
                  <AccordionContent>No — this is a membership product (access + community benefits), not ownership.</AccordionContent>
                </AccordionItem>

                <AccordionItem>
                  <AccordionTrigger>Refund policy?</AccordionTrigger>
                  <AccordionContent>
                    Recommended: full refund anytime before a lease is signed; after lease signed, 14-day refund window. If we don’t open by a published deadline, full refund available on request.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mx-auto w-full max-w-6xl px-5 pb-10">
          <Separator />
          <div className="mt-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                <EqualizerMark className="h-4 w-7" />
              </div>
              <div>
                <div className="text-sm font-semibold">OCTAVE</div>
                <div className="text-xs text-white/50">Anime Social Club • Atlanta</div>
              </div>
            </div>

            <SocialRow />

            <div className="flex gap-2">
              <Button variant="secondary">
                <a className="inline-flex items-center" href={`mailto:${CONTACT_EMAIL}`}>
                  <Mail className="mr-2 h-4 w-4" /> Email
                </a>
              </Button>
              <Button className="gap-2">
                <a className="inline-flex items-center" href="#tiers">
                  Memberships <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <p className="mt-5 text-xs text-white/40">
            Tip: Use only original/licensed visuals. If you want anime-style characters, create original mascots instead of using copyrighted characters.
          </p>
        </footer>
      </main>
    </div>
  );
}
