
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import SearchForm from './components/SearchForm/SearchForm'
import Main from './components/Main/Main'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import SavedNews from './components/SavedNews/SavedNews'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import './index.css'

function App() {
  const isLoggedIn = false

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="app__hero">
                <SearchForm />
              </div>
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
    </div>
  )
}

export default App
