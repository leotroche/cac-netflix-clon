import { useFetch } from '../../common/hooks/useFetch'
import {
  getOnTheAirSeries,
  getPopularMovies,
  getPopularSeries,
  getTopRatedMovies,
  getTopRatedSeries,
  getTrending,
  getUpcomingMovies
} from './services'

export const Home = () => {
  const { data: popularMovies } = useFetch(getPopularMovies)
  const { data: topRatedMovies } = useFetch(getTopRatedMovies)
  const { data: upcomingMovies } = useFetch(getUpcomingMovies)

  const { data: onTheAirSeries } = useFetch(getOnTheAirSeries)
  const { data: popularSeries } = useFetch(getPopularSeries)
  const { data: topRatedSeries } = useFetch(getTopRatedSeries)
  const { data: trending } = useFetch(getTrending)

  const data = {
    movies: [{ popularMovies, topRatedMovies, upcomingMovies }],
    series: [{ onTheAirSeries, popularSeries, topRatedSeries }],
    trending
  }

  console.log(data)

  return (
    <>
      <div>HOME</div>
    </>
  )
}
