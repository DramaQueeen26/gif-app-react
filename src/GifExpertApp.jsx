import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'Naruto', 'Dragon Ball' ])

  const onAddCategory = ( category ) => {

    if( categories.includes( category ) ) return

    setCategories([ ...categories, category])
  }

  return (
    <>
      
      <h1>GifExpertApp</h1>
      
      <AddCategory onAddCategory={ onAddCategory } />
      
      <ol>
        {
          categories.map( ( category, i ) => {
            return <li key={ i }> { category } </li>
          })
        }
      </ol>
    
    </>
  )
}
