'use client'
import trackList from "@/public/trackList"
import trackList2 from "@/public/trackList2"
import Track from "./Track"
import { useEffect, useState } from "react"
import cn from "classnames"


const runSearch = (query)=>{
    if(!query){
        return trackList
    }
    const lowerCaseQuery = query.toLowerCase()
    return trackList.filter((track)=>track.title.toLowerCase().includes(lowerCaseQuery)|| track.artists.toLowerCase().includes(lowerCaseQuery)).concat(trackList2.filter((track)=>track.title.toLowerCase().includes(lowerCaseQuery)|| track.artists.toLowerCase().includes(lowerCaseQuery)))

}
const runSearchGenres = (query)=>{
    if(!query){
        return trackList
    }
    const lowerCaseQuery = query.toLowerCase()
    return trackList.filter((track)=>track.genre.toLowerCase().includes(lowerCaseQuery)).concat(trackList2.filter((track)=>track.genre.toLowerCase().includes(lowerCaseQuery)))

}




export default function Main(){
    let genres = ["Rock","Classic","Pop"]
    
    
    const [tracks,setTracks] = useState(trackList)
    const [tracks2,setTracks2] = useState(trackList2)
    const [genre,setGenre] = useState('')
    const handleChange = (event)=>{
        
        const foundTracks = runSearch(event.target.value)
        setTracks(foundTracks)
    }
    const handleGenreChange = (event)=>{
        event.preventDefault()
        setGenre(event.target.value)
        
        
        const foundTracks = runSearchGenres(event.target.value)
        setTracks(foundTracks)
    }

    
    
    
    return(
        <div className="w-4/6 m-auto pt-16">
            <form className="flex justify-center my-10">
                <input list="genresList" type="text" className="text-black  w-3/4 h-10 border rounded-xl px-5 " placeholder="Genre" value={genre} onChange={handleGenreChange}/>
                <datalist id='genresList'>
                    {genres.map((genre)=><option value={genre} key={genre}></option>)}
                </datalist>
            </form>
            <div className="flex justify-center my-10">
                <input placeholder="Search" onChange={handleChange} className="text-black  w-3/4 h-10 border rounded-xl px-5 " />
                
                
            </div>
            <div className={cn("" , genre!=="" && "hidden")}>
                 <div>
                    <h3>Recommendations for you</h3>
                </div>
                <div>
                    {tracks2.map((track)=><Track key={track.id+20}{...track}/>)}
                </div>
                <div>
                    <hr></hr>
                </div>
            </div>
           
            <div>
                {tracks.map((track)=><Track key={track.id}{...track}/>)}
            </div>
        </div>
    )
}