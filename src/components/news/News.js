import '../../css_framework/Bootstrap.min.css'
import '../home/Home.css';
import '../../css_framework/Tailwind.min.css';
import './News.css';
import Navbar from '../home/Navbar';
import { useReducer,useEffect } from 'react';
import LoadingNews from './LoadingNews';
import { initialNewsState,newsReducer } from './newsReducer';

const News = () => {
    
    const [newsState, dispatch] = useReducer(newsReducer,initialNewsState)
    const lotLoading = Array(9).fill("");
    const apiKey = "63d6c84aca384450ab49f58c9ebfc937";

    const callApiNews = async()=>{
        const response = await fetch(`https://newsapi.org/v2/everything?q=${newsState.param}&apiKey=${apiKey}`);
        const {articles} = await response.json();
        dispatch({type:'get_data_news',dataNews:articles});
        dispatch({type:"change_finished"});
    }

    const handleChangeSearch = (e)=>{
        dispatch({type:"change_param",param:e.target.value});
    }

    const handleClickSearch = async (e)=>{
            e.preventDefault();
            dispatch({type:"change_finished"});
        await callApiNews();
    }

    useEffect(()=>{
        callApiNews();
    },[]);


    return(
        <>
            <Navbar/>
            <div className="lg:container gap-4 mt-10 mx-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <form className="flex h-16 col-span-1 md:col-span-2 lg:col-span-3">
                    <input type="text" onChange={handleChangeSearch} 
                    placeholder="Search news in here" className="flex-1 mx-auto h-16 px-3 text-xl 
                    rounded-lg shadow-search outline-none" />
                    <button onClick={handleClickSearch} type="submit" className="bg-yellow-600 ml-2 p-2 rounded-lg w-36 text-xl text-white">Search</button>
                </form>
                {
                    newsState.finished ? 
                    newsState.dataNews.map(({author,title,publishedAt,urlToImage,url,description})=>{
                        const date = new Date(publishedAt).toLocaleDateString();
                        return(
                            <a href={url} key={title} target="_blank" className="my-2 block shadow-card-news rounded-lg p-3 relative col-span-1">
                                <figure className="h-52 relative bg-white -top-7 shadow-lg w-full mx-auto rounded-lg overflow-hidden">
                                    <img className="object-cover object-top h-full w-full" src={urlToImage} alt={title} />
                                </figure>
                                <h2 className="mb-3 font-bold text-xl lg:text-lg">{title}</h2>
                                <div className="flex my-1">
                                    <p className="text-gray-500 text-sm mr-2">{date}</p>
                                    <p className="text-gray-500 text-sm ml-2">{author}</p>
                                </div>
                                <p className="my-2 text-sm">
                                    {description}
                                </p>
                            </a>
                        )
                    })
                    :
                    lotLoading.map((data,index)=>{
                        return(
                            <LoadingNews key={index}/>
                        )
                    })
                }
            </div>
        </>
    )
}

export default News;