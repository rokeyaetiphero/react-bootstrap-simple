import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadLine = () => {
    const [articles,setArticles] = useState([])
    useEffect( ()=>{
    const url = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-10-11&sortBy=publishedAt&apiKey=09ab908c8cc24862a772df107d1a946f';
     fetch(url)
     .then(res => res.json())
     .then(data =>setArticles(data.articles))
    },[])

    return (
        <div>
            <h1>Top Headlines: {articles.length}</h1>
            {
                articles.map(article => <News></News>)
            }
        </div>
    );
};

export default TopHeadLine;