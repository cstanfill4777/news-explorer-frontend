
import { useState } from 'react'
import './SearchForm.css'

function SearchForm({ onSearch, isLoading }) {
  const [keyword, setKeyword] = useState('')
  const [validationError, setValidationError] = useState('')

  function handleSubmit(event) {
  event.preventDefault()

  const trimmedKeyword = keyword.trim()

  if (!trimmedKeyword) {
    setValidationError('Please enter a keyword')
    return
  }

  setValidationError('')
  onSearch(trimmedKeyword)
}

  return (
    <section className="search">
      <div className="search__content">
        <h1 className="search__title">
          What's going on in the world?
        </h1>

        <p className="search__description">
          Find the latest news on any topic and save them in your personal account.
        </p>

        <form className="search__form" onSubmit={handleSubmit}>
          <input
            className="search__input"
            type="search"
            name="keyword"
            placeholder="Enter topic"
            aria-label="Search topic"
            value={keyword}
            onChange={(event) => {
  setKeyword(event.target.value)
  setValidationError('')
}}
          />

          <button
            className="search__button"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Searching...' : 'Search'}
          </button>
        </form>
{validationError && (
  <p className="search__error" role="alert">
    {validationError}
  </p>
)}
      </div>
    </section>
  )
}

export default SearchForm
