import React from 'react'
import Aside from '../../components/Aside'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <Aside />
      <main>
       <Outlet />
      </main>
    </>
  )
}

export default MainLayout