import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import LandingCover from '../components/LandingCover'
import MovieList from '../components/MovieList'
import MovieListReg from '../components/MovieListReg'

export default function Home() {
  return (

    <div className="bg-gray-800 w-screen h-full">
      <NavBar/>
      <LandingCover/>
      
      <MovieList sectionName="Trending Now"/>
      
      
    </div>
   
  )
}
