
import ModalWithForm from '../ModalWithForm/ModalWithForm'

function LoginModal({ isOpen, onClose, onSwitch }) {
  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Sign in"
      buttonText="Sign in"
      onSubmit={handleSubmit}
      footer={
        <>
          or{' '}
          <button
            className="modal__switch"
            type="button"
            onClick={onSwitch}
          >
            Sign up
          </button>
        </>
      }
    >
      <label className="modal__label" htmlFor="login-email">
        Email
      </label>
      <input
        className="modal__input"
        id="login-email"
        name="email"
        type="email"
        placeholder="Enter email"
        autoComplete="email"
        required
      />

      <label className="modal__label" htmlFor="login-password">
        Password
      </label>
      <input
        className="modal__input"
        id="login-password"
        name="password"
        type="password"
        placeholder="Enter password"
        autoComplete="current-password"
        required
      />
    </ModalWithForm>
  )
}

export default LoginModal
