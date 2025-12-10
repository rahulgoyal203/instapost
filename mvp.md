# InstaPost MVP

## The 30-Second Promise

User lands → picks a template → types their text → taps download → done.

No decisions that slow them down. Every template looks stunning out of the box.

---

## What Makes It Magical

1. **Templates that look expensive** — Professional designs that would cost $20 on Creative Market
2. **Instant gratification** — Type and watch your words appear beautifully rendered
3. **Zero learning curve** — No tutorials, no onboarding, just obvious buttons
4. **One perfect output** — Crisp 1080×1080 PNG, ready for Instagram

---

## MVP Features

### Templates (5 total)

Keep it tight. Five templates, each with a distinct vibe:

| Template | Style | Mood |
|----------|-------|------|
| **Bold Quote** | Large centered text, geometric accent shapes | Confident, punchy |
| **Soft Gradient** | Dreamy gradient background, elegant serif font | Calm, inspirational |
| **Minimal Dark** | Black background, clean sans-serif, subtle border | Modern, sleek |
| **Retro Pop** | Bright colors, playful font, decorative elements | Fun, energetic |
| **Clean White** | White background, minimal typography, lots of whitespace | Professional, fresh |

Each template is a complete design. User just adds their words.

### Text Input

- **One text field** — The main message (quote, headline, announcement)
- **Character limit** — Soft limit with visual indicator (~150 chars looks best)
- **Live preview** — Canvas updates as they type (debounced)

That's it. No secondary text, no font picker, no alignment options. The template defines everything.

### Color Schemes

- **4 preset palettes per template** — One tap to switch
- **No color pickers** — Presets only, all guaranteed to look good
- **Smart defaults** — Each template loads with its best palette selected

Example palettes for "Bold Quote":
- Electric (black bg, neon yellow text)
- Ocean (deep blue bg, white text)
- Sunset (coral bg, cream text)
- Mono (white bg, black text)

### Canvas Preview

- **Always visible** — Top half of mobile screen
- **Real-time rendering** — Text appears as user types
- **Tap to focus** — Shows fullscreen preview (optional nice-to-have)

### Download

- **Big obvious button** — "Download" at bottom of screen
- **Direct PNG save** — 1080×1080, high quality
- **Works on mobile** — Triggers native download/share sheet

---

## User Flow (5 steps, 30 seconds)

```
┌─────────────────────────────────────────────────────────────┐
│  1. LAND (2s)                                               │
│     See 5 beautiful template cards                          │
│     Tap one that matches your vibe                          │
├─────────────────────────────────────────────────────────────┤
│  2. TYPE (15s)                                              │
│     Text field is auto-focused                              │
│     Type your message, watch it appear on canvas            │
├─────────────────────────────────────────────────────────────┤
│  3. STYLE (8s) — optional                                   │
│     Tap color palette dots to try different schemes         │
│     Skip if default looks good                              │
├─────────────────────────────────────────────────────────────┤
│  4. DOWNLOAD (3s)                                           │
│     Tap the big download button                             │
│     PNG saves to device                                     │
├─────────────────────────────────────────────────────────────┤
│  5. DONE                                                    │
│     Post to Instagram                                       │
└─────────────────────────────────────────────────────────────┘
```

---

## Mobile Layout

### Template Picker (Home)

```
┌─────────────────────────┐
│      InstaPost          │  ← Simple header
├─────────────────────────┤
│ ┌─────┐ ┌─────┐ ┌─────┐ │
│ │     │ │     │ │     │ │  ← Template cards
│ │  1  │ │  2  │ │  3  │ │     (horizontal scroll
│ │     │ │     │ │     │ │      or 2-column grid)
│ └─────┘ └─────┘ └─────┘ │
│ ┌─────┐ ┌─────┐         │
│ │     │ │     │         │
│ │  4  │ │  5  │         │
│ │     │ │     │         │
│ └─────┘ └─────┘         │
└─────────────────────────┘
```

### Editor

```
┌─────────────────────────┐
│  ←  Bold Quote          │  ← Back button + template name
├─────────────────────────┤
│                         │
│    ┌───────────────┐    │
│    │               │    │
│    │    CANVAS     │    │  ← Live preview (square)
│    │   PREVIEW     │    │
│    │               │    │
│    └───────────────┘    │
│                         │
├─────────────────────────┤
│  ● ● ● ●                │  ← Color palette dots
├─────────────────────────┤
│ ┌─────────────────────┐ │
│ │ Type your text...   │ │  ← Text input
│ └─────────────────────┘ │
├─────────────────────────┤
│   [ ⬇ Download Post ]   │  ← Primary action
└─────────────────────────┘
```

---

## Tech Decisions

| Decision | Choice | Why |
|----------|--------|-----|
| **State management** | useState/useReducer | No Redux, app is simple |
| **Styling** | CSS Modules or vanilla CSS | No Tailwind, keep bundle tiny |
| **Fonts** | 5 Google Fonts (1 per template) | Preload on app init |
| **Canvas** | Native Canvas 2D API | No fabric.js, keep it lightweight |
| **Build** | Vite + React | Fast dev, small production build |
| **Routing** | None | Two views, just toggle state |

---

## What's NOT in MVP

- ❌ Secondary/subtitle text
- ❌ Font selection
- ❌ Custom color picker
- ❌ Text alignment controls
- ❌ Font size controls
- ❌ Image uploads
- ❌ Undo/redo
- ❌ Local storage / drafts
- ❌ Desktop-specific layouts (mobile-first, desktop just works)

---

## Definition of Done

MVP ships when:

- [ ] 5 templates render correctly on canvas
- [ ] Text input updates canvas in real-time
- [ ] 4 color schemes work per template
- [ ] Download produces crisp 1080×1080 PNG
- [ ] Works on iPhone Safari
- [ ] Works on Chrome Android
- [ ] Loads in under 2 seconds
- [ ] Deployed on Railway

---

## The Magic Formula

```
Beautiful defaults + Minimal choices + Instant output = Delight
```

Users don't want 100 options. They want to feel like a designer in 30 seconds.

