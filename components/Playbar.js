import { AudioContext } from "@/context/AudioContext"
import { Slider } from "@mui/material";
import Link from "next/link";
import { useContext , useState, useEffect} from "react"
import { SlControlPlay,SlControlPause } from "react-icons/sl";



export default function Playbar(){
    const {audio, currentTrack,handleToggleAudio,isPlaying} = useContext(AudioContext)
    const [currentTime,setCurrentTime] = useState(0)

    const {title,artists,preview,duration} = currentTrack

    const sliderCurrentTime = Math.round(currentTime/duration*100)

    const handleChangeCurrentTime =(event,value)=>{
        const time = Math.round(value/100*duration)
        setCurrentTime(time)
        audio.currentTime=time
    }


    useEffect(()=>{
        const timeInterval = setInterval(()=>{
            setCurrentTime(audio.currentTime)
        },1000)
    },[])


    return(
        <div className="w-full bg-white h-16 flex justify-between text-black items-center px-24 fixed top-0 z-10" >
            <div>
                
                <Link href="/login" className="border rounded-lg border-black p-4 ">Login </Link>
            </div>
            <img src={preview} className="h-12"/>
            <button onClick={()=>handleToggleAudio(currentTrack)}>
                { isPlaying ? <SlControlPause/> : <SlControlPlay />}
            </button>
            <div className="flex-col items-center justify-center">
                <h4>{title}</h4>
                <p>{artists}</p>
            </div>
            <div className="flex w-4/6">
                <p className="mx-10">{Math.round(currentTime)}</p>
                <Slider step={1} min={0} max={100} value={sliderCurrentTime} onChange={handleChangeCurrentTime}/>
                <p className="mx-10">{duration}</p>
            </div>
        </div>
    )
}