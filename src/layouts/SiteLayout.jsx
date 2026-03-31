import { NavLink, Outlet, useLocation } from 'react-router-dom'

const navItems = [
  { to: '/programs', label: 'Programs' },
  { to: '/results', label: 'Results' },
  { to: '/#method', label: 'Method' },
]

function SiteLayout() {
  const location = useLocation()
  const isApply = location.pathname === '/apply'

  return (
    <div className="app-shell">
      <header className={`site-header ${isApply ? 'site-header--transactional' : ''}`}>
        <NavLink to="/" className="brand">
          ELITE COACHING
        </NavLink>
        <nav className="main-nav">
          {navItems.map((item) => (
            <a key={item.label} href={item.to} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>
        <NavLink to="/apply#book" className="btn btn-primary btn-sm">
          Book Call
        </NavLink>
      </header>

      <Outlet />

      {!isApply && (
        <footer className="site-footer">
          <div>
            <p className="footer-brand">ELITE AUTHORITY</p>
            <p className="muted">Precision coaching for high-growth founders and operators.</p>
          </div>
          <div className="footer-links">
            <NavLink to="/programs">Programs</NavLink>
            <NavLink to="/results">Results</NavLink>
            <a href="/#method">Method</a>
            <NavLink to="/apply">Apply</NavLink>
          </div>
        </footer>
      )}

      <div className="mobile-sticky-cta">
        <NavLink to="/apply#book" className="btn btn-primary">
          Apply Now
        </NavLink>
      </div>
    </div>
  )
}

export default SiteLayout
