
import { NavLink } from 'react-router-dom'
import './Navigation.css'

function Navigation({ onSignInClick }) {
  return (
    <nav className="navigation">
      <NavLink className="navigation__link" to="/">
        Home
      </NavLink>

      <NavLink className="navigation__link" to="/saved-news">
        Saved articles
      </NavLink>

      <button
        className="navigation__signin"
        type="button"
        onClick={onSignInClick}
      >
        Sign in
      </button>
    </nav>
  )
}

export default Navigation
