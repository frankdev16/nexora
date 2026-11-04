import { Link } from 'react-router-dom'

function Breadcrumbs({ items = [] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link to="/">Home</Link>

      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="breadcrumb-item">
          <span className="breadcrumb-divider">/</span>

          {item.path && index !== items.length - 1 ? (
            <Link to={item.path}>{item.label}</Link>
          ) : (
            <span aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}

export default Breadcrumbs