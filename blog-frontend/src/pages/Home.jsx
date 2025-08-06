import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArticleList } from '../components/ArticleList'

export const Home = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/articles')
        if (!response.ok) throw new Error('Ошибка загрузки статей')
        const data = await response.json()
        setArticles(data)
        setError(null)
      } catch (err) {
        console.error('Ошибка:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  return (
    <main className='min-h-screen p-4 flex flex-col justify-center items-center'>
      {loading ? (
        <div className='loader'></div>
      ) : error ? (
        <span className='text-4xl text-center font-bold text-red-500'>{error}</span>
      ) : articles.length === 0 ? (
        <div className='flex flex-col gap-4 items-center'>
          <span className='text-4xl font-bold'>Статьи не найдены</span>
          <Link to='/new' className='btn-primary'>
            Добавить статью
          </Link>
        </div>
      ) : (
        <>
          <Link to='/new' className='btn-primary'>
            Добавить статью
          </Link>
          <ArticleList articles={articles} />
        </>
      )}
    </main>
  )
}
