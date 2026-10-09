
import { useState } from 'react'
import NewsCardList from '../NewsCardList/NewsCardList'
import { mockArticles } from '../../utils/mockArticles'

function Main() {
  const [articles] = useState(mockArticles)

  return (
    <main>
      <NewsCardList articles={articles} />
    </main>
  )
}

export default Main
