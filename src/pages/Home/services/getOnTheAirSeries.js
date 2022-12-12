import { TMDB } from '../../../config/tmdb'
import { listAdapter } from '../adapters/listAdapter'

export const getOnTheAirSeries = async () => {
  const resp = await TMDB.api(TMDB.path.series.on_the_air)
  return listAdapter(resp.data.results)
}
