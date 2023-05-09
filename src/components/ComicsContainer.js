import Comic from "./Comic"

function ComicsContainer({comics}) {

  const comic = comics.map((comic) => {
  return <Comic key={comic.id} comic={comic} />
  })
  return (
    <div>
     {comic}
    </div>
  )

}

export default ComicsContainer