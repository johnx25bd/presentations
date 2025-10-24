---
title: Custom Theme Example
theme: white
---

<!-- Override CSS variables for this presentation -->
<style>
:root {
  /* Custom color palette - Earth tones */
  --primary-color: #10b981;
  --secondary-color: #059669;
  --accent-color: #f59e0b;
  --heading-color: #065f46;

  /* Or try a dark theme */
  /* --bg-color: #1e293b;
  --text-color: #e2e8f0;
  --heading-color: #f1f5f9;
  --code-bg: #334155; */
}
</style>

<!-- Title Slide -->
<!-- .slide: class="title-slide" -->

# Custom Colors

<div class="subtitle">Same structure, different look</div>

<div class="author">Just override the CSS variables</div>

---

## It's That Simple

Override any variable in a `<style>` block:

```markdown
<style>
:root {
  --primary-color: #10b981;
  --font-body: 'Georgia', serif;
  --heading-h1-size: 4em;
}
</style>
```

All the styling updates automatically.

---

## Available Variables

**Colors:**
- `--primary-color`, `--secondary-color`, `--accent-color`
- `--text-color`, `--bg-color`, `--heading-color`, `--code-bg`

**Typography:**
- `--font-body`, `--font-heading`, `--font-code`
- `--font-size-base`, `--line-height-base`
- `--heading-h1-size` through `--heading-h4-size`

**Spacing:**
- `--spacing-xs` through `--spacing-xl`

**Layout:**
- `--column-gap`, `--radius-*`, `--shadow-*`

---

## Mix and Match

<div class="two-columns">

<div>

### Base Theme

Keep most defaults, just change colors for your brand.

</div>

<div>

### Full Custom

Override everything - fonts, sizes, spacing, colors.

</div>

</div>

---

<!-- .slide: class="section-slide" -->

## The gradient updates too

Because it uses `var(--primary-color)` and `var(--secondary-color)`

---

## Next Steps

1. Copy this example
2. Adjust variables to match your style
3. Or create `presentations/my-talk/custom.css` for complex changes

See `slides/assets/css/custom-theme.css` for all available variables.
