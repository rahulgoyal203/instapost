import { useState } from 'react'
import TemplatePicker from './components/TemplatePicker'
import Editor from './components/Editor'

export default function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleSelectTemplate = (template) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setSelectedTemplate(template)
      setIsTransitioning(false)
    }, 150)
  }

  const handleBack = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setSelectedTemplate(null)
      setIsTransitioning(false)
    }, 150)
  }

  return (
    <div className={`app ${isTransitioning ? 'transitioning' : ''}`}>
      {selectedTemplate ? (
        <Editor template={selectedTemplate} onBack={handleBack} />
      ) : (
        <TemplatePicker onSelect={handleSelectTemplate} />
      )}
    </div>
  )
}

