import {Error,Loader,SongCard} from '../components'
import {genres} from '../assets/constants.js'
import '../pages/Discover.css'
const Discover = () => {
   console.log(genres);
   const genreTitle = 'pop';

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
            <div className="cardCont gap-8">
                {[1,2,3,4,5,6,7,8,9,10].map((song,i) => (
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
