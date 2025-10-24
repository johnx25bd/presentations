# Reveal.js Presentations

Beautiful, professional slide decks from markdown.

> **Note**: This project lives inside a parent-level dev container. Open the **parent directory** (`presentations-container/`) in VS Code/Cursor, not this directory directly. See `../QUICKSTART.md` for setup instructions.

## Quick Start

### Initial Setup

This project uses a dev container. Open the parent directory in VS Code/Cursor and:

1. **Command Palette** → "Dev Containers: Reopen in Container"
2. Wait for container to build and install dependencies
3. Start creating presentations!

### Create a New Presentation

```bash
# Interactive creation
npm run new

# Or manually copy the template
cp slides/templates/full-template.md presentations/my-talk.md
```

### Develop & Present

```bash
# Live reload during development
npm run dev

# Then open http://localhost:1948/presentations/your-file.md
```

### Export

```bash
# Build static HTML
npm run build

# Output will be in dist/
```

## Project Structure

```
presentations-container/
├── .devcontainer/              # Dev container config
│   ├── devcontainer.json
│   ├── firewall-rules.yaml
│   └── setup-firewall.sh
├── presentations/              # Your presentations go here
│   └── *.md
├── slides/
│   ├── templates/              # Starter templates
│   │   ├── full-template.md
│   │   └── README.md
│   └── assets/
│       ├── css/
│       │   └── custom-theme.css   # Custom styling
│       └── images/             # Your images
├── dist/                       # Built presentations
└── scripts/
    └── new-presentation.js     # Helper script
```

## Workflow

### 1. Start from Template or Outline

```markdown
---
title: My Great Talk
---

<!-- .slide: class="title-slide" -->
# My Great Talk
## Making Things Better
Your Name | 2025

---

## Main Points

- Point one
- Point two
- Point three
```

### 2. Use Custom Styles

```markdown
<!-- Section divider -->
<!-- .slide: class="section-slide" -->
## New Section

---

## Content with Highlights

<div class="highlight">
💡 Important callout
</div>

---

## Two Columns

<div class="two-columns">
<div>

### Left
Content here

</div>
<div>

### Right
More content

</div>
</div>
```

### 3. Preview & Iterate

- Save your markdown
- Browser auto-refreshes
- Iterate quickly

### 4. Present or Export

- Present directly from browser (with speaker notes support)
- Export to PDF via print dialog
- Export to static HTML for hosting

## Custom Theme Features

The included `custom-theme.css` provides:

- **Modern color palette** with gradients
- **Beautiful typography** optimized for readability
- **Pre-styled components**: title slides, section dividers, highlight boxes, cards
- **Two-column layouts** for comparisons
- **Code syntax highlighting** with custom styling
- **Responsive design** that looks great on any screen

## Customizing Themes

The base theme uses CSS variables, making it easy to customize per-presentation.

### Quick Override (Inline)

Add a `<style>` block in your presentation's frontmatter:

```markdown
---
title: My Talk
---

<style>
:root {
  /* Change just the colors */
  --primary-color: #10b981;
  --secondary-color: #059669;

  /* Or typography */
  --font-body: 'Georgia', serif;
  --font-size-base: 36px;

  /* Or spacing */
  --spacing-lg: 3em;
}
</style>

<!-- Your slides here -->
```

### Available Variables

**Colors:**
- `--primary-color`, `--secondary-color`, `--accent-color`
- `--text-color`, `--bg-color`, `--heading-color`, `--code-bg`
- `--gradient` (auto-updates with primary/secondary)

**Typography:**
- `--font-body`, `--font-heading`, `--font-code`
- `--font-size-base`, `--line-height-base`
- `--heading-h1-size`, `--heading-h2-size`, etc.

**Spacing:**
- `--spacing-xs`, `--spacing-sm`, `--spacing-md`, `--spacing-lg`, `--spacing-xl`

**Layout:**
- `--column-gap`, `--radius-sm/md/lg`, `--shadow-sm/md/lg`

See `slides/templates/custom-colors-example.md` for a working example.

### Per-Presentation CSS Files

For complex customizations:

```
presentations/
  my-talk/
    slides.md
    custom.css
    images/
    data/
```

Then reference in your markdown:
```markdown
---
title: My Talk
css:
  - slides/assets/css/custom-theme.css
  - presentations/my-talk/custom.css
---
```

## Interactive Visualizations

Reveal.js presentations are just HTML, so you can embed any web-based visualization.

### Inline Visualizations

```markdown
---

## Data Visualization

<div id="my-chart" style="height: 400px;"></div>

<script src="https://cdn.plot.ly/plotly-2.26.0.min.js"></script>
<script>
Plotly.newPlot('my-chart', [{
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter'
}]);
</script>
```

### Reusable Visualizations

Put shared code in `slides/assets/js/`:

```javascript
// slides/assets/js/map-viz.js
function createMap(elementId, data) {
  // Your D3/Leaflet/Mapbox code
}
```

Load in frontmatter:
```markdown
---
title: My Talk
scripts:
  - slides/assets/js/map-viz.js
---
```

### Recommended Libraries

- **D3.js** - Full control, great for custom visualizations
- **Plotly.js** - Interactive charts out of the box
- **Leaflet** / **Mapbox GL JS** - Geospatial mapping
- **Observable Plot** - Modern, clean API for common charts
- **Three.js** - 3D visualizations

### Data Files

Store data in `slides/assets/data/` and load via fetch:

```javascript
fetch('slides/assets/data/my-data.json')
  .then(r => r.json())
  .then(data => createVisualization(data));
```

## Tips

### Speaker Notes

Add notes that only you see:

```markdown
---

## Slide Content

Note: Remember to mention the demo here
```

### Fragments (Incremental Reveals)

```markdown
- Item 1 <!-- .element: class="fragment" -->
- Item 2 <!-- .element: class="fragment" -->
- Item 3 <!-- .element: class="fragment" -->
```

### Images

```markdown
![Description](slides/assets/images/diagram.png)
<!-- .element: style="width: 60%;" -->
```

### Custom Slide Backgrounds

```markdown
<!-- .slide: data-background="#2563eb" -->
## White Text on Blue Background
```

## Keyboard Shortcuts

- **Arrow keys**: Navigate slides
- **F**: Fullscreen
- **S**: Speaker view
- **O**: Overview mode
- **B**: Pause (black screen)
- **?**: Help

## Reveal.js Documentation

For advanced features: https://revealjs.com/

## Examples

See `slides/templates/full-template.md` for a comprehensive example showcasing all features.
