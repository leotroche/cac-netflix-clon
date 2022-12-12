import { useGetDetails } from './hooks/useGetDetails'

export const Details = () => {
  const { data } = useGetDetails()
  console.log({ data })

  return (
    <>
      <div>DETAILS</div>
    </>
  )
}
