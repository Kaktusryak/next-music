'use client'
import trackList from "@/public/trackList";
import { createContext,useEffect,useState } from "react";
import { AudioHTMLAttributes } from "react";



export const AudioContext = createContext({})

let audio = null

if (typeof window !== 'undefined') {
    
    audio = new Audio();
}



const AudioProvider = ({children})=>{
    const [currentTrack,setCurrentTrack] = useState(trackList[0])
    const [isPlaying,setPlaying] = useState(false)
    

    useEffect(()=>{
        console.log("hello")
    },[])
    

    const handleToggleAudio=async(track)=>{
        console.log("Click")

        if(currentTrack.id!==track.id){
            setCurrentTrack(track)
            setPlaying(true)
            audio.src=track.src
            audio.currentTime=0
            audio.play();

            let music_id = track.id
            let music_name = track.title
            let music_artists = track.artists
            try {
                const res= await fetch("http://localhost:3000/api/reports/",{
                    method:"POST",
                    headers:{
                        "Content-type": "application/json"
                    },
                    body:JSON.stringify({music_id,music_name,music_artists})
                })
                if(res.ok){
                    console.log('posted report')
                }else{
                    throw new Error('error while posting report')
                }
            } catch (error) {
                console.log(error)
            }
           
            
            return;
        }

        if(isPlaying){
            audio.pause()
            setPlaying(false)
        }
        else{
            audio.play();
            console.log('playing')
 
            
            setPlaying(true)
        }







    }

    const value = {audio,currentTrack,isPlaying,handleToggleAudio}

    return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
}

export default AudioProvider