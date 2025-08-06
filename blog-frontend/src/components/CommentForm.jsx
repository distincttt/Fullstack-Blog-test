import { useState } from 'react'

export const CommentForm = ({ articleId, initialComments = [] }) => {
  const [authorName, setAuthorName] = useState('')
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState(initialComments)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!authorName.trim() || !comment.trim()) return

    setSubmitting(true)
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/articles/${articleId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          author_name: authorName,
          content: comment,
        }),
      })

      if (!res.ok) throw new Error('Ошибка при отправке комментария')

      const newComment = await res.json()
      setComments((prev) => [...prev, newComment])
      setAuthorName('')
      setComment('')
    } catch (err) {
      console.error(err)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className='mt-6 p-[20px] lg:p-[30px] max-w-3xl w-full flex flex-col gap-[20px] border border-[#FFFFFF2E] bg-[var(--graphite-fog)] rounded-[20px]'>
      <h2 className='text-xl font-bold mb-3'>Комментарии:</h2>

      {comments.length === 0 && <p className='text-sm italic'>Комментариев пока нет.</p>}

      <ul className='space-y-2'>
        {comments.map((c) => (
          <li key={c.id} className='border border-[var(--medium-gra)] p-3 rounded-md'>
            <strong>{c.author_name}</strong>: {c.content}
          </li>
        ))}
      </ul>

      {/* Форма добавления комментария */}
      <form onSubmit={handleSubmit} className='mt-6 flex flex-col gap-3'>
        <input
          type='text'
          placeholder='Ваше имя'
          className='w-full'
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          required
        />
        <textarea
          placeholder='Ваш комментарий'
          className='w-full min-h-[70px] resize-none overflow-hidden'
          value={comment}
          onChange={(e) => {
            setComment(e.target.value)
            e.target.style.height = 'auto'
            e.target.style.height = e.target.scrollHeight + 'px'
          }}
          required
        />
        <button type='submit' className='btn-primary w-fit' disabled={submitting}>
          {submitting ? 'Отправка...' : 'Добавить комментарий'}
        </button>
      </form>
    </div>
  )
}
