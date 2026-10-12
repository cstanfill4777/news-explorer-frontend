
import { useEffect } from 'react'
import './ModalWithForm.css'

function ModalWithForm({
  isOpen,
  onClose,
  title,
  buttonText,
  onSubmit,
  children,
  footer,
}) {
  useEffect(() => {
    if (!isOpen) return

    function handleEscape(event) {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="modal" onMouseDown={handleOverlayClick}>
      <div
        className="modal__container"
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <button
          className="modal__close"
          type="button"
          aria-label="Close"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="modal__title">{title}</h2>

        <form className="modal__form" onSubmit={onSubmit}>
          {children}

          <button className="modal__submit" type="submit">
            {buttonText}
          </button>
        </form>

        {footer && <div className="modal__footer">{footer}</div>}
      </div>
    </div>
  )
}

export default ModalWithForm
