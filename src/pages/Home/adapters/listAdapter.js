import { TMDB } from '@/api/tmdb'

export const listAdapter = (items = []) => {
  return items.map((item) => {
    return {
      backdrop: TMDB.path.images.backdrop_high + item.backdrop_path,
      genres: item.genres,
      id: item.id,
      overview: item.overview,
      poster: TMDB.path.images.poster_high + item.poster_path,
      rating: item.vote_agerage,
      releaseDate: item.release_date,
      runtime: item.runtime,
      title: item.title,
      isMovie: item.original_title
    }
  })
}
