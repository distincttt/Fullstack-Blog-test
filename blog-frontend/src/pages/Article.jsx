import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArticleDetail } from '../components/ArticleDetail'

export const Article = () => {
  const { id } = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/articles/${id}`)
        const data = await response.json()
        setArticle(data)
        setError(null)
      } catch (err) {
        console.error('Ошибка:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchArticle()
  }, [id])

  return (
    <main className='flex items-center justify-center min-h-screen'>
      {loading ? (
        <div className='loader'></div>
      ) : error ? (
        <span className='text-4xl text-center font-bold text-red-500'>{error}</span>
      ) : !article ? (
        <span className='text-4xl font-bold text-center'>Article not found.</span>
      ) : (
        <ArticleDetail article={article} />
      )}
    </main>
  )
}
