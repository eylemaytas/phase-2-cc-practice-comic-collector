import ComicsContainer from "./ComicsContainer"
import ComicForm from "./ComicForm"
import { useState, useEffect } from "react";

function App() {

const [comics, setComics] = useState([])

useEffect(() => {
  fetch("http://localhost:8004/comics")
  .then(res => res.json())
  .then(comicsData => setComics(comicsData))
}, [])

const [formData, setFormData] = useState({})

function updateFormData(event) {
  setFormData({...formData, [event.target.name]: event.target.value})
  console.log(formData)
}



function addComic(event){
  event.preventDefault()
fetch("http://localhost:8004/comics/ ", {
  method: "POST",
  headers: {
    "Content-type": " application/json",
    "Accept": "application/json" 
  },
body: JSON.stringify(formData)
})
.then(res => res.json())
.then(newComic => setComics(newComic))

  setComics([...comics, {id:comics.length + 1, ...formData}])
}


  return (
    <div className="App">

      <h1>Comicbook Collector</h1>

      <div className="grid with-sidebar">

        <div className="flex-container">
          <ComicsContainer comics={comics}/>
        </div>

        <div className="sidebar">
          <ComicForm updateFormData={updateFormData} addComic={addComic}/>
        </div>

      </div>


    </div>
  );
}

export default App;