
const API_KEY = import.meta.env.VITE_NEWS_API_KEY
const NEWS_API_URL = import.meta.env.PROD
  ? 'https://nomoreparties.co/news/v2/everything'
  : 'https://newsapi.org/v2/everything'

export async function searchNews(keyword) {
  if (!API_KEY) {
    throw new Error('NewsAPI key is missing')
  }

  const to = new Date()
  const from = new Date(to)
  from.setDate(from.getDate() - 7)

  const params = new URLSearchParams({
    q: keyword,
    from: from.toISOString().slice(0, 10),
    to: to.toISOString().slice(0, 10),
    language: 'en',
    sortBy: 'publishedAt',
    pageSize: '100',
    apiKey: API_KEY,
  })

  const response = await fetch(
  `${NEWS_API_URL}?${params.toString()}`,
  { signal: AbortSignal.timeout(10000) }
)

  const data = await response.json()

  if (!response.ok || data.status !== 'ok') {
    throw new Error(data.message || 'Unable to fetch news')
  }

  const seenTitles = new Set()

return data.articles.filter((article) => {
  if (
    !article.title ||
    !article.url ||
    !article.urlToImage ||
    !article.description ||
    !article.publishedAt
  ) {
    return false
  }

  const title = article.title.trim().toLowerCase()

  if (seenTitles.has(title)) {
    return false
  }

  seenTitles.add(title)
  return true
})
}
