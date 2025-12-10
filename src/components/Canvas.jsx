import { useRef, useEffect, useCallback } from 'react'

const EXPORT_SIZE = 1080

export default function Canvas({ template, text, colorSchemeIndex, onExport }) {
  const canvasRef = useRef(null)
  const exportCanvasRef = useRef(null)

  // Render to visible canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !template) return

    const ctx = canvas.getContext('2d')
    const size = canvas.width

    ctx.clearRect(0, 0, size, size)

    const colors = template.colorSchemes[colorSchemeIndex]
    template.render(ctx, text, colors, size)
  }, [template, text, colorSchemeIndex])

  // Export function - renders at 1080x1080
  const handleExport = useCallback(() => {
    if (!template) return

    // Create offscreen canvas for export
    const exportCanvas = document.createElement('canvas')
    exportCanvas.width = EXPORT_SIZE
    exportCanvas.height = EXPORT_SIZE

    const ctx = exportCanvas.getContext('2d')
    const colors = template.colorSchemes[colorSchemeIndex]

    // Render at full resolution
    template.render(ctx, text, colors, EXPORT_SIZE)

    // Export as PNG
    exportCanvas.toBlob(
      (blob) => {
        if (!blob) return

        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        const date = new Date().toISOString().split('T')[0]
        link.download = `instapost-${date}.png`
        link.href = url

        // Handle iOS Safari
        if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
          // For iOS, open in new tab
          window.open(url, '_blank')
        } else {
          link.click()
        }

        // Cleanup
        setTimeout(() => URL.revokeObjectURL(url), 1000)

        if (onExport) onExport()
      },
      'image/png',
      1.0
    )
  }, [template, text, colorSchemeIndex, onExport])

  // Expose export function
  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.exportImage = handleExport
    }
  }, [handleExport])

  // Set canvas size based on container
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const updateSize = () => {
      const container = canvas.parentElement
      const size = Math.min(container.offsetWidth, 400)
      canvas.width = size
      canvas.height = size
      canvas.style.width = `${size}px`
      canvas.style.height = `${size}px`

      // Re-render at new size
      if (template) {
        const ctx = canvas.getContext('2d')
        const colors = template.colorSchemes[colorSchemeIndex]
        template.render(ctx, text, colors, size)
      }
    }

    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [template, text, colorSchemeIndex])

  return (
    <div className="canvas-container">
      <canvas ref={canvasRef} className="preview-canvas" />
    </div>
  )
}

