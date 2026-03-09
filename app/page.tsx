import Image from "next/image";
import {
  Shield,
  Fingerprint,
  Cpu,
  Zap,
  ArrowRight,
  Layers,
  Lock,
  Globe,
  CheckCircle2,
  ExternalLink,
  Pickaxe,
  Sun,
  Truck,
  BrainCircuit,
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Features", href: "#features" },
  { label: "Architecture", href: "#architecture" },
  { label: "Use Cases", href: "#usecases" },
  { label: "Ecosystem", href: "#ecosystem" },
];

const STATS = [
  { value: "< 100KB", label: "Full SDK Footprint" },
  { value: "4-Tier", label: "Modular Architecture" },
  { value: "7 Chains", label: "Multi-Chain Support" },
  { value: "24/7", label: "Production Verified" },
];

const FEATURES = [
  {
    icon: Fingerprint,
    title: "Machine Identity",
    desc: "Every device generates its own DID with Ed25519 + secp256k1 dual keypairs. Hardware-secured, self-sovereign identity for machines.",
  },
  {
    icon: Shield,
    title: "Data Attestation",
    desc: "SHA-256 hash + Ed25519 signature + on-chain anchoring. Immutable proof of device data with Merkle tree verification.",
  },
  {
    icon: Zap,
    title: "Autonomous Payment",
    desc: "x402 protocol + EIP-3009 micropayments. Devices pay for APIs and services autonomously with USDC, USDT, or Lightning — no human intervention.",
  },
];

const TIERS = [
  {
    tier: "Tier 0",
    name: "Crypto",
    size: "~40KB",
    color: "border-blue-500/40 bg-blue-500/5",
    items: ["Ed25519 + secp256k1", "SHA-256 / Keccak-256", "Hardware key storage"],
  },
  {
    tier: "Tier 1",
    name: "Identity",
    size: "+2KB",
    color: "border-purple-500/40 bg-purple-500/5",
    items: ["DID generation", "Device registration", "Key management"],
  },
  {
    tier: "Tier 2",
    name: "Attestation",
    size: "+4KB",
    color: "border-pink-500/40 bg-pink-500/5",
    items: ["Hash + Sign + Submit", "On-chain anchoring", "Merkle proof verification"],
  },
  {
    tier: "Tier 3",
    name: "Payment",
    size: "+12KB",
    color: "border-amber-500/40 bg-amber-500/5",
    items: ["x402 / EIP-712 / EIP-3009", "USDC + USDT + Lightning", "Multi-chain settlement"],
  },
];

const USE_CASES = [
  {
    icon: Pickaxe,
    title: "Bitcoin Mining",
    desc: "Bitaxe miners submit hashrate proofs and settle via x402 micropayments automatically.",
  },
  {
    icon: Sun,
    title: "Energy / DePIN",
    desc: "Solar devices attest generation data on-chain for carbon credit certification via Arkreen.",
  },
  {
    icon: Truck,
    title: "Supply Chain",
    desc: "Sensor data anchored immutably on-chain for tamper-proof tracking and compliance.",
  },
  {
    icon: BrainCircuit,
    title: "AI Data Oracle",
    desc: "MCP Server delivers trusted IoT data to AI models, powering RWA-driven machine economies.",
  },
];

const CHAINS = [
  { name: "Polygon", logo: "/logos/polygon.png" },
  { name: "Base", logo: "/logos/base.png" },
  { name: "BNB Chain", logo: "/logos/bnb.png" },
  { name: "HashKey Chain", logo: null, color: "bg-blue-600/20 text-blue-300" },
  { name: "Arc", logo: null, color: "bg-purple-600/20 text-purple-300" },
  { name: "Solana", logo: "/logos/solana.png" },
  { name: "Lightning", logo: "/logos/lightning.png" },
];

const CURRENCIES = [
  { name: "USDC", logo: "/logos/usdc.png" },
  { name: "USDT", logo: "/logos/usdt.png" },
  { name: "BTC", logo: "/logos/bitcoin.png" },
];

const STEPS = [
  {
    step: "01",
    title: "Initialize",
    desc: "Device generates Ed25519 + secp256k1 keypairs and DID on first boot. Keys are stored in hardware-secured storage.",
  },
  {
    step: "02",
    title: "Attest",
    desc: "Sensor data is SHA-256 hashed, Ed25519 signed, and submitted to HashAnchor for on-chain anchoring with Merkle proof.",
  },
  {
    step: "03",
    title: "Pay",
    desc: "On HTTP 402, the device auto-signs an x402 USDC/USDT micropayment via EIP-3009 or Lightning invoice. Service delivered instantly.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen grid-bg">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0a0a0f]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/tlay-logo.svg"
              alt="TLAY"
              width={90}
              height={29}
              priority
            />
            <span className="text-white/30">|</span>
            <span className="text-white/60 text-sm">BoAT</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/50 hover:text-white transition"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://github.com/boat-x"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/15 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/60 mb-8">
            Trust Layer for the Trillion Machine Economy
          </div>
          <div className="flex justify-center mb-6">
            <Image
              src="/tlay-logo.svg"
              alt="TLAY"
              width={200}
              height={65}
              priority
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="gradient-text">Trust Layer for</span>
            <br />
            <span className="text-white/90">Machine Economy</span>
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Lightweight machine wallet runtime{" "}
            <span className="text-white/80 font-medium">BoAT</span> gives every
            IoT device its own identity, attestation, and payment capabilities
            — in under 100KB.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#architecture"
              className="px-8 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 transition flex items-center gap-2"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/boat-x"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border border-white/20 text-sm hover:bg-white/5 transition flex items-center gap-2"
            >
              View on GitHub <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 border-y border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                {s.value}
              </div>
              <div className="text-sm text-white/40">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Machines Generate Value.
            <br />
            <span className="text-white/50">They Deserve a Wallet.</span>
          </h2>
          <p className="text-white/40 text-lg leading-relaxed">
            Billions of IoT devices produce data and economic value every
            second, yet they cannot prove data authenticity or make payments
            autonomously. BoAT transforms every device into a trusted economic
            participant in the decentralized machine economy.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Core Capabilities
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="glow-box rounded-2xl border border-white/8 p-8 hover:border-white/15 transition"
              >
                <f.icon className="w-10 h-10 text-blue-400 mb-5" />
                <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            4-Tier Modular Architecture
          </h2>
          <p className="text-center text-white/40 mb-16 max-w-xl mx-auto">
            Pick only the tiers you need. From bare-metal crypto to full
            autonomous payment — scale from 40KB to 58KB.
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            {TIERS.map((t) => (
              <div
                key={t.tier}
                className={`rounded-xl border p-6 ${t.color} transition hover:scale-[1.02]`}
              >
                <div className="text-xs text-white/40 mb-1 font-mono">
                  {t.tier}
                </div>
                <div className="text-lg font-bold mb-1">{t.name}</div>
                <div className="text-xs text-white/30 mb-4 font-mono">
                  {t.size}
                </div>
                <ul className="space-y-2">
                  {t.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-white/50"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0 text-white/30" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map((s, i) => (
              <div key={s.step} className="relative">
                <div className="text-5xl font-bold text-white/5 mb-4 font-mono">
                  {s.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {s.desc}
                </p>
                {i < STEPS.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-5 w-5 h-5 text-white/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="usecases" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {USE_CASES.map((uc) => (
              <div
                key={uc.title}
                className="rounded-xl border border-white/8 p-6 flex gap-5 hover:border-white/15 transition"
              >
                <uc.icon className="w-8 h-8 text-purple-400 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">{uc.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {uc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section id="ecosystem" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            TLay Ecosystem
          </h2>
          <p className="text-center text-white/40 mb-16 max-w-xl mx-auto">
            Modular open infrastructure for massive machine collaboration and
            RWA public asset network.
          </p>

          {/* Three pillars */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="rounded-xl border border-white/8 p-6 text-center">
              <Cpu className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Trusted Chipset & Module</h3>
              <p className="text-xs text-white/40">
                Hardware root of trust for secure key generation and storage
              </p>
            </div>
            <div className="rounded-xl border border-white/8 p-6 text-center">
              <Layers className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">BoAT Machine Wallet SDK</h3>
              <p className="text-xs text-white/40">
                Lightweight runtime for identity, attestation, and payment
              </p>
            </div>
            <div className="rounded-xl border border-white/8 p-6 text-center">
              <Globe className="w-8 h-8 text-pink-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">BoAT IoT Oracle Service</h3>
              <p className="text-xs text-white/40">
                On-chain data relay with Merkle proof verification
              </p>
            </div>
          </div>

          {/* Supported Chains */}
          <div className="mb-12">
            <h3 className="text-sm text-white/30 uppercase tracking-wider text-center mb-6">
              Supported Chains
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {CHAINS.map((chain) =>
                chain.logo ? (
                  <span
                    key={chain.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 hover:bg-white/10 transition"
                  >
                    <Image src={chain.logo} alt={chain.name} width={20} height={20} className="rounded-full" />
                    {chain.name}
                  </span>
                ) : (
                  <span
                    key={chain.name}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-white/10 ${chain.color}`}
                  >
                    {chain.name}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Payment Currencies */}
          <div>
            <h3 className="text-sm text-white/30 uppercase tracking-wider text-center mb-6">
              Payment Currencies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {CURRENCIES.map((c) => (
                <span
                  key={c.name}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/70 hover:bg-white/10 transition"
                >
                  <Image src={c.logo} alt={c.name} width={22} height={22} className="rounded-full" />
                  {c.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Developer CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Lock className="w-12 h-12 text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Building
          </h2>
          <p className="text-white/40 mb-10 max-w-lg mx-auto">
            Give your devices a wallet. From identity to payment, BoAT handles
            the blockchain layer so you can focus on your application.
          </p>
          <div className="inline-block rounded-xl bg-white/5 border border-white/10 px-6 py-4 font-mono text-sm text-white/70 mb-8">
            git clone https://github.com/boat-x.git
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/boat-x"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 transition flex items-center gap-2"
            >
              Get Started
            </a>
            <a
              href="https://medium.com/@tlay_io"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border border-white/20 text-sm hover:bg-white/5 transition"
            >
              Read the Blog
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-sm text-white/30">
            <Image src="/tlay-logo.svg" alt="TLAY" width={60} height={20} />
            <span>&copy; 2025 All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.tlay.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/30 hover:text-white/60 transition"
            >
              tlay.io
            </a>
            <a
              href="https://x.com/tlay_io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/30 hover:text-white/60 transition"
            >
              Twitter
            </a>
            <a
              href="https://medium.com/@tlay_io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/30 hover:text-white/60 transition"
            >
              Medium
            </a>
            <a
              href="mailto:info@tlay.io"
              className="text-sm text-white/30 hover:text-white/60 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
