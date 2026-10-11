
import { useState } from 'react'
import NewsCard from '../NewsCard/NewsCard'
import './NewsCardList.css'

function NewsCardList({ articles }) {
  const [visibleCount, setVisibleCount] = useState(3)

  const visibleArticles = articles.slice(0, visibleCount)
  const hasMore = visibleCount < articles.length

  return (
    <section className="news-card-list">
      <div className="news-card-list__container">
        <h2 className="news-card-list__title">Search results</h2>

        <div className="news-card-list__grid">
          {visibleArticles.map((article) => (
            <NewsCard key={article.url} article={article} />
          ))}
        </div>

        {hasMore && (
          <button
            className="news-card-list__more"
            type="button"
            onClick={() => setVisibleCount((count) => count + 3)}
          >
            Show more
          </button>
        )}
      </div>
    </section>
  )
}

export default NewsCardList
