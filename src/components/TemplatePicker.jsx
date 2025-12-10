import { useRef, useEffect } from 'react'
import templates from '../data/templates'

export default function TemplatePicker({ onSelect }) {
  return (
    <div className="template-picker">
      <header className="picker-header">
        <h1 className="logo">
          <span className="logo-icon">✦</span>
          InstaPost
        </h1>
        <p className="tagline">Create stunning posts in seconds</p>
      </header>

      <div className="template-grid">
        {templates.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
            onSelect={() => onSelect(template)}
          />
        ))}
      </div>
    </div>
  )
}

function TemplateCard({ template, onSelect }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const size = 300 // Preview size

    canvas.width = size
    canvas.height = size

    // Render with sample text and first color scheme
    template.render(ctx, 'Your text here', template.colorSchemes[0], size)
  }, [template])

  return (
    <button className="template-card" onClick={onSelect}>
      <div className="template-preview">
        <canvas ref={canvasRef} />
      </div>
      <div className="template-info">
        <span className="template-name">{template.name}</span>
      </div>
    </button>
  )
}

