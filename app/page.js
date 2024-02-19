'use client'
import AudioProvider from '@/context/AudioContext'
import Main from '@/components/Main'
import Image from 'next/image'
import Playbar from '@/components/Playbar'




export default function Home() {
  return (
    <AudioProvider>
      <Playbar/>
      <Main />
    </AudioProvider>
    
    
  )
}
