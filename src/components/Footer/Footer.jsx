import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">
          © 2026 Supersite, Powered by News API
        </p>

        <nav className="footer__navigation" aria-label="Footer navigation">
          <a className="footer__link" href="/">Home</a>
          <a
            className="footer__link"
            href="https://tripleten.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TripleTen
          </a>
          <a
            className="footer__social"
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            className="footer__social"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
