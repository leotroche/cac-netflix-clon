import { TMDB } from '../../../../config/tmdb'
import { listAdapter } from '../../adapters/listAdapter'

export const getTopRatedMovies = async () => {
  const resp = await TMDB.api(TMDB.path.movies.top_rated)
  return listAdapter(resp.data.results)
}
