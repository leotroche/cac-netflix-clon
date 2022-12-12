import { useLocation, useParams } from 'react-router-dom'
import { useFetch } from '../../../common/hooks/useFetch'
import { getMovieDetails, getSerieDetails } from '../services'

export const useGetDetails = () => {
  const { id } = useParams()
  const { pathname } = useLocation()

  const service = pathname.includes('movie') ? getMovieDetails : getSerieDetails

  return useFetch(() => service(id))
}
