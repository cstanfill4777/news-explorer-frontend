import './NewsCard.css'

function NewsCard({ article }) {
  const date = new Date(article.publishedAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <article className="news-card">
      <a
        className="news-card__link"
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="news-card__image"
          src={article.urlToImage}
          alt={article.title}
        />
        <div className="news-card__content">
          <time className="news-card__date" dateTime={article.publishedAt}>
            {date}
          </time>
          <h3 className="news-card__title">{article.title}</h3>
          <p className="news-card__description">{article.description}</p>
          <p className="news-card__source">{article.source.name}</p>
        </div>
      </a>
      <button
        className="news-card__bookmark"
        type="button"
        aria-label="Save article"
        title="Sign in to save articles"
      >
        ♧
      </button>
    </article>
  )
}

export default NewsCard
