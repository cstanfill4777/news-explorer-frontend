
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
import {
  mockLogin,
  mockRegister,
  mockCheckToken,
  mockLogout,
} from './utils/mockAuth'
import {
  getSavedArticles,
  saveArticle,
  deleteArticle,
} from './utils/mockArticlesApi'

function App() {
  const [activeModal, setActiveModal] = useState(null)
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [hasSearched, setHasSearched] = useState(false)
  const [searchId, setSearchId] = useState(0)

  const [user, setUser] = useState(() => mockCheckToken())
  const isLoggedIn = Boolean(user)
const [savedArticles, setSavedArticles] = useState(() => getSavedArticles())

  function closeModal() {
    setActiveModal(null)
  }

  function handleLogin(email, password) {
  const loggedInUser = mockLogin(email, password)
  setUser(loggedInUser)
  closeModal()
}

function handleRegister(email, password, name) {
  const registeredUser = mockRegister(email, password, name)
  setUser(registeredUser)
  closeModal()
}

function handleLogout() {
  mockLogout()
  setUser(null)
}

function handleSaveArticle(article) {
  setSavedArticles(saveArticle(article))
}

function handleDeleteArticle(url) {
  setSavedArticles(deleteArticle(url))
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
    } catch {
  setError(
    'Sorry, something went wrong during the request. Please try again later.'
  )
} finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="app">
      <div className="app__hero">
        <Header
  onSignInClick={() => setActiveModal('login')}
  user={user}
  onLogout={handleLogout}
/>

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
		isLoggedIn={isLoggedIn}
savedArticles={savedArticles}
onSaveArticle={handleSaveArticle}
onDeleteArticle={handleDeleteArticle}
              />
              <About />
            </>
          }
        />

        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
          <Route
  path="/saved-news"
  element={
    <SavedNews
      articles={savedArticles}
      onDeleteArticle={handleDeleteArticle}
    />
  }
/>
        </Route>
      </Routes>

      <Footer />

      <LoginModal
  isOpen={activeModal === 'login'}
  onClose={closeModal}
  onSwitch={() => setActiveModal('register')}
  onLogin={handleLogin}
/>

<RegisterModal
  isOpen={activeModal === 'register'}
  onClose={closeModal}
  onSwitch={() => setActiveModal('login')}
  onRegister={handleRegister}
/>
    </div>
  )
}

export default App
