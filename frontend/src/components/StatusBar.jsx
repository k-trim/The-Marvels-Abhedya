import './StatusBar.css'

export default function StatusBar() {
  return (
    <footer className="status-bar">
      <span className="status-bar__dot"></span>
      <span className="status-bar__text">All Systems Safe</span>
      <span className="status-bar__separator">·</span>
      <span className="status-bar__text">Last Secured 2m Ago</span>
      <span className="status-bar__separator">·</span>
      <span className="status-bar__text text-green">
        <span className="icon icon-sm">lock</span> Encrypted Connection Active
      </span>
    </footer>
  )
}
