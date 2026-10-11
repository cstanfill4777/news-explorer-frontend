
const STORAGE_KEY = 'newsExplorerSavedArticles'

export function getSavedArticles() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  } catch {
    return []
  }
}

export function saveArticle(article) {
  const articles = getSavedArticles()

  if (!articles.some((item) => item.url === article.url)) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([...articles, article])
    )
  }

  return getSavedArticles()
}

export function deleteArticle(url) {
  const articles = getSavedArticles().filter(
    (article) => article.url !== url
  )

  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles))
  return articles
}
