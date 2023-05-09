import { useState } from "react"

function Comic({comic}) {

const [toggle, setToggle] = useState(false)

function handleToggle(){
  setToggle(!toggle)
}

if(toggle === false) {
  return (
    <div onClick= {handleToggle} className="comic-item">
    <img src={comic.image_url} alt={"Comic Issue Image"} />
    </div>
    )
} else {

  return (
  <div onClick= {handleToggle} className="comic-item">
      <h3>{comic.title}</h3>
      <h4>{comic.issue}</h4>
      <button >Remove</button>
    </div>

   ) }
  }

export default Comic
  



