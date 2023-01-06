import React , {useEffect} from 'react'
import './Banner.css'
import {API_KEY , imageUrl} from '../../Constants/Constant'
import axios from '../../axios'
import {useState} from 'react'


function Banner() {
    let [movie,setMovie] = useState('')
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
          console.log(response.data.results[0])
           let randomMovies =  Math.floor((Math.random() * 10) + 1);
          setMovie(response.data.results[randomMovies]) 
          // setMovie(randomMovies) 

          
          
        })
    }, [])
  
    

  return (
    <div 
    style={{backgroundImage : `url(${imageUrl+movie.backdrop_path})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'> {movie.title}</h1>
            <div className='banner-buttons'>
                <button className='button'> Play</button>
                <button className='button'> My List</button>
            </div>
            <h1 className='description'> {movie.overview}</h1>
        </div>
       <div className="fade_bottom"></div>
       
    </div>
  )
}

export default Banner