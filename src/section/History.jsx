import Card from "UI/card/Card"
import { useState } from "react"
export default function History() {
  
  const [items, setitems] = useState ([1,2,3,4,5,6]) 

  const cardContent = [
    {id:1,title:'1',subtitle:'11'},
    {id:2,title:'2',subtitle:'22'},
    {id:3,title:'3',subtitle:'33'},
]
  return (
    <section className="about">
      <div className="slider">
        <div className="slider__wrapper">
          <Card cardContent={cardContent}/>
        </div>
      </div>      
    </section>
  )
}
