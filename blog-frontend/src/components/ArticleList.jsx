import { Link } from 'react-router-dom'

export const ArticleList = ({ articles }) => {
  return (
    <section className='p-[5px] lg:p-[20px] m-[0_auto]! max-w-7xl flex flex-col gap-[20px]'>
      <h1 className='text-[32px] leading-9 lg:text-[44px] lg:leading-[44px] 2xl:text-[50px] 2xl:leading-[50px] font-bold capitalize text-center inline-block'>
        Article List
      </h1>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[30px]'>
        {articles.map((article) => (
          <Link key={article.id} to={`/article/${article.id}`}>
            <li className='group h-[340px] p-[20px] flex flex-col gap-[10px] mb-[20px] relative cursor-pointer rounded-[20px] border border-[#FFFFFF2E] bg-[var(--graphite-fog)] overflow-y-auto scrollbar-hide'>
              <h2 className='font-semibold text-lg relative'>
                <span className='text-white group-hover:opacity-0 transition-opacity duration-300'>
                  {article.title}
                </span>
                <span
                  className='absolute inset-0 bg-[var(--green-gradient)] bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                  style={{ backgroundImage: 'var(--green-gradient)' }}
                >
                  {article.title}
                </span>
              </h2>
              <div
                className='px-[10px] py-[2px] max-w-max text-sm font-semibold rounded-md'
                style={{ backgroundImage: 'var(--green-gradient)', color: 'var(--dark-gray)' }}
              >
                {new Date(article.created_at).toLocaleDateString()}
              </div>
              <span className='font-light text-[var(--medium-gray)]'>{article.content}</span>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  )
}
