// Components
import { Header, Row } from '../../common/components'

// Hooks
import { useFetch } from '../../common/hooks/useFetch'

// Services
import {
  // getOnTheAirSeries,
  getPopularMovies,
  // getPopularSeries,
  getTopRatedMovies,
  // getTopRatedSeries,
  getTrending,
  getUpcomingMovies
} from './services'

export const Home = () => {
  const { data: popularMovies } = useFetch(getPopularMovies)
  const { data: topRatedMovies } = useFetch(getTopRatedMovies)
  const { data: upcomingMovies } = useFetch(getUpcomingMovies)

  // const { data: onTheAirSeries } = useFetch(getOnTheAirSeries)
  // const { data: popularSeries } = useFetch(getPopularSeries)
  // const { data: topRatedSeries } = useFetch(getTopRatedSeries)

  const { data: trending } = useFetch(getTrending)

  return (
    <div>
      <Header />
      <Row rowId='1' title='Proximamente' items={upcomingMovies} />
      <Row rowId='2' title='Tendencia' items={trending} />
      <Row rowId='3' title='Mejor valorado' items={topRatedMovies} />
      <Row rowId='4' title='Popular' items={popularMovies} />
    </div>
  )
}
