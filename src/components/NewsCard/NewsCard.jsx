
import './NewsCard.css'

function NewsCard({
  article,
  isLoggedIn = false,
  isSaved = false,
  onSaveArticle,
  onDeleteArticle,
}) {
  const date = new Date(article.publishedAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  function handleBookmarkClick() {
    if (!isLoggedIn) return

    if (isSaved) {
      onDeleteArticle(article.url)
    } else {
      onSaveArticle(article)
    }
  }

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
        className={`news-card__bookmark ${
          isSaved ? 'news-card__bookmark_saved' : ''
        }`}
        type="button"
        aria-label={isSaved ? 'Remove saved article' : 'Save article'}
        aria-pressed={isSaved}
        title={!isLoggedIn ? 'Sign in to save articles' : undefined}
        onClick={handleBookmarkClick}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M6 3.5H18V21L12 17L6 21V3.5Z"
            fill={isSaved ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </article>
  )
}

export default NewsCard
