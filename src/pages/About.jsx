import { Routes,Route } from "react-router-dom"
import Header from "section/Header"
import Hero from "section/Hero"
import AboutMediation from "section/AboutMediation"
import AboutProject from "section/AboutProject"
import Footer from "section/Footer"
import "style/styles.scss"
export default function About() {
  return (
    <>
      <Routes>
        <Route path ='*' element={<Header/>}/>
      </Routes>
      <Hero/>
      <AboutMediation/>
      <AboutProject/>
      <Routes>
        <Route path ='*' element={<Footer/>}/>
      </Routes>
      
    </>
  )
}
