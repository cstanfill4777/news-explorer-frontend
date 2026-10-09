import Header from './components/Header/Header'
import SearchForm from './components/SearchForm/SearchForm'
import './index.css'

function App() {
  return (
    <div className="app">
      <div className="app__hero">
        <Header />
        <main>
          <SearchForm />
        </main>
      </div>
    </div>
  )
}

export default App
