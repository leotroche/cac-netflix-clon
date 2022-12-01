import React from 'react'
import Header from '../../components/Header'
import Row from '../../components/Row'
import requests from '../../Requests'

const Home = () => {
  return (
    <div>
      <div className='text-white '>
          <Header/>
          <Row rowId='1' title='Proximamente' fetchUrl={requests.requestUpcoming}/>
          <Row rowId='2' title='Horror' fetchUrl={requests.requestHorror}/>
          <Row rowId='3' title='Tendencia' fetchUrl={requests.requestTrending}/>
          <Row rowId='4' title='Mejor valorado' fetchUrl={requests.requestTopRated}/>
          <Row rowId='5' title='Popular' fetchUrl={requests.requestPopular}/>
      </div>
    </div>
  )
}

export default Home 