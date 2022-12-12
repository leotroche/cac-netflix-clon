import { TMDB } from '../../../config/tmdb'
import { detailsAdapter } from '../adapters/detailsAdapter'

export const getSerieDetails = async (id) => {
  const details = await TMDB.api(TMDB.path.serie.details(id))
  const videos = await TMDB.api(TMDB.path.serie.videos(id))

  return detailsAdapter(details.data, videos.data.results)
}
