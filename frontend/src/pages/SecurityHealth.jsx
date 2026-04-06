import Sidebar from '../components/Sidebar'
import StatusBar from '../components/StatusBar'
import './SecurityHealth.css'

const events = [
  {
    icon: 'block',
    title: 'Blocked an unauthorized attempt',
    detail: 'From an unknown device in Paris, France',
    time: '14 minutes ago',
    type: 'warning',
  },
  {
    icon: 'verified',
    title: 'Data integrity verified',
    detail: 'Your vault backup is healthy and synchronized',
    time: '32 minutes ago',
    type: 'success',
  },
  {
    icon: 'shield',
    title: 'Advanced Shielding active',
    detail: 'Secured your connection during the recent session',
    time: '1 hour ago',
    type: 'info',
  },
  {
    icon: 'key',
    title: 'Password rotation completed',
    detail: 'Auto-rotated credentials for 2 services',
    time: '3 hours ago',
    type: 'success',
  },
]

export default function SecurityHealth() {
  const healthScore = 95
  const circumference = 2 * Math.PI * 90
  const dashOffset = circumference - (healthScore / 100) * circumference

  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content health-page animate-in">
        <header className="health__header">
          <div>
            <h2>Security Health</h2>
            <p className="text-muted" style={{ fontSize: '0.85rem' }}>
              Vault defense status and monitoring dashboard
            </p>
          </div>
          <button className="btn btn-secondary btn-sm">
            <span className="icon icon-sm">refresh</span>
            Refresh Scan
          </button>
        </header>

        {/* Health gauge + status */}
        <div className="health__top">
          <div className="card health__gauge-card">
            <div className="health__gauge">
              <svg viewBox="0 0 200 200" className="health__gauge-svg">
                <circle
                  cx="100" cy="100" r="90"
                  fill="none"
                  stroke="var(--surface-highest)"
                  strokeWidth="8"
                />
                <circle
                  cx="100" cy="100" r="90"
                  fill="none"
                  stroke="var(--primary-container)"
                  strokeWidth="8"
                  strokeDasharray={circumference}
                  strokeDashoffset={dashOffset}
                  strokeLinecap="square"
                  transform="rotate(-90 100 100)"
                  className="health__gauge-arc"
                />
              </svg>
              <div className="health__gauge-center">
                <span className="health__gauge-value">{healthScore}%</span>
                <span className="health__gauge-label">Protected</span>
              </div>
            </div>
            <div className="health__gauge-status">
              <span className="icon text-green">check_circle</span>
              <div>
                <h3>Your vault is safe</h3>
                <p className="text-muted" style={{ fontSize: '0.85rem' }}>
                  Our Silent Sentinel is monitoring your digital assets. No action is required from you at this time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cards row */}
        <div className="health__cards-row">
          <div className="card">
            <div className="health__card-top">
              <span className="icon text-green">security</span>
              <span className="badge badge--green">Active</span>
            </div>
            <h4>Automated Defense</h4>
            <p className="text-muted" style={{ fontSize: '0.82rem', marginTop: '8px' }}>
              Silent scan completed 4 minutes ago. No vulnerabilities detected in your private keys or encrypted files.
            </p>
            <div className="health__defense-bars">
              {['Encryption', 'Firewall', 'Auth Keys', 'Backup'].map((label, i) => (
                <div key={label} className="health__defense-item">
                  <div className="health__defense-label">
                    <span>{label}</span>
                    <span className="text-green mono">{[100, 98, 100, 95][i]}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-bar__fill" style={{ width: `${[100, 98, 100, 95][i]}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="health__card-top">
              <span className="icon text-blue">signal_cellular_alt</span>
              <span className="badge badge--blue">Strong</span>
            </div>
            <h4>Connection Quality</h4>
            <p className="text-muted" style={{ fontSize: '0.82rem', marginTop: '8px' }}>
              End-to-end encrypted tunnel active. Latency optimal.
            </p>
            <div className="health__connection-visual">
              <div className="health__signal-bars">
                {[80, 90, 100, 95, 85, 92, 88, 96, 100, 94].map((h, i) => (
                  <div
                    key={i}
                    className="health__signal-bar"
                    style={{
                      height: `${h}%`,
                      animationDelay: `${i * 100}ms`,
                    }}
                  ></div>
                ))}
              </div>
              <div className="health__connection-stats">
                <div>
                  <span className="text-muted" style={{ fontSize: '0.7rem' }}>LATENCY</span>
                  <span className="mono text-green">12ms</span>
                </div>
                <div>
                  <span className="text-muted" style={{ fontSize: '0.7rem' }}>UPTIME</span>
                  <span className="mono text-green">99.9%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Events log */}
        <div className="health__events">
          <div className="vault__section-header">
            <h3>Recent Protection Events</h3>
            <span className="badge badge--green">{events.length} Events</span>
          </div>
          <div className="health__events-list">
            {events.map((event, i) => (
              <div
                key={i}
                className="health__event animate-in"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className={`health__event-icon health__event-icon--${event.type}`}>
                  <span className="icon">{event.icon}</span>
                </div>
                <div className="health__event-content">
                  <h4 className="health__event-title">{event.title}</h4>
                  <p className="text-muted" style={{ fontSize: '0.82rem' }}>{event.detail}</p>
                </div>
                <span className="health__event-time text-muted">{event.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deep audit CTA */}
        <div className="card health__audit-cta">
          <div className="health__audit-left">
            <span className="icon icon-lg text-blue">search</span>
            <div>
              <h4>Deep Security Audit</h4>
              <p className="text-muted" style={{ fontSize: '0.85rem' }}>
                Perform a thorough 256-point check on all assets.
              </p>
            </div>
          </div>
          <button className="btn btn-primary">
            <span className="icon icon-sm">play_arrow</span>
            Start Scan
          </button>
        </div>

        <StatusBar />
      </main>
    </div>
  )
}
