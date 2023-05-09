function ComicForm({updateFormData, addComic}) {
  return (

    <form onSubmit = {addComic} className="comic-form">

      <h2>Add A New Issue</h2>

      <label htmlFor="image_url">Image URL: </label>
      <input onChange= {updateFormData} name="image_url" />

      <label htmlFor="title">Title: </label>
      <input onChange= {updateFormData} name="title" />

      <label htmlFor="issue">Issue Number: </label>
      <input onChange= {updateFormData} name="issue" type="number" />

      <label htmlFor="description">Description: </label>
      <input onChange= {updateFormData} name="description" />

      <input type="submit" value="Add Issue" />

    </form>

  )
}

export default ComicForm
