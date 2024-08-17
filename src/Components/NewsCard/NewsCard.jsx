import DefaultImage from "../../assets/default-news-img1.jpg"
import React from 'react'

function NewsCard({news}) {
    const { author, title, description, publishedAt, url, urlToImage, source } = news;
  
    return (
      <div className="max-w-sm flex flex-col justify-between rounded overflow-hidden shadow-lg bg-slate-800">
        <img className="w-full h-40 object-cover" src={urlToImage ? urlToImage : DefaultImage} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-lg mb-2">{title}</div>
          <p className="text-gray-400 text-base">
            {description ? description : 'No description available.'}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 m-2 text-sm font-semibold text-gray-700 mr-2">
            {author ? author : 'Unknown Author'}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 m-2 text-sm font-semibold text-gray-700">
            {new Date(publishedAt).toLocaleDateString()}
          </span>
        </div>
        <div className="px-6 pb-4">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-block btn-neutral mt-3"
          >
            Read more
          </a>
        </div>
      </div>
    );
  };

export default NewsCard
