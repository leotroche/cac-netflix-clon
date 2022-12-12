import { TMDB } from '../../../config/tmdb'
import { detailsAdapter } from '../adapters/detailsAdapter'

export const getMovieDetails = async (id) => {
  const details = await TMDB.api(TMDB.path.movie.details(id))
  const videos = await TMDB.api(TMDB.path.movie.videos(id))

  return detailsAdapter(details.data, videos.data.results)
}
