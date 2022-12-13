import { getPopularMovies } from '../../pages/Home/services'
import { useFetch } from '../hooks/useFetch'

export const Header = () => {
  const { data } = useFetch(getPopularMovies)
  const movie = data[Math.floor(Math.random() * data.length)]

  return (
    <div className='relative h-[550px] w-full text-white'>
      <div className='h-full w-full'>
        <div className='absolute h-[600px] w-full' />
        <img
          className='h-full w-full object-cover object-top'
          src={movie?.backdrop}
          alt={movie?.title}
        />
        <div className='absolute top-[20%] w-full p-4 md:p-8'>
          <h1 className='text-3xl font-bold md:text-5xl'>{movie?.title}</h1>
          <div className='my-4'>
            <button className='border border-gray-300 bg-gray-300 py-2 px-5 text-black'>
              Reproduccion
            </button>
            <button className='ml-4 border border-gray-300 py-2 px-5'>Ver despues</button>
          </div>
          <p className='text-sm text-gray-400'>Realizado: {movie?.release_date}</p>
          <p className='w-full text-gray-200 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]'>
            {movie?.overview}
          </p>
        </div>
      </div>
    </div>
  )
}
