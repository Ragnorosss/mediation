import { Routes,Route } from "react-router-dom"
import MainInfo from 'section/Maininfo'

export default function Main() {
	return (
    	<>
        	 <Routes>
        		<Route path ='*/main' element={<MainInfo/>}/>
      		</Routes>
    	</>
  )
}
