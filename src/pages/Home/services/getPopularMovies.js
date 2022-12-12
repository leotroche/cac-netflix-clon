import { TMDB } from '../../../config/tmdb'
import { listAdapter } from '../adapters/listAdapter'

export const getPopularMovies = async () => {
  const resp = await TMDB.api(TMDB.path.movies.popular)
  return listAdapter(resp.data.results)
}
