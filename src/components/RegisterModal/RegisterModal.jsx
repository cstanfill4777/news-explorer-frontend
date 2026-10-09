
import ModalWithForm from '../ModalWithForm/ModalWithForm'

function RegisterModal({ isOpen, onClose, onSwitch }) {
  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Sign up"
      buttonText="Sign up"
      onSubmit={handleSubmit}
      footer={
        <>
          or{' '}
          <button
            className="modal__switch"
            type="button"
            onClick={onSwitch}
          >
            Sign in
          </button>
        </>
      }
    >
      <label className="modal__label" htmlFor="register-email">
        Email
      </label>
      <input
        className="modal__input"
        id="register-email"
        name="email"
        type="email"
        placeholder="Enter email"
        autoComplete="email"
        required
      />

      <label className="modal__label" htmlFor="register-password">
        Password
      </label>
      <input
        className="modal__input"
        id="register-password"
        name="password"
        type="password"
        placeholder="Enter password"
        autoComplete="new-password"
        minLength={8}
        required
      />

      <label className="modal__label" htmlFor="register-name">
        Username
      </label>
      <input
        className="modal__input"
        id="register-name"
        name="name"
        type="text"
        placeholder="Enter your username"
        autoComplete="username"
        required
      />
    </ModalWithForm>
  )
}

export default RegisterModal
