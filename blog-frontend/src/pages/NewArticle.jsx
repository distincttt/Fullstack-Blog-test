import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArticleForm } from '../components/ArticleForm'

export const NewArticle = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleCreate = async ({ title, content }) => {
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('http://127.0.0.1:8000/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      })

      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.message || 'Ошибка при создании статьи')
      }

      navigate('/')
    } catch (error) {
      console.error('Ошибка:', error)
      setError(error.message || 'Произошла ошибка при создании статьи')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className='min-h-screen p-6 max-w-3xl flex flex-col items-center justify-center mx-auto'>
      <h1 className='text-3xl font-bold mb-6'>Создание статьи</h1>

      {error && <span className='text-4xl text-center font-bold text-red-500'>{error}</span>}

      {loading ? <div className='loader'></div> : <ArticleForm onSubmit={handleCreate} />}
    </main>
  )
}
