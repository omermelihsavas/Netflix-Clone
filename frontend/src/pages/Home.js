import React from 'react'
import Header from '../components/Header'
import Trailer from '../components/Trailer'
import FilmSlider from '../components/FilmSlider'
import TvSeriesSlider from '../components/TvSeriesSlider'
import TopFilmSlider from '../components/TopFilmSlider'
import TopSeriesSlider from '../components/TopSeriesSlider'
import PopularSlider from '../components/PopularSlider'
import Footer from '../components/Footer'

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
      <Footer />
    </div>
  )
}
