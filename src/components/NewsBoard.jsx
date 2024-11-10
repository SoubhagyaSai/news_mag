import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // Loading state
  
    useEffect(() => {
      const fetchArticles = async () => {
        setLoading(true); // Start loading

        // const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=cb70ee13af884e9aa0d021b1e9a9fa26`;
         const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
  
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Failed to fetch articles');
          }
          const data = await response.json();
          setArticles(data.articles);
          setLoading(false); // Stop loading
        } catch (err) {
          setError(err.message);
          setLoading(false); // Stop loading
        }
      };
  
      fetchArticles();
    }, [category]);
  return (
    <>
      <h2 className='text-center'>Latest <span className='badge bg-primary mt-4'>News.</span></h2>
      {
        loading ? (
        <div className='text-center mt-5'>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (articles.map((news, index) => {
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        }))
      }
    </>
  )
}

export default NewsBoard
