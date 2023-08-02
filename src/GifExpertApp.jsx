import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

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
      
      {
        categories.map( ( category ) => (
            <GifGrid key={ category } category={ category } />
          ))
      }
    
    </>
  )
}
