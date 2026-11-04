function SectionHeading({ eyebrow, title, description, alignment = 'left' }) {
  return (
    <div className={`section-heading section-heading-${alignment}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

export default SectionHeading