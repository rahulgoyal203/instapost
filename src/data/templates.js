// 5 Templates with 4 color schemes each
// Each template has a distinct vibe and rendering logic

export const templates = [
  {
    id: 'bold-quote',
    name: 'Bold Quote',
    description: 'Large centered text with geometric accents',
    font: 'Bebas Neue',
    fontWeight: '400',
    fontSize: 72,
    lineHeight: 1.1,
    textTransform: 'uppercase',
    colorSchemes: [
      {
        id: 'electric',
        name: 'Electric',
        background: '#0a0a0a',
        text: '#f0ff00',
        accent: '#f0ff00'
      },
      {
        id: 'ocean',
        name: 'Ocean',
        background: '#0f172a',
        text: '#ffffff',
        accent: '#38bdf8'
      },
      {
        id: 'sunset',
        name: 'Sunset',
        background: '#ff6b6b',
        text: '#fff5e6',
        accent: '#fff5e6'
      },
      {
        id: 'mono',
        name: 'Mono',
        background: '#ffffff',
        text: '#0a0a0a',
        accent: '#0a0a0a'
      }
    ],
    render: (ctx, text, colors, width) => {
      // Background
      ctx.fillStyle = colors.background
      ctx.fillRect(0, 0, width, width)

      // Geometric accents - corner brackets
      const bracketSize = width * 0.15
      const bracketThickness = width * 0.015
      const margin = width * 0.08
      ctx.strokeStyle = colors.accent
      ctx.lineWidth = bracketThickness
      ctx.lineCap = 'square'

      // Top-left bracket
      ctx.beginPath()
      ctx.moveTo(margin, margin + bracketSize)
      ctx.lineTo(margin, margin)
      ctx.lineTo(margin + bracketSize, margin)
      ctx.stroke()

      // Top-right bracket
      ctx.beginPath()
      ctx.moveTo(width - margin - bracketSize, margin)
      ctx.lineTo(width - margin, margin)
      ctx.lineTo(width - margin, margin + bracketSize)
      ctx.stroke()

      // Bottom-left bracket
      ctx.beginPath()
      ctx.moveTo(margin, width - margin - bracketSize)
      ctx.lineTo(margin, width - margin)
      ctx.lineTo(margin + bracketSize, width - margin)
      ctx.stroke()

      // Bottom-right bracket
      ctx.beginPath()
      ctx.moveTo(width - margin - bracketSize, width - margin)
      ctx.lineTo(width - margin, width - margin)
      ctx.lineTo(width - margin, width - margin - bracketSize)
      ctx.stroke()

      // Text
      if (text) {
        const fontSize = width * 0.067
        ctx.font = `400 ${fontSize}px "Bebas Neue", sans-serif`
        ctx.fillStyle = colors.text
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'

        const maxWidth = width * 0.7
        const lines = wrapText(ctx, text.toUpperCase(), maxWidth)
        const lineHeight = fontSize * 1.1
        const totalHeight = lines.length * lineHeight
        const startY = (width - totalHeight) / 2 + lineHeight / 2

        lines.forEach((line, i) => {
          ctx.fillText(line, width / 2, startY + i * lineHeight)
        })
      }
    }
  },
  {
    id: 'soft-gradient',
    name: 'Soft Gradient',
    description: 'Dreamy gradient with elegant serif font',
    font: 'Cormorant Garamond',
    fontWeight: '500',
    fontSize: 48,
    lineHeight: 1.4,
    colorSchemes: [
      {
        id: 'lavender',
        name: 'Lavender Dream',
        background: ['#667eea', '#764ba2'],
        text: '#ffffff',
        accent: '#ffffff'
      },
      {
        id: 'peach',
        name: 'Peach Sunrise',
        background: ['#f093fb', '#f5576c'],
        text: '#ffffff',
        accent: '#ffffff'
      },
      {
        id: 'mint',
        name: 'Mint Fresh',
        background: ['#4facfe', '#00f2fe'],
        text: '#ffffff',
        accent: '#ffffff'
      },
      {
        id: 'golden',
        name: 'Golden Hour',
        background: ['#fa709a', '#fee140'],
        text: '#ffffff',
        accent: '#ffffff'
      }
    ],
    render: (ctx, text, colors, width) => {
      // Gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, width)
      gradient.addColorStop(0, colors.background[0])
      gradient.addColorStop(1, colors.background[1])
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, width)

      // Subtle decorative circles
      ctx.globalAlpha = 0.1
      ctx.fillStyle = colors.accent
      ctx.beginPath()
      ctx.arc(width * 0.15, width * 0.2, width * 0.2, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.arc(width * 0.85, width * 0.8, width * 0.25, 0, Math.PI * 2)
      ctx.fill()
      ctx.globalAlpha = 1

      // Text
      if (text) {
        const fontSize = width * 0.052
        ctx.font = `500 ${fontSize}px "Cormorant Garamond", serif`
        ctx.fillStyle = colors.text
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'

        // Add text shadow for readability
        ctx.shadowColor = 'rgba(0,0,0,0.2)'
        ctx.shadowBlur = width * 0.02
        ctx.shadowOffsetX = 0
        ctx.shadowOffsetY = width * 0.005

        const maxWidth = width * 0.75
        const lines = wrapText(ctx, text, maxWidth)
        const lineHeight = fontSize * 1.5
        const totalHeight = lines.length * lineHeight
        const startY = (width - totalHeight) / 2 + lineHeight / 2

        lines.forEach((line, i) => {
          ctx.fillText(line, width / 2, startY + i * lineHeight)
        })

        ctx.shadowColor = 'transparent'
        ctx.shadowBlur = 0
      }
    }
  },
  {
    id: 'minimal-dark',
    name: 'Minimal Dark',
    description: 'Black background with clean sans-serif',
    font: 'DM Sans',
    fontWeight: '500',
    fontSize: 40,
    lineHeight: 1.5,
    colorSchemes: [
      {
        id: 'pure',
        name: 'Pure',
        background: '#000000',
        text: '#ffffff',
        accent: '#ffffff'
      },
      {
        id: 'emerald',
        name: 'Emerald',
        background: '#0a0a0a',
        text: '#10b981',
        accent: '#10b981'
      },
      {
        id: 'rose',
        name: 'Rose',
        background: '#0f0f0f',
        text: '#fb7185',
        accent: '#fb7185'
      },
      {
        id: 'blue',
        name: 'Blue',
        background: '#030712',
        text: '#60a5fa',
        accent: '#60a5fa'
      }
    ],
    render: (ctx, text, colors, width) => {
      // Background
      ctx.fillStyle = colors.background
      ctx.fillRect(0, 0, width, width)

      // Subtle border
      const borderWidth = width * 0.003
      const borderMargin = width * 0.06
      ctx.strokeStyle = colors.accent
      ctx.lineWidth = borderWidth
      ctx.strokeRect(
        borderMargin,
        borderMargin,
        width - borderMargin * 2,
        width - borderMargin * 2
      )

      // Text
      if (text) {
        const fontSize = width * 0.042
        ctx.font = `500 ${fontSize}px "DM Sans", sans-serif`
        ctx.fillStyle = colors.text
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'

        const maxWidth = width * 0.7
        const lines = wrapText(ctx, text, maxWidth)
        const lineHeight = fontSize * 1.6
        const totalHeight = lines.length * lineHeight
        const startY = (width - totalHeight) / 2 + lineHeight / 2

        lines.forEach((line, i) => {
          ctx.fillText(line, width / 2, startY + i * lineHeight)
        })
      }
    }
  },
  {
    id: 'retro-pop',
    name: 'Retro Pop',
    description: 'Bright colors with playful typography',
    font: 'Righteous',
    fontWeight: '400',
    fontSize: 52,
    lineHeight: 1.3,
    colorSchemes: [
      {
        id: 'bubblegum',
        name: 'Bubblegum',
        background: '#ff6b9d',
        text: '#fef3c7',
        accent: '#7c3aed'
      },
      {
        id: 'citrus',
        name: 'Citrus',
        background: '#fbbf24',
        text: '#7c2d12',
        accent: '#ea580c'
      },
      {
        id: 'cyber',
        name: 'Cyber',
        background: '#06b6d4',
        text: '#fdf4ff',
        accent: '#d946ef'
      },
      {
        id: 'jungle',
        name: 'Jungle',
        background: '#22c55e',
        text: '#fefce8',
        accent: '#15803d'
      }
    ],
    render: (ctx, text, colors, width) => {
      // Background
      ctx.fillStyle = colors.background
      ctx.fillRect(0, 0, width, width)

      // Decorative shapes
      const shapeSize = width * 0.08

      // Top-right circle
      ctx.fillStyle = colors.accent
      ctx.beginPath()
      ctx.arc(width - shapeSize * 1.5, shapeSize * 1.5, shapeSize, 0, Math.PI * 2)
      ctx.fill()

      // Bottom-left circle
      ctx.beginPath()
      ctx.arc(shapeSize * 1.5, width - shapeSize * 1.5, shapeSize * 0.7, 0, Math.PI * 2)
      ctx.fill()

      // Small dots pattern
      ctx.fillStyle = colors.accent
      ctx.globalAlpha = 0.3
      for (let i = 0; i < 5; i++) {
        ctx.beginPath()
        ctx.arc(
          width * 0.1 + i * width * 0.05,
          width * 0.12,
          width * 0.008,
          0,
          Math.PI * 2
        )
        ctx.fill()
      }
      ctx.globalAlpha = 1

      // Wavy line at bottom
      ctx.strokeStyle = colors.accent
      ctx.lineWidth = width * 0.012
      ctx.lineCap = 'round'
      ctx.beginPath()
      const waveY = width * 0.88
      ctx.moveTo(width * 0.15, waveY)
      for (let x = width * 0.15; x <= width * 0.85; x += 10) {
        const y = waveY + Math.sin((x - width * 0.15) * 0.03) * (width * 0.015)
        ctx.lineTo(x, y)
      }
      ctx.stroke()

      // Text with slight rotation for playfulness
      if (text) {
        ctx.save()
        ctx.translate(width / 2, width / 2)
        ctx.rotate(-0.02) // Slight tilt

        const fontSize = width * 0.055
        ctx.font = `400 ${fontSize}px "Righteous", cursive`
        ctx.fillStyle = colors.text
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'

        const maxWidth = width * 0.7
        const lines = wrapText(ctx, text, maxWidth)
        const lineHeight = fontSize * 1.35
        const totalHeight = lines.length * lineHeight
        const startY = -totalHeight / 2 + lineHeight / 2

        lines.forEach((line, i) => {
          ctx.fillText(line, 0, startY + i * lineHeight)
        })

        ctx.restore()
      }
    }
  },
  {
    id: 'clean-white',
    name: 'Clean White',
    description: 'Minimal typography on white',
    font: 'Space Mono',
    fontWeight: '400',
    fontSize: 36,
    lineHeight: 1.6,
    colorSchemes: [
      {
        id: 'ink',
        name: 'Ink',
        background: '#ffffff',
        text: '#1a1a1a',
        accent: '#1a1a1a'
      },
      {
        id: 'sage',
        name: 'Sage',
        background: '#f8faf8',
        text: '#3d5a45',
        accent: '#3d5a45'
      },
      {
        id: 'navy',
        name: 'Navy',
        background: '#f8fafc',
        text: '#1e3a5f',
        accent: '#1e3a5f'
      },
      {
        id: 'warm',
        name: 'Warm',
        background: '#fffbf5',
        text: '#78350f',
        accent: '#78350f'
      }
    ],
    render: (ctx, text, colors, width) => {
      // Background
      ctx.fillStyle = colors.background
      ctx.fillRect(0, 0, width, width)

      // Minimal line accent
      ctx.strokeStyle = colors.accent
      ctx.lineWidth = width * 0.002
      ctx.beginPath()
      ctx.moveTo(width * 0.1, width * 0.15)
      ctx.lineTo(width * 0.3, width * 0.15)
      ctx.stroke()

      // Text
      if (text) {
        const fontSize = width * 0.036
        ctx.font = `400 ${fontSize}px "Space Mono", monospace`
        ctx.fillStyle = colors.text
        ctx.textAlign = 'left'
        ctx.textBaseline = 'top'

        const maxWidth = width * 0.7
        const lines = wrapText(ctx, text, maxWidth)
        const lineHeight = fontSize * 1.7
        const startX = width * 0.1
        const startY = width * 0.22

        lines.forEach((line, i) => {
          ctx.fillText(line, startX, startY + i * lineHeight)
        })

        // Signature dash at end
        const lastLineY = startY + lines.length * lineHeight + width * 0.04
        ctx.beginPath()
        ctx.moveTo(startX, lastLineY)
        ctx.lineTo(startX + width * 0.08, lastLineY)
        ctx.stroke()
      }
    }
  }
]

// Helper function to wrap text
function wrapText(ctx, text, maxWidth) {
  const words = text.split(' ')
  const lines = []
  let currentLine = ''

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word
    const metrics = ctx.measureText(testLine)

    if (metrics.width > maxWidth && currentLine) {
      lines.push(currentLine)
      currentLine = word
    } else {
      currentLine = testLine
    }
  }

  if (currentLine) {
    lines.push(currentLine)
  }

  return lines.length > 0 ? lines : ['']
}

export default templates

