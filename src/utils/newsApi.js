
const API_KEY = import.meta.env.VITE_NEWS_API_KEY

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
    `https://newsapi.org/v2/everything?${params.toString()}`
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
