import { Link } from 'react-router-dom'

function Button({
  children,
  to,
  type = 'button',
  variant = 'primary',
  className = '',
  onClick,
  disabled = false,
}) {
  const classes = `button button-${variant} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button