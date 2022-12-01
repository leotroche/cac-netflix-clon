import axios from 'axios'
import { ENV } from '../environment/environment.js'

export const TMDB = {
  api: axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: ENV.API_KEY
      // language: 'es-MX'
      // page: 1
    },
    timeout: 2000
  }),

  /***/
  movies: {
    popular: '/movie/popular',
    top_rated: '/movie/top_rated'
  },
  series: {
    popular: '/tv/popular',
    top_rated: '/tv/top_rated'
  },
  details: {
    movie: '/movie/',
    serie: '/tv/'
  },
  /***/

  images: {
    base_url: 'https://image.tmdb.org/t/p/',
    poster_high: 'https://image.tmdb.org/t/p/w500',
    poster_original: 'https://image.tmdb.org/t/p/original',
    poster_low: 'https://image.tmdb.org/t/p/w185',
    backdrop_high: 'https://image.tmdb.org/t/p/w1280',
    backdrop_low: 'https://image.tmdb.org/t/p/w300',
    backdrop_original: 'https://image.tmdb.org/t/p/original',
    sizes: {
      poster: {
        w92: 'w92',
        w154: 'w154',
        w185: 'w185',
        w342: 'w342',
        w500: 'w500',
        w780: '780',
        original: 'original'
      },
      backdrop: {
        w300: 'w300',
        w780: 'w780',
        w1280: 'w1280',
        original: 'original'
      }
    }
  }
}
