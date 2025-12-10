export default function ColorPalette({ schemes, selected, onSelect }) {
  return (
    <div className="color-palette">
      <div className="palette-swatches">
        {schemes.map((scheme, index) => {
          const isSelected = selected === index
          const bgColor = Array.isArray(scheme.background)
            ? `linear-gradient(135deg, ${scheme.background[0]}, ${scheme.background[1]})`
            : scheme.background

          return (
            <button
              key={scheme.id}
              className={`palette-swatch ${isSelected ? 'selected' : ''}`}
              onClick={() => onSelect(index)}
              title={scheme.name}
              aria-label={`${scheme.name} color scheme`}
            >
              <span
                className="swatch-bg"
                style={{ background: bgColor }}
              />
              <span
                className="swatch-text"
                style={{ backgroundColor: scheme.text }}
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}

