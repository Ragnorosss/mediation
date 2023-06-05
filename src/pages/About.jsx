import Header from "section/Header"
import Hero from "section/Hero"
import AboutMediation from "section/AboutMediation"
import AboutProject from "section/AboutProject"
import Footer from "section/Footer"
import { Routes,Route } from "react-router-dom"
import Main from "./Main"
export default function About() {
  return (
    <>

      <Header/>
      <Hero/>
      <AboutMediation/>
      <AboutProject/>
      <Footer/>
      
    </>
    
  )
}
