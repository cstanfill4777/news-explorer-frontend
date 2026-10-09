import Header from './components/Header/Header'
import SearchForm from './components/SearchForm/SearchForm'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import './index.css'

function App() {
  return (
    <div className="app">
      <div className="app__hero">
        <Header />
        <main>
          <SearchForm />
          <About />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
