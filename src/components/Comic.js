import { useState } from "react"

function Comic({comic, deleteComic}) {

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
  <div className="comic-item">
      <h3 onClick= {handleToggle}>{comic.title}</h3>
      <h4>{comic.issue}</h4>
      <button onClick={() => {
        deleteComic(comic.id)
      }}>Remove</button>
    </div>

   ) }
  }

export default Comic
  



