import { useState, useRef, useEffect } from 'react'
import Canvas from './Canvas'
import ColorPalette from './ColorPalette'

const MAX_CHARS = 150

export default function Editor({ template, onBack }) {
  const [text, setText] = useState('')
  const [colorSchemeIndex, setColorSchemeIndex] = useState(0)
  const [isExporting, setIsExporting] = useState(false)
  const canvasRef = useRef(null)
  const textareaRef = useRef(null)

  // Auto-focus text input
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus()
    }
  }, [])

  const handleTextChange = (e) => {
    const value = e.target.value
    if (value.length <= MAX_CHARS) {
      setText(value)
    }
  }

  const handleDownload = () => {
    setIsExporting(true)

    // Find canvas and trigger export
    const canvas = document.querySelector('.preview-canvas')
    if (canvas && canvas.exportImage) {
      canvas.exportImage()
    }

    // Reset button state after animation
    setTimeout(() => setIsExporting(false), 1500)
  }

  const charCount = text.length
  const charCountClass = charCount > MAX_CHARS * 0.9 ? 'warning' : ''

  return (
    <div className="editor">
      <header className="editor-header">
        <button className="back-button" onClick={onBack} aria-label="Go back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
        <h1 className="editor-title">{template.name}</h1>
        <div className="header-spacer" />
      </header>

      <main className="editor-main">
        <div className="canvas-wrapper">
          <Canvas
            ref={canvasRef}
            template={template}
            text={text}
            colorSchemeIndex={colorSchemeIndex}
          />
        </div>

        <div className="controls">
          <ColorPalette
            schemes={template.colorSchemes}
            selected={colorSchemeIndex}
            onSelect={setColorSchemeIndex}
          />

          <div className="text-input-wrapper">
            <textarea
              ref={textareaRef}
              className="text-input"
              value={text}
              onChange={handleTextChange}
              placeholder="Type your message here..."
              rows={3}
            />
            <span className={`char-count ${charCountClass}`}>
              {charCount} / {MAX_CHARS}
            </span>
          </div>

          <button
            className={`download-button ${isExporting ? 'exporting' : ''}`}
            onClick={handleDownload}
            disabled={isExporting}
          >
            {isExporting ? (
              <>
                <svg className="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Downloaded!
              </>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
                Download Post
              </>
            )}
          </button>
        </div>
      </main>
    </div>
  )
}

