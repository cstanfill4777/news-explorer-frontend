
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
import { searchNews } from './utils/newsApi'
import './index.css'

function App() {
  const [activeModal, setActiveModal] = useState(null)
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [hasSearched, setHasSearched] = useState(false)
  const [searchId, setSearchId] = useState(0)

  const isLoggedIn = false

  function closeModal() {
    setActiveModal(null)
  }

  async function handleSearch(keyword) {
    setSearchId((id) => id + 1)
    setIsLoading(true)
    setError('')
    setHasSearched(true)
    setArticles([])

    try {
      const results = await searchNews(keyword)
      setArticles(results)
    } catch (err) {
      setError(err.message || 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="app">
      <div className="app__hero">
        <Header onSignInClick={() => setActiveModal('login')} />

        <Routes>
          <Route
            path="/"
            element={
              <SearchForm
                onSearch={handleSearch}
                isLoading={isLoading}
              />
            }
          />
        </Routes>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main
                articles={articles}
                isLoading={isLoading}
                error={error}
                hasSearched={hasSearched}
		searchId={searchId}
              />
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
