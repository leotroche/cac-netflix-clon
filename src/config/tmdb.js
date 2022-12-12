import axios from 'axios'
import { ENV } from '../environment/environment.js'

export const TMDB = {
  api: axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: ENV.API_KEY
    },
    timeout: 2000
  }),

  path: {
    movies: {
      popular: '/movie/popular',
      top_rated: '/movie/top_rated',
      upcoming: '/movie/upcoming'
    },

    series: {
      on_the_air: '/tv/on_the_air',
      popular: '/tv/popular',
      top_rated: '/tv/top_rated'
    },

    movie: {
      details: (id) => `/movie/${id}`,
      search: '/search/movie',
      videos: (id) => `/movie/${id}/videos`
    },

    serie: {
      details: (id) => `/tv/${id}`,
      search: '/search/tv',
      videos: (id) => `/tv/${id}/videos`
    },

    trending: '/trending/all/day',

    images: {
      poster_low: 'https://image.tmdb.org/t/p/w185',
      poster_high: 'https://image.tmdb.org/t/p/w500',
      poster_original: 'https://image.tmdb.org/t/p/original',
      backdrop_low: 'https://image.tmdb.org/t/p/w300',
      backdrop_high: 'https://image.tmdb.org/t/p/w1280',
      backdrop_original: 'https://image.tmdb.org/t/p/original'
    }
  }
}
