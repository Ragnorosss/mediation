import { useState } from "react"
export default function About() {
  const [items, setitems] = useState ([1,2,3,4,5,6]) 
  return (
    <section className="about">
      <div className="slider">
        <div className="slider__wrapper">
          {items.map(() => {
            <div className=""></div>
          })}
        </div>
      </div>
    </section>
  )
}
