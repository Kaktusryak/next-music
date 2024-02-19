import { SlControlPlay,SlControlPause,SlHeart,SlClose  } from "react-icons/sl";
import { useContext,useState } from "react";
import { AudioContext } from "@/context/AudioContext";
import cn from "classnames"


export default function Track(track){
    const {id,src,preview,title,artists,duration,genre} = track

    const [isLiked,setLiked] = useState(false)

    const {handleToggleAudio,currentTrack,isPlaying}=useContext(AudioContext)
    const isCurrentTrack = currentTrack.id===track.id




    return(
        <div className={cn("flex justify-between h-20 my-5 border rounded-xl items-center relative px-10 " , isCurrentTrack && "bg-slate-900")}>
            
            <button onClick={()=>handleToggleAudio(track)}>
                {isCurrentTrack && isPlaying ? <SlControlPause/> : <SlControlPlay />}
                
            </button>
            <img src={preview} className="h-fit max-h-full border absolute left-20 "/>
            <b className=" absolute left-40">{title} </b>
            <b className=" absolute left-1/3">{genre} </b>
            <p className=" absolute left-3/4">{artists}</p>
            <p>{duration}</p>
            <button onClick={()=>setLiked(!isLiked)}>
                {isLiked ? <SlClose/> : <SlHeart />}
                
            </button>
            
        </div>
    )
}