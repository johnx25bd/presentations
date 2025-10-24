---
title: Location as Infrastructure
css: slides/assets/css/johnx-theme.css
theme: white
highlightTheme: github
revealOptions:
  transition: 'dissolve'
  controls: true
  progress: true
  center: true
---

<!-- Title Slide -->
<!-- .slide: class="title-slide" -->

# Location as Infrastructure

<div class="subtitle">How place becomes protocol</div>

<div class="author">John X | 2025</div>

---

<!-- Inquiry slide -->
<div class="inquiry">
How can location be verified without trusting a single authority?
</div>

---

## Context

The global positioning infrastructure we rely on is centralized by necessity:

- GPS controlled by US Department of Defense
- Cellular triangulation owned by telecom operators
- IP geolocation managed by regional registries

This creates dependencies that shape what kinds of systems we can build.

---

## Three approaches

<div class="two-columns">

<div>

### Centralized trust

Faster to implement, easier to reason about, brittle under adversarial conditions.

</div>

<div>

### Decentralized verification

Slower, more complex, resilient to single points of failure.

</div>

</div>

The choice isn't technical. It's about which trade-offs align with the system's purpose.

---

## Current state

<div class="three-columns">

<div>

### Infrastructure

- GNSS constellations
- Cell tower networks
- Wi-Fi positioning

</div>

<div>

### Standards

- WGS84 datum
- GeoJSON format
- HTTP(S) transport

</div>

<div>

### Constraints

- Urban canyon effects
- Indoor positioning gaps
- Privacy concerns

</div>

</div>

---

<!-- Section divider -->
<!-- .slide: class="section-slide" -->

## A shift in substrate

---

## Cryptographic location proofs

Rather than broadcasting position, nodes can prove proximity through cryptographic attestation.

<div class="highlight">
This inverts the trust model: instead of believing a coordinate claim, we verify that multiple independent witnesses observed the same event at roughly the same time.
</div>

The mechanism borrows from distributed systems research—consensus without coordination.

---

## Implementation patterns

```javascript
// Proximity attestation structure
{
  "witness": "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  "timestamp": 1704067200,
  "location_hash": "h3:8928308280fffff",
  "signature": "0x...",
  "proof_of_work": {
    "difficulty": 20,
    "nonce": "a8f3..."
  }
}
```

<div class="text-small mt-2">
Each witness contributes a signed attestation. Location privacy preserved through hashing and zero-knowledge proofs.
</div>

---

## Design considerations

When building on this:

- **Granularity**: How precise does the location claim need to be?
- **Latency**: Can verification happen asynchronously?
- **Adversarial models**: What attacks are we defending against?

> The goal isn't perfect accuracy.
> It's sufficient confidence for the application's threat model.
>
> <cite>— Security by design principle</cite>

---

## Case study

<div class="diagram">
  <div style="text-align: center; color: var(--secondary-color);">
    <div>[Diagram: Multi-witness attestation flow]</div>
    <div style="font-size: 0.85em; margin-top: 1em;">
      Node A broadcasts → Witnesses B, C, D attest → Aggregate proof formed → Verification on-chain
    </div>
  </div>
</div>

<div class="text-small mt-3">
In field trials, five witnesses within 100m provided sufficient confidence for supply chain tracking applications.
</div>

---

<!-- Inquiry slide -->
<div class="inquiry">
What applications become possible when location doesn't require trust?
</div>

---

## Emergent uses

Early experiments suggest:

- Autonomous supply chain auditing
- Decentralized ride-sharing without platform intermediaries
- Proof-of-presence for local governance
- Spatial smart contracts

These aren't hypothetical. Implementations exist in testnet.

---

## Constraints remain

This approach doesn't solve:

- GPS spoofing (though it makes it harder)
- Sybil attacks (witness collusion still possible)
- Indoor positioning (same limitations as GNSS)

<div class="highlight mt-3">
What it does provide: resistance to single-point censorship and reduced dependence on legacy infrastructure.
</div>

---

## Open questions

- How do we incentivize honest witnessing?
- What's the minimum viable witness set?
- How does this compose with existing geospatial standards?

The research is ongoing. The substrate is stabilizing.

---

<!-- Section divider -->
<!-- .slide: class="section-slide" -->

## Implications for infrastructure

---

## From service to protocol

When location becomes verifiable without centralized authorities:

<div class="two-columns mt-3">

<div>

### Changes

- Trust assumptions shift
- New attack surfaces emerge
- Coordination costs increase

</div>

<div>

### Opportunities

- Censorship resistance
- Reduced platform risk
- Composable with other protocols

</div>

</div>

---

## Near-term directions

1. **Reference implementations** — Open-source witness node software
2. **Standard formats** — Interoperable attestation schemas
3. **Security audits** — Formal verification of proof systems
4. **Field deployment** — Real-world testing in adversarial environments

The work is incremental. The trajectory is clear.

---

## Further reading

<div class="text-small">

- **Cryptographic Location Proofs** — Rasmussen et al., IEEE Security & Privacy, 2019
- **Spatial Protocols** — Research notes, github.com/spatialprotocol
- **Zero-Knowledge Location Services** — Thesis, MIT Media Lab, 2023

</div>

<div class="mt-4">
Contact: john.iv@x25bd.com
Code: github.com/x25bd
</div>

---

<!-- Final slide - minimal -->
<!-- .slide: class="title-slide" -->

<div style="font-size: 0.9em; color: var(--secondary-color);">
Questions welcome
</div>
