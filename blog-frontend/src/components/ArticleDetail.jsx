import { Link } from 'react-router-dom'
import { CommentForm } from './CommentForm'

export const ArticleDetail = ({ article }) => {
  return (
    <section className='flex flex-col items-center justify-center min-h-screen p-[10px]'>
      <Link to='/' className='self-start mb-6 flex items-center text-lg btn-primary'>
        Назад к статьям
      </Link>

      <div className='p-[20px] lg:p-[30px] max-w-3xl w-full flex flex-col gap-[20px] border border-[#FFFFFF2E] bg-[var(--graphite-fog)] rounded-[20px]'>
        <h1 className='text-[32px] leading-9 lg:text-[44px] lg:leading-[44px] 2xl:text-[50px] 2xl:leading-[50px] font-bold capitalize text-center inline-block'>
          {article.title}
        </h1>
        <span className='font-semibold text-lg relative'>{article.content}</span>
        <span>
          Published on:
          <span
            className='px-[10px] py-[2px] max-w-max text-sm font-semibold rounded-md ml-1'
            style={{ backgroundImage: 'var(--green-gradient)', color: 'var(--dark-gray)' }}
          >
            {new Date(article.created_at).toLocaleDateString()}
          </span>
        </span>
      </div>
      <CommentForm articleId={article.id} initialComments={article.comments} />
    </section>
  )
}
