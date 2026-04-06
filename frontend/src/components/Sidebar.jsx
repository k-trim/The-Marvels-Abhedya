import { NavLink, useLocation } from 'react-router-dom'
import './Sidebar.css'

const navItems = [
  { path: '/vault', icon: 'lock', label: 'My Vault' },
  { path: '/security', icon: 'shield', label: 'Security Health' },
  { path: '/settings', icon: 'settings', label: 'Safety Settings' },
]

export default function Sidebar() {
  const location = useLocation()

  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__logo">
          <span className="sidebar__logo-icon icon icon-lg">enhanced_encryption</span>
          <span className="sidebar__logo-text">SecureVault</span>
        </div>
      </div>

      <nav className="sidebar__nav">
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`
            }
          >
            <span className="icon">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar__footer">
        <button className="sidebar__lock-btn">
          <span className="icon icon-sm">lock</span>
          <span>Lock All Items</span>
        </button>
        <div className="sidebar__user">
          <div className="sidebar__avatar">SV</div>
          <div className="sidebar__user-info">
            <span className="sidebar__user-name">Operator</span>
            <span className="sidebar__user-role">Admin Access</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
