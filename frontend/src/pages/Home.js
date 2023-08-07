import React from 'react'
import Header from '../components/home/Header'
import Trailer from '../components/home/Trailer'
import FilmSlider from '../components/home/FilmSlider'
import TvSeriesSlider from '../components/home/TvSeriesSlider'
import TopFilmSlider from '../components/home/TopFilmSlider'
import TopSeriesSlider from '../components/home/TopSeriesSlider'
import PopularSlider from '../components/home/PopularSlider'
import HomeFooter from '../components/home/HomeFooter'

export default function Home() {
  return (
    <div className='main-view'>
      <Trailer />
      <Header />
      <PopularSlider /> 
      <TopFilmSlider />
      <FilmSlider />
      <TopSeriesSlider />
      <TvSeriesSlider />
      <HomeFooter />
    </div>
  )
}
