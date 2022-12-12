import { TMDB } from '../../../config/tmdb'
import { listAdapter } from '../adapters/listAdapter'

export const getUpcomingMovies = async () => {
  const resp = await TMDB.api(TMDB.path.movies.upcoming)
  return listAdapter(resp.data.results)
}
