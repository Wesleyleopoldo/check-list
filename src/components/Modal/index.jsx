import "./styles.css"

export default function Modal({ open, onClose, title, description }) {
  if (!open) return null

  return (
    <div className="overlay" onClick={onClose}>
      <div className="container-modal" onClick={e => e.stopPropagation()}>
        <div className="btn-exit-popup">
          <button onClick={onClose}>x</button>
        </div>
        <div className="task-title-modal">
          <h1>{title}</h1>
        </div>
        <div className="task-description-modal">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
