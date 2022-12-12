import { TMDB } from '../../../config/tmdb'

export const detailsAdapter = (data = [], videos = []) => {
  const src = videos.map((video) => `https://www.youtube.com/embed/${video.key}`)

  return {
    backdrop: TMDB.path.images.backdrop_high + data.backdrop_path,
    genres: data.genres,
    id: data.id,
    overview: data.overview,
    poster: TMDB.path.images.poster_high + data.poster_path,
    rating: data.vote_agerage,
    releaseDate: data.release_date,
    runtime: data.runtime,
    title: data.title,
    videos: src
  }
}
