import { Route, Routes } from 'react-router-dom'
import { Home, Login, Media, Details } from '../pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<Login />} path='/login' />

      <Route element={<Media />} path='/all-movies' />
      <Route element={<Media />} path='/all-series' />
      <Route element={<Media />} path='/trending' />

      <Route element={<Details />} path='/movie/:id' />
      <Route element={<Details />} path='/tv/:id' />
    </Routes>
  )
}
