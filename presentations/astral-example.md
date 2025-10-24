---
title: Astral Protocol
css: slides/assets/css/astral-theme.css
theme: white
highlightTheme: monokai
revealOptions:
  transition: 'fade'
  controls: true
  progress: true
  center: true
---

<!-- Title Slide -->
<!-- .slide: class="title-slide" -->

# Astral Protocol

<div class="subtitle">Spatial indexing for the decentralized web</div>

<div class="author">Building verifiable location infrastructure</div>

---

## The challenge

The web lacks native support for location:

- No standard for spatial addressing
- Centralized location services create dependencies
- Privacy concerns with location data
- Difficulty composing location across systems

<div class="highlight">
We need location primitives that are as fundamental and open as URLs
</div>

---

<!-- Section divider -->
<!-- .slide: class="section-slide" -->

## Core Concepts

---

## Spatial indexing

<div class="two-columns">

<div>

### Traditional approach

- Server-side databases
- Proprietary indexes
- Single source of truth
- Permission-based access

</div>

<div>

### Decentralized approach

- Content-addressed storage
- Open spatial indexes
- Multiple data sources
- Permissionless participation

</div>

</div>

The shift enables new patterns for location-based applications.

---

## Technical architecture

```javascript
// Spatial indexing with H3
import { geoToH3 } from 'h3-js';

const location = {
  lat: 37.7749,
  lng: -122.4194
};

// Generate spatial index at resolution 9
const cellId = geoToH3(
  location.lat,
  location.lng,
  9
);

// Store in content-addressed system
await ipfs.dag.put({
  location: cellId,
  data: metadata
});
```

<div class="text-small mt-2">
H3 hexagonal indexing provides consistent spatial resolution
</div>

---

## Key properties

**Content addressing**
Location data referenced by cryptographic hash, ensuring integrity and enabling deduplication.

**Hierarchical structure**
Spatial indexes at multiple resolutions allow efficient queries from global to local scale.

**Composability**
Standardized formats enable different systems to interoperate seamlessly.

---

<!-- Section divider -->
<!-- .slide: class="section-slide" -->

## Use Cases

---

## Decentralized mapping

<div class="card">

Traditional mapping platforms:
- Control data and APIs
- Can restrict or modify access
- Centralize location knowledge

**Astral enables:**
- Community-maintained spatial data
- Censorship-resistant mapping
- Composable location services
- User-owned location history

</div>

---

## Supply chain tracking

Track goods through supply chains without centralized coordination:

<div class="three-columns">

<div>

### Collection

Spatial attestations at checkpoints

</div>

<div>

### Verification

Cryptographic proof of location claims

</div>

<div>

### Audit

Immutable location history

</div>

</div>

---

## Environmental monitoring

> Decentralized networks of sensors can provide transparent, verifiable environmental data without relying on centralized authorities.
>
> <cite>— From permissionless observation to collective action</cite>

**Applications:**
- Air quality networks
- Water monitoring
- Biodiversity tracking
- Climate data collection

---

## Location-based governance

<div class="inquiry">
What new forms of organization emerge when location verification doesn't require institutional trust?
</div>

---

## Emerging patterns

Early experiments demonstrate:

- **Hyperlocal DAOs** — Governance tied to verified presence in geographic areas
- **Proof of location** — Sybil resistance for location-based applications
- **Spatial markets** — Location-aware exchanges and coordination
- **Community mapping** — Collective spatial knowledge graphs

---

<!-- Section divider -->
<!-- .slide: class="section-slide" -->

## Implementation

---

## Protocol layers

<div class="diagram">
  <div style="text-align: left; color: var(--text-color); font-family: var(--font-code); font-size: 0.9em;">
    <div style="padding: 1em; background: rgba(179, 214, 254, 0.1); border-radius: 8px; margin: 0.5em 0;">
      Application Layer — Custom logic and interfaces
    </div>
    <div style="padding: 1em; background: rgba(255, 199, 147, 0.1); border-radius: 8px; margin: 0.5em 0;">
      Query Layer — Spatial indexing and retrieval
    </div>
    <div style="padding: 1em; background: rgba(254, 179, 182, 0.1); border-radius: 8px; margin: 0.5em 0;">
      Storage Layer — Content-addressed data
    </div>
    <div style="padding: 1em; background: rgba(179, 214, 254, 0.1); border-radius: 8px; margin: 0.5em 0;">
      Network Layer — Peer-to-peer communication
    </div>
  </div>
</div>

---

## Data structures

```typescript
interface SpatialRecord {
  id: CID;                    // Content identifier
  location: H3Index;          // Spatial index
  timestamp: number;          // Unix timestamp
  data: Record<string, any>;  // Application data
  signature?: string;         // Optional attestation
}

interface SpatialQuery {
  region: H3Index[];          // Query region
  resolution: number;         // Index resolution
  filters?: QueryFilter[];    // Additional filters
}
```

---

## Network topology

<div class="two-columns">

<div>

### Distributed nodes

- No central coordination
- Peer-to-peer replication
- Fault-tolerant by design
- Geographic distribution

</div>

<div>

### Query routing

- Spatial partitioning
- Efficient lookup
- Caching strategies
- Load balancing

</div>

</div>

<div class="highlight mt-3">
Network scales horizontally as adoption grows
</div>

---

## Developer experience

```bash
# Install Astral SDK
npm install @astralprotocol/core

# Initialize client
import { Astral } from '@astralprotocol/core';
const astral = new Astral();

# Store location data
await astral.put({
  lat: 37.7749,
  lng: -122.4194,
  metadata: { type: 'sensor' }
});

# Query spatial region
const results = await astral.query({
  bounds: [37.7, -122.5, 37.8, -122.3],
  filters: { type: 'sensor' }
});
```

---

<!-- Section divider -->
<!-- .slide: class="section-slide" -->

## Looking Forward

---

## Current status

**In production:**
- Core protocol specification
- Reference implementation
- Developer tooling
- Example applications

**In development:**
- Enhanced query capabilities
- Cross-chain integrations
- Privacy-preserving techniques
- Performance optimizations

---

## Open challenges

<div class="two-columns">

<div>

### Technical

- Query performance at scale
- Privacy-preserving location proofs
- Cross-protocol compatibility
- Storage cost economics

</div>

<div>

### Coordination

- Standard data schemas
- Governance mechanisms
- Incentive alignment
- Community building

</div>

</div>

---

## Get involved

<div class="card">

### Join the network

- **Build**: Developer documentation at docs.astral.global
- **Contribute**: Open source on GitHub
- **Discuss**: Join our Discord community
- **Experiment**: Testnet available now

<div class="mt-3 gradient-text" style="font-size: 1.2em;">
astral.global
</div>

</div>

---

<!-- Final slide -->
<!-- .slide: class="title-slide" -->

<div style="font-size: 1.2em; color: var(--primary-color);">
Let's build spatial infrastructure for the open web
</div>

<div class="text-small mt-3">
hello@astral.global
</div>
