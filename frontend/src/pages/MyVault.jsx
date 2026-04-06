import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import StatusBar from '../components/StatusBar'
import './MyVault.css'

const vaultItems = [
  { id: 'google', name: 'Google Workspace', detail: 'personal.account@gmail.com', icon: 'mail', category: 'Email', strength: 94 },
  { id: 'dropbox', name: 'Dropbox Storage', detail: 'Shared Folder Access', icon: 'cloud', category: 'Cloud', strength: 88 },
  { id: 'chase', name: 'Primary Savings', detail: 'Chase Bank Account', icon: 'account_balance', category: 'Finance', strength: 97 },
  { id: 'netflix', name: 'Netflix Ultra', detail: 'Family Subscription', icon: 'tv', category: 'Media', strength: 72 },
]

export default function MyVault() {
  const navigate = useNavigate()

  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content vault-page animate-in">
        {/* Header */}
        <header className="vault__header">
          <div>
            <h2 className="vault__page-title">Dashboard</h2>
            <p className="text-muted vault__page-sub">Welcome back, Operator</p>
          </div>
          <div className="vault__header-actions">
            <button className="btn-icon">
              <span className="icon">search</span>
            </button>
            <button className="btn-icon">
              <span className="icon">notifications</span>
            </button>
          </div>
        </header>

        {/* Top summary row */}
        <div className="vault__summary">
          <div className="card vault__health-card">
            <div className="vault__health-top">
              <span className="icon icon-lg text-green">shield</span>
              <span className="vault__health-score text-green">98%</span>
            </div>
            <h4>Security Health</h4>
            <p className="text-muted" style={{ fontSize: '0.82rem' }}>
              Your personal data is shielded by silent sentinel protocols. Everything looks great.
            </p>
            <div className="progress-bar" style={{ marginTop: '12px' }}>
              <div className="progress-bar__fill" style={{ width: '98%' }}></div>
            </div>
          </div>

          <div className="card vault__add-card" onClick={() => {}}>
            <div className="vault__add-icon">
              <span className="icon icon-xl">add</span>
            </div>
            <h4>Add New Item</h4>
            <p className="text-muted" style={{ fontSize: '0.82rem' }}>
              Securely store a new credential
            </p>
          </div>
        </div>

        {/* Vault Items */}
        <div className="vault__section-header">
          <h3>Your Items</h3>
          <span className="badge badge--green">{vaultItems.length} Protected</span>
        </div>

        <div className="vault__grid">
          {vaultItems.map((item, i) => (
            <div
              key={item.id}
              className="card card--zero-knowledge vault__item"
              style={{ animationDelay: `${i * 80}ms` }}
              onClick={() => navigate(`/vault/${item.id}`)}
            >
              <div className="vault__item-header">
                <div className="vault__item-icon">
                  <span className="icon">{item.icon}</span>
                </div>
                <span className="badge badge--green">Protected</span>
              </div>
              <h4 className="vault__item-name">{item.name}</h4>
              <p className="text-muted vault__item-detail">{item.detail}</p>
              <div className="vault__item-footer">
                <span className="vault__item-category text-muted">{item.category}</span>
                <span className="vault__item-strength text-green">{item.strength}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Encrypted banner */}
        <div className="vault__encrypted-banner">
          <div className="vault__banner-left">
            <span className="icon text-green">lock</span>
            <div>
              <h4>Encrypted Connection</h4>
              <p className="text-muted" style={{ fontSize: '0.82rem' }}>
                Your dashboard is accessed via an end-to-end encrypted tunnel.
              </p>
            </div>
          </div>
          <span className="badge badge--blue">
            <span className="icon icon-sm">wifi</span> Secure Tunnel
          </span>
        </div>

        <StatusBar />
      </main>
    </div>
  )
}
