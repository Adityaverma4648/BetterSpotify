import {Link} from 'react-router-dom';
import '../pages/Discover.css';
import {useDispatch} from 'react-redux';

// import playPause  from './PlayPause';
import {playPause , setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({song,i}) => (
    <div className='flex flex-col w-[250px] bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>
        <div className="relative w-full h-56 group">
            <div className={"absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}}"}>
                <playPause />
            </div>
               <img src={song.images?.coverart} alt="song_img" />
        </div>
        <div className='mt-4 flex flex-col'>
                  <p className='font-semibold text-lg truncate'>
                    <Link to={'/songs/${song?.key}'}>
                        {song.title}
                    </Link>
                  </p>
                  <p className='font-semibold text-lg truncate'>
                    <Link to = {song.artist?'/artists/{$song?.artist[0]?.adamid}' : '/top-artists'}>
                        {song.subtitle}
                    </Link>
                  </p>
        </div>
    </div>
);

export default SongCard;
