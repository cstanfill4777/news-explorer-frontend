
import NewsCard from '../NewsCard/NewsCard'

function SavedNews({ articles, onDeleteArticle }) {
  return (
    <main className="news-card-list">
      <div className="news-card-list__container">
        <h1 className="news-card-list__title">
          Saved articles ({articles.length})
        </h1>

        {articles.length === 0 ? (
          <p>You haven't saved any articles yet.</p>
        ) : (
          <div className="news-card-list__grid">
            {articles.map((article) => (
              <NewsCard
                key={article.url}
                article={article}
                isLoggedIn={true}
                isSaved={true}
                onDeleteArticle={onDeleteArticle}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

export default SavedNews
