import {Error,Loader,SongCard} from '../components'
import {genres} from '../assets/constants.js'
import '../pages/Discover.css';

import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const Discover = () => {
   const {data, isFetching, error} = useGetTopChartsQuery();
   console.log(genres);
   const genreTitle = 'pop';

   if(isFetching) return <Loader title = "Loading Songs"></Loader>

   console.log(data)

   return(

    <div className="Discover {genreTitle}">
        <div className="search">
            <h2>Discover</h2>
           <select onChange={()=>{}}
            value = ""
            className='DropDown'>
            const genre;
            {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
           </select>
        </div>
        <div className="Container">
            <div className="cardCont gap-8 bg-white">
                {data?.map((song,i) => (
                    <SongCard 
                        key = {song.key}
                        song = {song}
                        i ={i}
                    />
                ))}
            </div>
        </div>
    </div>

   )
};

export default Discover;
