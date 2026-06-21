import { X } from 'lucide-react'
import { useEffect } from 'react'

export default function Modal({ content, onClose }) {
  useEffect(() => {
    const close = (event) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', close)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', close); document.body.style.overflow = '' }
  }, [onClose])

  return (
    <div className="modal-backdrop" onMouseDown={onClose} role="presentation">
      <div className="modal-card" onMouseDown={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close" onClick={onClose} aria-label="Close"><X size={20} /></button>
        <span className="modal-emoji">{content.emoji || '💗'}</span>
        <p className="eyebrow">A note for you</p>
        <h3 id="modal-title">{content.title}</h3>
        <p>{content.message}</p>
        <div className="signature">Always yours, ♡</div>
      </div>
    </div>
  )
}
