
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import SearchForm from './components/SearchForm/SearchForm'
import Main from './components/Main/Main'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import SavedNews from './components/SavedNews/SavedNews'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import LoginModal from './components/LoginModal/LoginModal'
import RegisterModal from './components/RegisterModal/RegisterModal'
import './index.css'

function App() {
  const [activeModal, setActiveModal] = useState(null)
  const isLoggedIn = false

  function closeModal() {
    setActiveModal(null)
  }

  return (
    <div className="app">
      <div className="app__hero">
        <Header onSignInClick={() => setActiveModal('login')} />
        <Routes>
          <Route path="/" element={<SearchForm />} />
        </Routes>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <About />
            </>
          }
        />

        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
          <Route path="/saved-news" element={<SavedNews />} />
        </Route>
      </Routes>

      <Footer />

      <LoginModal
        isOpen={activeModal === 'login'}
        onClose={closeModal}
        onSwitch={() => setActiveModal('register')}
      />

      <RegisterModal
        isOpen={activeModal === 'register'}
        onClose={closeModal}
        onSwitch={() => setActiveModal('login')}
      />
    </div>
  )
}

export default App
