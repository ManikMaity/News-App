import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { fetchNews } from '../../services/fetchNews';
import NewsCard from '../NewsCard/NewsCard';

function NewsSection({category}) {

  let [page, setPage] = useState(1);

  const {data, isLoading, isError, error} = useQuery(["news", page, category], () => fetchNews(page, category), {
    // retry : 2,
    // retryDelay : 1000,
    cacheTime : 1000*60*2,
    staleTime : 1000*60*10
  })

  if (isLoading){
    return  (<div className='w-full h-80 grid place-content-center'>
      <span className="loading loading-spinner loading-lg my-auto"></span>
    </div>)
  }
  if (isError){
    return <div>{error.message}</div>
  }

  return (
    <div className='px-6 py-8'>
      <h2 className='font-bold text-4xl mb-8'>{category.toUpperCase()} NEWS</h2>
      <div className='grid grid-cols-4 gap-6'>
      {data?.map((article, index) => {
        return (
          <NewsCard news={article} key={index}/>
        )
      })}
      </div>

<div className='w-full grid place-content-center py-4'>
<div className='pagination flex gap-7 text-white '>
      <button disabled={page <= 1} onClick={() => {setPage(page-1)}} className="btn btn-secondary">Previous</button>
      <button onClick={() => {setPage(page +1)}} className="btn btn-secondary">Next</button>
      </div>
</div>
      
      
    </div>
  )
}

export default NewsSection
