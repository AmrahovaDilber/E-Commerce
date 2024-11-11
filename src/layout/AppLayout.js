import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import TapToTopButton from '../components/TapToTop/TapToTop'

export default function AppLayout({children}) {
  return (
      <div>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
          <TapToTopButton/>
    </div>
  )
}
