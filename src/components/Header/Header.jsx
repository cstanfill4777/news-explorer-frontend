
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import './Header.css'

function Header({ onSignInClick, user, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleSignIn() {
    setMenuOpen(false)
    onSignInClick()
  }

  function handleLogout() {
    setMenuOpen(false)
    onLogout()
  }

  return (
    <header className="header">
      <div className="header__container">
        <Link className="header__logo" to="/">
          NewsExplorer
        </Link>

        <Navigation
          onSignInClick={onSignInClick}
          user={user}
          onLogout={onLogout}
        />

        <button
          className="header__menu-button"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '×' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <nav className="header__mobile-nav" id="mobile-navigation">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          {user && (
            <Link to="/saved-news" onClick={() => setMenuOpen(false)}>
              Saved articles
            </Link>
          )}

          {user ? (
            <button type="button" onClick={handleLogout}>
              Log out ({user.name})
            </button>
          ) : (
            <button type="button" onClick={handleSignIn}>
              Sign in
            </button>
          )}
        </nav>
      )}
    </header>
  )
}

export default Header
