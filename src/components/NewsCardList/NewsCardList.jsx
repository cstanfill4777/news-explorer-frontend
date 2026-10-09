
import NewsCard from '../NewsCard/NewsCard'
import './NewsCardList.css'

function NewsCardList({ articles }) {
  return (
    <section className="news-card-list">
      <div className="news-card-list__container">
        <h2 className="news-card-list__title">Search results</h2>
        <div className="news-card-list__grid">
          {articles.map((article) => (
            <NewsCard
              key={article.url}
              article={article}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsCardList
