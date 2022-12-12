import { TMDB } from '../../../config/tmdb'
import { listAdapter } from '../adapters/listAdapter'

export const getTopRatedSeries = async () => {
  const resp = await TMDB.api(TMDB.path.series.top_rated)
  return listAdapter(resp.data.results)
}
