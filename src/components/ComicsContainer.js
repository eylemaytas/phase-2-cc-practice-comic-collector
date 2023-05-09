import Comic from "./Comic"

function ComicsContainer({comics, deleteComic}) {

  const comic = comics.map((comic) => {
  return <Comic key={comic.id} comic={comic} deleteComic={deleteComic}/>
  })
  return (
    <div>
     {comic}
    </div>
  )

}

export default ComicsContainer