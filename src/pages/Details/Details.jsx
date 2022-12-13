import { useState } from 'react'
import { useGetDetails } from './hooks/useGetDetails'

export const Modal = ({ children, showModal, setShowModal }) => {
  return (
    <div
      onClick={() => setShowModal(!showModal)}
      className='absolute inset-0 z-10 grid h-screen place-items-center bg-black/50'
    >
      {children}
    </div>
  )
}

export const Details = () => {
  const { data } = useGetDetails()
  console.log({ data })

  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className='relative p-6 text-white'>
        <div>
          <div className='flex h-[calc(100vh_-_96px)] flex-col justify-end gap-4'>
            {data.title && <h2 className='text-5xl font-bold'>{data.title}</h2>}
            <span className='flex gap-4'>
              {data.releaseDate && <span>{data.releaseDate}</span>}
              {data.runtime && <span>{data.runtime} minutes</span>}
            </span>
            {data.overview && <p className='max-w-[50%]'>{data.overview}</p>}
            {data.genres && data.genres.map((gen) => gen.name + ' • ')}
            <button
              className='w-24 rounded-md border-2 px-4 py-2 transition-colors hover:border-netflix hover:text-netflix'
              onClick={() => setShowModal(!showModal)}
            >
              TRAILER
            </button>
            {showModal && (
              <Modal showModal={showModal} setShowModal={setShowModal}>
                <iframe className='aspect-video w-[75%]' src={data.videos[0]} frameborder='0' />
              </Modal>
            )}
          </div>
        </div>
        <img
          className='absolute inset-0 -z-10 h-screen w-full'
          src={data.backdrop}
          alt={data.title || data.id}
        />
        <div className='radial-gradient' />
      </div>
    </>
  )
}
