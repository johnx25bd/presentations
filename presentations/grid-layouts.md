---
title: Grid Layout Examples
transition: dissolve
css: slides/assets/css/johnx-theme.css
---

# Grid Layout Guide

Examples of all grid layouts available in the John X theme.

---

## Equal columns

<div class="two-columns">
<div>

### Column 1
Content here

</div>
<div>

### Column 2
Content here

</div>
</div>

```markdown
<div class="two-columns">
  <div>Column 1</div>
  <div>Column 2</div>
</div>
```

---

## Three equal columns

<div class="three-columns">
<div>

### First
Point A

</div>
<div>

### Second
Point B

</div>
<div>

### Third
Point C

</div>
</div>

---

## Four equal columns

<div class="four-columns">
<div>

### A
First

</div>
<div>

### B
Second

</div>
<div>

### C
Third

</div>
<div>

### D
Fourth

</div>
</div>

Great for icons, features, or process steps

---

## Asymmetric: Sidebar + Main

<div class="grid-1-2">
<div>

### Sidebar
- Nav
- Links
- Metadata

</div>
<div>

### Main content
This column is twice as wide as the sidebar. Great for showing a small navigation or metadata column alongside main content.

</div>
</div>

```markdown
<div class="grid-1-2">
  <div>Sidebar (1fr)</div>
  <div>Main (2fr)</div>
</div>
```

---

## Asymmetric variations

<div class="grid-1-3">
<div>

**1:3**
Small

</div>
<div>

**Ratio**
This side is 3x wider. Perfect for labels + content, or icons + descriptions.

</div>
</div>

<div class="grid-2-1 mt-2">
<div>

**2:1**
This side is 2x wider. Good for emphasis on left content.

</div>
<div>

**Ratio**
Small

</div>
</div>

Available: `.grid-1-2`, `.grid-2-1`, `.grid-1-3`, `.grid-3-1`

---

## Complex layouts with spanning

<div class="three-columns">
<div class="span-2">

### This spans 2 columns
Takes up more horizontal space. Great for featured content or images.

</div>
<div>

### Normal
Single column

</div>
</div>

```markdown
<div class="three-columns">
  <div class="span-2">Wide item</div>
  <div>Normal</div>
</div>
```

---

## Auto-fit responsive grid

<div class="grid-auto">
<div class="card">Item 1</div>
<div class="card">Item 2</div>
<div class="card">Item 3</div>
<div class="card">Item 4</div>
<div class="card">Item 5</div>
<div class="card">Item 2</div>

</div>

Automatically wraps to fit available space. Each item minimum 200px wide.

```markdown
<div class="grid-auto">
  <div>Item 1</div>
  <div>Item 2</div>
  <!-- adds more as needed -->
</div>
```

---

## Custom gap spacing

<div class="two-columns gap-lg">
<div>

### Large gap
More breathing room between columns

</div>
<div>

### Between
Notice the wider spacing

</div>
</div>

Add `.gap-sm`, `.gap-md`, or `.gap-lg` to any grid

---

## Vertical alignment

<div class="two-columns items-center">
<div>

### Short content

</div>
<div>

### Tall content
With multiple lines of text that make this column taller than the other one. Notice how they're vertically centered.

</div>
</div>

Options: `.items-start` (default), `.items-center`, `.items-end`, `.items-stretch`

---

## Practical example: Feature grid

<div class="three-columns">

<div class="card">

### Fast
Optimized performance from the ground up

</div>

<div class="card">

### Secure
End-to-end encryption by default

</div>

<div class="card">

### Open
Fully open source and auditable

</div>

</div>

---

## Practical example: Process steps

<div class="four-columns gap-sm items-center">

<div style="text-align: center;">

**1. Collect**
Gather data

↓

</div>

<div style="text-align: center;">

**2. Process**
Transform

↓

</div>

<div style="text-align: center;">

**3. Analyze**
Extract insights

↓

</div>

<div style="text-align: center;">

**4. Act**
Deploy changes

</div>

</div>

---

## Practical example: Comparison table

<div class="grid-1-2">

<div>

**Traditional**
- Centralized
- Permissioned
- Opaque
- Slow to change

</div>

<div>

**Decentralized**
- Distributed
- Permissionless
- Transparent
- Adaptive

</div>

</div>

---

## Combining with fragments

<div class="two-columns">

<div>

### Build up content

- First point <!-- .element: class="fragment" -->
- Second point <!-- .element: class="fragment" -->
- Third point <!-- .element: class="fragment" -->

</div>

<div class="fragment">

### Then reveal
This entire column appears last

</div>

</div>

---

## Tips

**Choose the right grid:**
- `.two-columns` - Most common, side-by-side content
- `.three-columns` - Features, categories, steps
- `.grid-1-2` or `.grid-2-1` - Emphasis on one side
- `.grid-auto` - Variable number of items
- `.span-2` - Feature one item in multi-column layout

**Combine with:**
- `.card` for contained items
- `.highlight` for callouts
- `.fragment` for progressive disclosure
- Custom gap and alignment classes

---

## Grid cheat sheet

```
Columns:
  .two-columns, .three-columns, .four-columns

Asymmetric:
  .grid-1-2, .grid-2-1, .grid-1-3, .grid-3-1

Responsive:
  .grid-auto

Gaps:
  .gap-sm, .gap-md, .gap-lg

Alignment:
  .items-start, .items-center, .items-end, .items-stretch

Spanning:
  .span-2, .span-3, .span-4
```
