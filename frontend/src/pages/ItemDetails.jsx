import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import StatusBar from '../components/StatusBar'
import './ItemDetails.css'

const vaultData = {
  google: {
    name: 'Google Workspace',
    icon: 'mail',
    url: 'https://workspace.google.com',
    username: 'personal.account@gmail.com',
    password: 'R#7kQ!mZ9@pLwX2v',
    category: 'Email',
    strength: 94,
    created: 'Jan 15, 2026',
    modified: 'Apr 02, 2026',
    notes: 'Primary personal email account.',
  },
  dropbox: {
    name: 'Dropbox Storage',
    icon: 'cloud',
    url: 'https://dropbox.com',
    username: 'team@company.io',
    password: 'Xm@9Lp#7vZ!2wQkR',
    category: 'Cloud',
    strength: 88,
    created: 'Mar 01, 2026',
    modified: 'Apr 05, 2026',
    notes: 'Shared team folder access.',
  },
  chase: {
    name: 'Primary Savings',
    icon: 'account_balance',
    url: 'https://chase.com',
    username: 'john.d.savings',
    password: 'B@nk!ng$ecur3_2026',
    category: 'Finance',
    strength: 97,
    created: 'Nov 20, 2025',
    modified: 'Apr 01, 2026',
    notes: 'Chase savings account. Important: Use hardware key for 2FA.',
  },
  netflix: {
    name: 'Netflix Ultra',
    icon: 'tv',
    url: 'https://netflix.com',
    username: 'family@email.com',
    password: 'Str3am!ng_F4m1ly',
    category: 'Media',
    strength: 72,
    created: 'Feb 10, 2026',
    modified: 'Mar 28, 2026',
    notes: 'Family subscription — 4 screens plan.',
  },
}

// Default fallback
const defaultItem = {
  name: 'ProtonMail Business',
  icon: 'mail',
  url: 'https://protonmail.com',
  username: 'admin@protonmail.com',
  password: 'Pr0t0n!S3cur3#K3y',
  category: 'Email',
  strength: 98,
  created: 'Dec 01, 2025',
  modified: 'Apr 04, 2026',
  notes: 'This credential uses high-entropy character mapping and is not found in known data breaches.',
}

export default function ItemDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const item = vaultData[id] || defaultItem
  const [showPassword, setShowPassword] = useState(false)
  const [copied, setCopied] = useState('')
  const [autoRotate, setAutoRotate] = useState(true)
  const [breachMonitor, setBreachMonitor] = useState(true)

  const handleCopy = (field, value) => {
    navigator.clipboard?.writeText(value)
    setCopied(field)
    setTimeout(() => setCopied(''), 2000)
  }

  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content details-page animate-in">
        {/* Back nav */}
        <button className="details__back btn-ghost" onClick={() => navigate('/vault')}>
          <span className="icon icon-sm">arrow_back</span>
          Back to Vault
        </button>

        {/* Page header */}
        <div className="details__header">
          <div className="details__header-left">
            <div className="details__service-icon">
              <span className="icon icon-lg">{item.icon}</span>
            </div>
            <div>
              <span className="details__label">Credential Detail</span>
              <h2>{item.name}</h2>
            </div>
          </div>
          <div className="details__header-actions">
            <button className="btn btn-secondary btn-sm">
              <span className="icon icon-sm">edit</span>
              Edit Details
            </button>
            <button className="btn btn-danger btn-sm">
              <span className="icon icon-sm">delete</span>
              Delete Item
            </button>
          </div>
        </div>

        <div className="details__body">
          {/* Left column — Credentials */}
          <div className="details__credentials">
            <div className="card">
              <h4 className="details__section-title">
                <span className="icon icon-sm">language</span>
                Credential Information
              </h4>

              {/* URL */}
              <div className="details__field">
                <label>Service URL</label>
                <div className="details__field-row">
                  <span className="mono">{item.url}</span>
                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => handleCopy('url', item.url)}
                  >
                    <span className="icon icon-sm">{copied === 'url' ? 'check' : 'content_copy'}</span>
                    {copied === 'url' ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* Username */}
              <div className="details__field">
                <label>Username</label>
                <div className="details__field-row">
                  <span className="mono">{item.username}</span>
                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => handleCopy('user', item.username)}
                  >
                    <span className="icon icon-sm">{copied === 'user' ? 'check' : 'content_copy'}</span>
                    {copied === 'user' ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* Password */}
              <div className="details__field">
                <label>Password</label>
                <div className="details__field-row">
                  <span className="mono">
                    {showPassword ? item.password : '•'.repeat(item.password.length)}
                  </span>
                  <div className="details__field-actions">
                    <button
                      className="btn-icon"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <span className="icon icon-sm">
                        {showPassword ? 'visibility_off' : 'visibility'}
                      </span>
                    </button>
                    <button
                      className="btn btn-ghost btn-sm"
                      onClick={() => handleCopy('pass', item.password)}
                    >
                      <span className="icon icon-sm">{copied === 'pass' ? 'check' : 'content_copy'}</span>
                      {copied === 'pass' ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes */}
            {item.notes && (
              <div className="card details__notes">
                <h4 className="details__section-title">
                  <span className="icon icon-sm">notes</span>
                  Notes
                </h4>
                <p className="text-muted">{item.notes}</p>
              </div>
            )}
          </div>

          {/* Right column — Security */}
          <div className="details__security">
            <div className="card">
              <h4 className="details__section-title">
                <span className="icon icon-sm">security</span>
                Smart Protection
              </h4>

              <div className="details__toggle-row">
                <div>
                  <span className="details__toggle-label">Auto-Rotate Password</span>
                  <span className="text-muted details__toggle-desc">Rotate every 90 days</span>
                </div>
                <label className="toggle">
                  <input
                    type="checkbox"
                    checked={autoRotate}
                    onChange={() => setAutoRotate(!autoRotate)}
                  />
                  <span className="toggle__slider"></span>
                </label>
              </div>

              <div className="details__toggle-row">
                <div>
                  <span className="details__toggle-label">Breach Monitoring</span>
                  <span className="text-muted details__toggle-desc">Scan dark web leaks</span>
                </div>
                <label className="toggle">
                  <input
                    type="checkbox"
                    checked={breachMonitor}
                    onChange={() => setBreachMonitor(!breachMonitor)}
                  />
                  <span className="toggle__slider"></span>
                </label>
              </div>
            </div>

            <div className="card">
              <h4 className="details__section-title">
                <span className="icon icon-sm">analytics</span>
                Security Assessment
              </h4>
              <div className="details__assessment">
                <div className="details__score">
                  <span className="details__score-value text-green">{item.strength}%</span>
                  <span className="text-muted" style={{ fontSize: '0.75rem' }}>Strength Score</span>
                </div>
                <div className="progress-bar" style={{ height: '6px' }}>
                  <div
                    className="progress-bar__fill"
                    style={{
                      width: `${item.strength}%`,
                      background: item.strength >= 90 ? 'var(--primary-container)' :
                                  item.strength >= 70 ? 'var(--secondary-container)' : 'var(--error)'
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="card">
              <h4 className="details__section-title">
                <span className="icon icon-sm">info</span>
                Metadata
              </h4>
              <div className="details__meta">
                <div className="details__meta-row">
                  <span className="text-muted">Last Modified</span>
                  <span className="mono">{item.modified}</span>
                </div>
                <div className="details__meta-row">
                  <span className="text-muted">Created</span>
                  <span className="mono">{item.created}</span>
                </div>
                <div className="details__meta-row">
                  <span className="text-muted">Category</span>
                  <span className="badge badge--blue">{item.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <StatusBar />
      </main>
    </div>
  )
}
