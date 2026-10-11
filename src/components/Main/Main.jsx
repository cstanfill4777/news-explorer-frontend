
import NewsCardList from '../NewsCardList/NewsCardList'
import Preloader from '../Preloader/Preloader'

function Main({
  articles,
  isLoading,
  error,
  hasSearched,
  searchId,
  isLoggedIn,
  savedArticles,
  onSaveArticle,
  onDeleteArticle,
}) {  if (isLoading) {
  return (
    <main className="news-card-list">
      <Preloader />
    </main>
  )
}

  if (error) {
    return (
      <main className="news-card-list">
        <p className="news-card-list__container" role="alert">
          {error}
        </p>
      </main>
    )
  }

  if (!hasSearched) return null

  if (articles.length === 0) {
    return (
      <main className="news-card-list">
        <p className="news-card-list__container">
          Nothing found. Try another keyword.
        </p>
      </main>
    )
  }

  return (
    <main>
     <NewsCardList
  key={searchId}
  articles={articles}
  isLoggedIn={isLoggedIn}
  savedArticles={savedArticles}
  onSaveArticle={onSaveArticle}
  onDeleteArticle={onDeleteArticle}
/>
    </main>
  )
}

export default Main
