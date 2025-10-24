---
title: "Blockchain x Geospatial — OGC Member Meeting Report"
author: "John Hoopes, University of Maryland / Astral"
css: slides/assets/css/johnx-theme.css
theme: white
highlightTheme: github
revealOptions:
  transition: 'dissolve'
  controls: true
  progress: true
  center: true
---

# Reporting Back: OGC Blockchain & DLT Domain Working Group
### Standards · Research · Convening
- Co-chairs: [add name + affiliation]
- Members: [insert list or logo grid]

**TODO:** add small group photo or member logos banner

---

## Dual Motivation

**1.** Bring geospatial technologies into the decentralized web  
**2.** Identify how decentralized-web tools can enhance geospatial tech  

> Two communities solving the same trust and provenance problems from opposite directions.

**TODO:** simple 2-circle Venn or overlap diagram

---

## Decentralized Web — overview (3 min)

A push to build a **resilient, user-centric internet** through protocol design.

- Includes blockchains, smart contracts, crypto tokens  
- Also DIDs, p2p storage, digital governance, social protocols  
- Two broad types  
  - Open public chains  
  - Private permissioned ledgers  

---

### Design Principles

| Principle | Description |
|------------|--------------|
| **Open** | Transparent, publicly auditable |
| **Durable** | Survives infrastructure or platform failure |
| **Opt-in** | Voluntary participation and exit |

**Hallmarks:** distributed, user-controlled, verifiable, composable  

**TODO:** small network-nodes graphic to illustrate distribution

---

### Drawbacks and Challenges

- Immature tools and abandoned projects  
- Limited guardrails → user risk  
- Legacy energy concerns (PoW) — largely solved post-Merge  
- Complexity: steep learning curve for GIS professionals  
- Reputational drag from illicit-use narratives

## Dual Motivation

1. Bring geospatial tech into the decentralized web  
2. Identify how decentralized systems can strengthen geospatial practice

Note:
- Emphasize reciprocity: both domains face the same trust and provenance problems.  
- Keep it conversational — “This isn’t about crypto hype; it’s about aligning architectures.”


---

### State of Play — 2025

- **Scaling:** L2 rollups, proof-of-stake, account abstraction  
- **Ecosystems:** Ethereum + L2s, Solana, Cosmos, Hedera  
- **Regulation:**  
  - US **GENIUS Act** (2025) — stablecoin oversight  
  - EU **MiCA** (2024) — live across member states  
- **Adoption data:**  
  - Stablecoins ≈ **$300 B**  
  - Tokenized Treasuries ≈ **$6 B**  
  - DePIN sector ≈ **$25 B**  
  - Ethereum energy ↓ **99.95 %**

**TODO:** bar or donut chart comparing these four metrics

---

## Standards

### Location Protocol

A **cryptographically signed interoperability format** for the decentralized web.

_Not a new “12th standard” — a meta-standard wrapping any geospatial artifact._

---

### Base Fields

| Field | Purpose |
|--------|----------|
| `srs` | Spatial reference (like SRID in PostGIS) |
| `format` | File type + coordinate metadata |
| `location` | Geometry or reference to geometry |
| `specVersion` | For correct parsing |
| `signature` | Cryptographic signer proof |

Optional extensions: `media`, `memo`, `eventTimestamp`, `recipePayload`

---

### Why it Matters

- Establishes an **atomic record** — the fundamental unit of the decentralized geospatial web  
- Digitally signed ⇒ integrity + attribution  
- Works in any environment: private JSON, hosted server, on-chain registry  
- **Schema compatible with STAC Items**

**TODO:** diagram: GeoJSON/STAC/WKT → wrapped → signed LP record

---

### Status (as of Oct 2025)

- v0.1 beta live ~ 6 months  
- SDK implementations across multiple blockchains  
- Geospatial indexer exposing **OGC API Features** endpoint  
- v0.2 alignment in progress  

**TODO:** short code snippet of SDK call (`npm install @astral/sdk` + sample record)

---

## Research

### GISRUK Paper — Three Pillars

1. **Proof-of-Location**  
2. **Verifiable Geocomputation**  
3. **P2P Geospatial Data Storage & Management**

**TODO:** simple three-column or triangle graphic labelled “pillars”

---

### Proof-of-Location Framework

- Moving from single-source coordinates → **composable evidence**
- Each *stamp* = signed evidence of presence  
- *Evidence function* combines stamps to evaluate a claim  
- Result: *credibility vector* (how strong, how independent)

**TODO:** diagram: claim → stamps → evidence → proof

---

### Other Threads

- **IPFS-STAC** prototype for p2p dataset hosting  
- **ZK-based region proofs** under exploration  
- **TEEs + hardware signing** for sensor provenance  
- Cross-domain applications: validator geo-distribution, compliance, environmental verification

---

## Convening

### Who We Heard From
- Academic researchers, mapping startups, infrastructure builders  
- Ethereum Foundation, Flashbots, WitnessChain, Overture Maps, others  

### Themes Emerging
1. **Interoperability** beats new formats  
2. **Privacy vs verifiability** is the core open problem  
3. **Governance** of spatial standards in decentralized environments remains unclear  

**TODO:** horizontal timeline of convenings / workshops

---

## Call to Action — What’s Next

- **Adopt & test:** wrap one GeoJSON or STAC Item as a signed LP record  
- **Contribute:** feedback and PRs toward v0.2  
- **Collaborate:** join proof-of-location benchmarking effort  

> Standards succeed by **use**, not prose.

**TODO:** QR code / shortlink to repo + Discord / mailing list**

---

### Acknowledgements & Links
- GISRUK 2025 paper — *Towards a Decentralized Geospatial Web*  
- *The Location Protocol Specification* — EASIER Data Initiative  
- *Towards Stronger Location Proofs* — Flashbots Collective  
- [decentralizedgeo.org](https://decentralizedgeo.org)  
- [docs.astral.global](https://docs.astral.global)

---

### Backup / FAQ

**Q:** Why not just STAC?  
**A:** LP can wrap a STAC Item; it adds signing + portability.
