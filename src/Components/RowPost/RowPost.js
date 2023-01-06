import React,{  useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY, imageUrl} from '../../Constants/Constant'
import YouTube from 'react-youtube';

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId,setUrlId]=useState('')
    useEffect(()=>{
      axios.get(props.url).then((response)=>{
          console.log(response.data);
         
          setMovies(response.data.results)
          
      })
    },[props.url])

    

    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    }; 

    const handleMovie = (id)=>{
      console.log(id);
      axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        if (response.data.results.length !==0){
          setUrlId(response.data.results[0])
        }else{
          console.log("Arry emty");
        }
      })
    }
    
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
              {movies.map((movie)=>
                  <img  onClick={()=>handleMovie(movie.id)} className={ props.isSmall ? 'smallPoster ':'poster'} src={`${imageUrl+movie.backdrop_path}`} alt="poster  " />
              )}

        </div> 

       { urlId && <YouTube videoId={urlId.key} opts={opts} /> } 
    </div>
    
  )
}

export default RowPost