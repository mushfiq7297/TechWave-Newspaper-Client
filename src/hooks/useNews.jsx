import { useEffect, useState } from 'react';

const useNews = () => {
    const [news,setNews] = useState([])
    const [loading, setLoading] = useState(true);
     useEffect(() => {
       fetch('http://localhost:5000/allArticle')
            .then(res => res.json())
            .then(data => {
                setNews(data);
                setLoading(false);
        });
    }, [])

    return [news, loading]
        
};

export default useNews;