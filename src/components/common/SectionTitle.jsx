const SectionTitle = ({ 
  title, 
  subtitle, 
  align = 'center',
  className = '' 
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  return (
    <div className={`mb-12 ${alignmentClasses[align]} ${className}`}>
      {subtitle && (
        <p className="text-primary-600 font-medium text-sm uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900">
        {title}
      </h2>
    </div>
  )
}

export default SectionTitle