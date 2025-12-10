# InstaPost UI Design

## Screen 1: Template Picker

```
┌────────────────────────────────────────┐
│                                        │
│            ✦ InstaPost                 │
│       Create stunning posts fast       │
│                                        │
├────────────────────────────────────────┤
│                                        │
│   ┌─────────────┐  ┌─────────────┐     │
│   │             │  │             │     │
│   │    BOLD     │  │    SOFT     │     │
│   │   QUOTE     │  │  GRADIENT   │     │
│   │             │  │             │     │
│   │  ┌───────┐  │  │  ┌───────┐  │     │
│   │  │ Your  │  │  │  │ Your  │  │     │
│   │  │ text  │  │  │  │ text  │  │     │
│   │  │ here  │  │  │  │ here  │  │     │
│   │  └───────┘  │  │  └───────┘  │     │
│   │             │  │             │     │
│   └─────────────┘  └─────────────┘     │
│                                        │
│   ┌─────────────┐  ┌─────────────┐     │
│   │             │  │             │     │
│   │   MINIMAL   │  │   RETRO     │     │
│   │    DARK     │  │    POP      │     │
│   │             │  │             │     │
│   │  ┌───────┐  │  │  ┌───────┐  │     │
│   │  │ Your  │  │  │  │ Your  │  │     │
│   │  │ text  │  │  │  │ text  │  │     │
│   │  │ here  │  │  │  │ here  │  │     │
│   │  └───────┘  │  │  └───────┘  │     │
│   │             │  │             │     │
│   └─────────────┘  └─────────────┘     │
│                                        │
│   ┌─────────────┐                      │
│   │             │                      │
│   │    CLEAN    │                      │
│   │    WHITE    │                      │
│   │             │                      │
│   │  ┌───────┐  │                      │
│   │  │ Your  │  │                      │
│   │  │ text  │  │                      │
│   │  │ here  │  │                      │
│   │  └───────┘  │                      │
│   │             │                      │
│   └─────────────┘                      │
│                                        │
└────────────────────────────────────────┘
```

---

## Screen 2: Editor

```
┌────────────────────────────────────────┐
│  ←  Bold Quote                         │
├────────────────────────────────────────┤
│                                        │
│                                        │
│      ┌──────────────────────────┐      │
│      │                          │      │
│      │                          │      │
│      │                          │      │
│      │                          │      │
│      │      ╔══════════════╗    │      │
│      │      ║              ║    │      │
│      │      ║  YOUR TEXT   ║    │      │
│      │      ║    GOES      ║    │      │
│      │      ║    HERE      ║    │      │
│      │      ║              ║    │      │
│      │      ╚══════════════╝    │      │
│      │                          │      │
│      │                          │      │
│      │                          │      │
│      │                          │      │
│      └──────────────────────────┘      │
│                                        │
│            CANVAS PREVIEW              │
│              (1:1 ratio)               │
│                                        │
├────────────────────────────────────────┤
│                                        │
│        ●───○───○───○                   │
│                                        │
│       COLOR PALETTE SELECTOR           │
│    (filled dot = selected scheme)      │
│                                        │
├────────────────────────────────────────┤
│                                        │
│  ┌──────────────────────────────────┐  │
│  │                                  │  │
│  │  Type your message here...       │  │
│  │                                  │  │
│  └──────────────────────────────────┘  │
│                                        │
│           124 / 150 characters         │
│                                        │
├────────────────────────────────────────┤
│                                        │
│  ┌──────────────────────────────────┐  │
│  │                                  │  │
│  │         ⬇  Download Post         │  │
│  │                                  │  │
│  └──────────────────────────────────┘  │
│                                        │
└────────────────────────────────────────┘
```

---

## Component Breakdown

### Header Bar
```
┌────────────────────────────────────────┐
│  ←  Bold Quote                         │
└────────────────────────────────────────┘
     │       │
     │       └── Template name (centered or left)
     │
     └── Back arrow (returns to picker)
```

### Canvas Preview Area
```
┌──────────────────────────────────────┐
│                                      │
│    ┌────────────────────────────┐    │
│    │                            │    │
│    │                            │    │
│    │        LIVE CANVAS         │    │  ← 1:1 square ratio
│    │         PREVIEW            │    │  ← Max width = screen - padding
│    │                            │    │  ← Renders at 1080x1080
│    │                            │    │
│    └────────────────────────────┘    │
│                                      │
└──────────────────────────────────────┘
```

### Color Palette Selector
```
┌──────────────────────────────────────┐
│                                      │
│         ●───○───○───○                │
│         │   │   │   │                │
│         │   │   │   └── Palette 4    │
│         │   │   └── Palette 3        │
│         │   └── Palette 2            │
│         └── Palette 1 (selected)     │
│                                      │
│   Tap a dot to switch color scheme   │
│   Canvas updates instantly           │
│                                      │
└──────────────────────────────────────┘
```

Alternative: Color swatches
```
┌──────────────────────────────────────┐
│                                      │
│    ┌────┐ ┌────┐ ┌────┐ ┌────┐      │
│    │████│ │░░░░│ │▓▓▓▓│ │    │      │
│    │████│ │░░░░│ │▓▓▓▓│ │    │      │
│    └────┘ └────┘ └────┘ └────┘      │
│      ▲                               │
│      └── Selected (has border)       │
│                                      │
└──────────────────────────────────────┘
```

### Text Input
```
┌──────────────────────────────────────┐
│                                      │
│  ┌────────────────────────────────┐  │
│  │                                │  │
│  │  Dreams don't work unless      │  │  ← Multi-line textarea
│  │  you do.                       │  │  ← Auto-expands
│  │                                │  │  ← Placeholder when empty
│  └────────────────────────────────┘  │
│                                      │
│           89 / 150                   │  ← Character count
│                                      │  ← Turns red near limit
└──────────────────────────────────────┘
```

### Download Button
```
┌──────────────────────────────────────┐
│                                      │
│  ┌────────────────────────────────┐  │
│  │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│  │
│  │▓▓▓▓▓▓▓▓  ⬇  Download Post  ▓▓▓▓│  │  ← Primary color fill
│  │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│  │  ← Full width
│  └────────────────────────────────┘  │  ← Large tap target
│                                      │
└──────────────────────────────────────┘
```

---

## Template Card (Picker)

```
┌─────────────────────┐
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│  ← Background color/gradient preview
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓ ┌──────────┐ ▓▓▓│
│▓▓▓▓ │  Sample  │ ▓▓▓│  ← Preview text
│▓▓▓▓ │   Text   │ ▓▓▓│
│▓▓▓▓ └──────────┘ ▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
├─────────────────────┤
│    BOLD QUOTE       │  ← Template name
└─────────────────────┘
```

---

## Interaction States

### Button States
```
Normal:          Pressed:         Disabled:
┌──────────┐    ┌──────────┐    ┌──────────┐
│▓▓▓▓▓▓▓▓▓▓│    │██████████│    │░░░░░░░░░░│
│▓ Download│    │█Download█│    │░Download░│
│▓▓▓▓▓▓▓▓▓▓│    │██████████│    │░░░░░░░░░░│
└──────────┘    └──────────┘    └──────────┘
```

### Template Card Tap
```
Normal:                    Tapped:
┌─────────────────┐       ╔═════════════════╗
│                 │       ║                 ║
│    Template     │  -->  ║    Template     ║
│                 │       ║                 ║
└─────────────────┘       ╚═════════════════╝
                          (brief highlight, then navigate)
```

---

## Spacing & Sizing

```
┌────────────────────────────────────────┐
│←──────────── 100vw ──────────────────→│
│                                        │
│  ←─ 16px ─→┌────────────┐←─ 16px ─→   │
│            │            │              │
│            │   Canvas   │              │  Canvas: calc(100vw - 32px)
│            │  Preview   │              │  Max: 400px on larger phones
│            │            │              │
│            └────────────┘              │
│                                        │
│            ←── 12px ──→                │  Gap between elements
│                                        │
│  ←─ 16px ─→┌────────────┐←─ 16px ─→   │
│            │   Input    │              │  Full width inputs
│            └────────────┘              │
│                                        │
│            ←── 16px ──→                │  Bottom padding
│                                        │
└────────────────────────────────────────┘
```

---

## Responsive Behavior

### Mobile (< 480px)
- Single column, stacked layout
- Canvas takes full width minus padding
- Controls stack below canvas

### Tablet / Desktop (> 768px)
```
┌─────────────────────────────────────────────────────────────┐
│  ←  Bold Quote                              ✦ InstaPost     │
├─────────────────────────────────────────────────────────────┤
│                         │                                   │
│                         │                                   │
│   ┌─────────────────┐   │   ┌─────────────────────────┐    │
│   │                 │   │   │                         │    │
│   │                 │   │   │  Type your message...   │    │
│   │     CANVAS      │   │   │                         │    │
│   │     PREVIEW     │   │   └─────────────────────────┘    │
│   │                 │   │                                   │
│   │                 │   │   ●───○───○───○                   │
│   │                 │   │                                   │
│   └─────────────────┘   │   ┌─────────────────────────┐    │
│                         │   │     ⬇  Download Post    │    │
│                         │   └─────────────────────────┘    │
│                         │                                   │
└─────────────────────────────────────────────────────────────┘
       Canvas Side                    Controls Side
```

---

## Color System (CSS Variables)

```
Primary Colors:
┌─────────────────────────────────────┐
│  --bg-primary      │  #0a0a0a       │  Dark background
│  --bg-secondary    │  #1a1a1a       │  Card backgrounds
│  --text-primary    │  #ffffff       │  Main text
│  --text-secondary  │  #888888       │  Muted text
│  --accent          │  #6366f1       │  Buttons, highlights
│  --accent-hover    │  #4f46e5       │  Button hover
└─────────────────────────────────────┘
```

---

## Typography

```
┌─────────────────────────────────────┐
│  App Title        │  24px / 700     │
│  Template Name    │  18px / 600     │
│  Body Text        │  16px / 400     │
│  Button Text      │  16px / 600     │
│  Helper Text      │  14px / 400     │
│  Character Count  │  12px / 400     │
└─────────────────────────────────────┘

Font: System font stack (fast loading)
-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
```

---

## Animation Notes

```
Page Transitions:
- Template picker → Editor: Slide left (200ms ease-out)
- Editor → Template picker: Slide right (200ms ease-out)

Micro-interactions:
- Button press: Scale down to 0.98 (100ms)
- Color dot tap: Pulse animation (150ms)
- Canvas update: Fade transition (100ms)

Download:
- Button shows checkmark briefly after download starts
- Returns to normal state after 1.5s
```

