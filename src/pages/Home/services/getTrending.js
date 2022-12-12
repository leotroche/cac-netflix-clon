import { TMDB } from '../../../config/tmdb'
import { listAdapter } from '../adapters/listAdapter'

export const getTrending = async () => {
  const resp = await TMDB.api(TMDB.path.trending)
  return listAdapter(resp.data.results)
}
