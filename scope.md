# InstaPost — Instagram Post Generator

## Overview

A lightweight, mobile-first web app for creating Instagram posts. Users select templates, customize text and colors, preview their design in real-time, and export a 1080×1080 PNG ready for Instagram.

**Tech Stack:** React + Canvas API (frontend-only)  
**Deployment:** Railway  
**Target:** Mobile browsers (iOS Safari, Chrome Android)

---

## Core Features

### 1. Template Selection

- **Pre-built templates** — 8-12 curated designs covering common Instagram post styles:
  - Quote posts (centered text, decorative backgrounds)
  - Announcement posts (bold header + body text)
  - Promotional posts (product-style layouts)
  - Minimal posts (clean typography focus)
  - Gradient posts (vibrant color backgrounds)
  - Photo frame posts (border/frame overlays)

- **Template preview grid** — Visual thumbnails users can tap to select
- **Category filters** — Quick filtering by style (Quotes, Promo, Minimal, etc.)

### 2. Text Editing

- **Primary text field** — Main headline/quote (large, prominent)
- **Secondary text field** — Subtext, attribution, or call-to-action (smaller)
- **Font selection** — 6-8 curated Google Fonts per template
- **Text alignment** — Left, center, right options
- **Font size adjustment** — Slider or preset sizes (S/M/L/XL)
- **Real-time preview** — Canvas updates as user types

### 3. Color Customization

- **Background color picker** — Solid colors with preset palette + custom hex input
- **Text color picker** — Primary and secondary text colors
- **Accent color** — For decorative elements, borders, highlights
- **Preset color schemes** — 5-6 harmonious palettes per template
- **Gradient support** — 2-color gradients for background (select templates)

### 4. Canvas Preview

- **Live rendering** — Real-time updates on a Canvas element
- **1:1 aspect ratio** — Always displays at Instagram's square format
- **Responsive scaling** — Canvas fits mobile viewport, renders at 1080×1080 for export
- **Touch-friendly** — No drag-and-drop complexity; form-based editing only

### 5. Export & Download

- **One-tap download** — Generates 1080×1080 PNG
- **Mobile download handling** — Works with iOS/Android download prompts
- **File naming** — Auto-generated filename (e.g., `instapost-2025-12-10.png`)

---

## User Flow

```
1. Landing → See template grid
2. Select template → Opens editor view
3. Customize → Edit text, pick colors, choose fonts
4. Preview → See live canvas update
5. Download → Tap button, get PNG file
6. (Optional) → Go back, pick different template
```

---

## UI/UX Requirements

### Mobile-First Design

- **Single-column layout** — Stacked canvas + controls
- **Large touch targets** — Minimum 44×44px tap areas
- **Bottom-positioned controls** — Thumb-friendly editing
- **No horizontal scrolling** — Everything fits viewport width
- **Smooth transitions** — Polished feel between screens

### Editor Layout (Mobile)

```
┌─────────────────────────┐
│      Canvas Preview     │
│        (square)         │
│                         │
├─────────────────────────┤
│   [Text] [Colors] [Font]│  ← Tab navigation
├─────────────────────────┤
│                         │
│    Active Tab Controls  │
│                         │
├─────────────────────────┤
│    [ Download Button ]  │
└─────────────────────────┘
```

### Desktop Support

- Centered layout with max-width container
- Side-by-side canvas + controls at larger breakpoints
- Same functionality, adapted layout

---

## Technical Constraints

### Canvas Rendering

- All text and graphics rendered via Canvas 2D API
- Fonts must be loaded before rendering (use FontFace API or preload)
- Export uses `canvas.toDataURL('image/png')` or `toBlob()`

### No Backend Required

- All processing client-side
- Templates defined as JSON/JS objects
- No user accounts, no saving to server
- No image uploads (v1 — text and colors only)

### Performance

- Debounce canvas re-renders on rapid input
- Lazy load template thumbnails
- Minimize bundle size (no heavy UI libraries)

---

## Out of Scope (v1)

- Image uploads / background photos
- Drag-and-drop element positioning
- Multiple text layers beyond primary/secondary
- Undo/redo history
- Saving drafts / local storage persistence
- User accounts / cloud sync
- Sharing directly to Instagram (API limitation)
- Story format (1080×1920) — only square posts
- Video/animation export

---

## Template Data Structure

Each template defines:

| Property | Description |
|----------|-------------|
| `id` | Unique identifier |
| `name` | Display name |
| `category` | Filter category |
| `thumbnail` | Preview image URL |
| `background` | Default background (color/gradient) |
| `primaryText` | Position, default font, default size, default color |
| `secondaryText` | Position, default font, default size, default color |
| `decorations` | Optional shapes, lines, borders |
| `colorSchemes` | Array of preset palettes |
| `fonts` | Array of available fonts for this template |

---

## Success Criteria

1. **Works on mobile** — Fully functional on iPhone Safari and Chrome Android
2. **Fast** — Template loads < 1s, export completes < 2s
3. **Intuitive** — New user can create and download a post in under 60 seconds
4. **Quality output** — Exported PNG is crisp at 1080×1080, no blur or artifacts
5. **Reliable downloads** — Works across iOS/Android without workarounds

---

## Future Considerations (v2+)

- Background image uploads
- Additional text layers
- Element repositioning (drag-and-drop)
- Story format support
- Local storage for drafts
- More templates via community contributions
- Premium templates (monetization)

