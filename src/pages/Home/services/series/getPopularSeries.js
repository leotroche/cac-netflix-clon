import { TMDB } from '../../../../config/tmdb'
import { listAdapter } from '../../adapters/listAdapter'

export const getPopularSeries = async () => {
  const resp = await TMDB.api(TMDB.path.series.popular)
  return listAdapter(resp.data.results)
}
