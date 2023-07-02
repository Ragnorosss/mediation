import Footer from 'section/Footer'
import Header from 'section/Header'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
      <Header/>
        <Outlet></Outlet>
      <Footer/>
    </>
  )
}

export default Layout
