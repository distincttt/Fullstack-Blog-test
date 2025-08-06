import { useState } from 'react'
import { Link } from 'react-router-dom'

export const ArticleForm = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState(initialData ? initialData.title : '')
  const [content, setContent] = useState(initialData ? initialData.content : '')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ title, content })
  }

  return (
    <div className='max-w-3xl w-full flex flex-col gap-[20px]'>
      <Link to='/' className='self-start mb-6 flex items-center text-lg btn-primary'>
        Назад к статьям
      </Link>
      <form
        onSubmit={handleSubmit}
        className='p-[20px] lg:p-[30px] space-y-[20px] border border-[#FFFFFF2E] bg-[var(--graphite-fog)] rounded-[20px]'
      >
        <div>
          <label htmlFor='title' className='font-semibold text-lg'>
            Заголовок:
          </label>
          <input
            type='text'
            id='title'
            className='w-full'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Введите заголовок статьи'
            required
          />
        </div>
        <div>
          <label htmlFor='content' className='font-semibold text-lg'>
            Текст:
          </label>
          <textarea
            id='content'
            value={content}
            className='w-full min-h-[70px] resize-none overflow-hidden'
            onChange={(e) => {
              setContent(e.target.value)
              e.target.style.height = 'auto'
              e.target.style.height = e.target.scrollHeight + 'px'
            }}
            placeholder='Введите текст статьи'
            required
          />
        </div>
        <button type='submit' className='btn-primary'>
          Разместить статью
        </button>
      </form>
    </div>
  )
}
