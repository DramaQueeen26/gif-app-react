import { useState } from "react"

export const AddCategory = () => {

  const [inputValue, setInputValue] = useState('One Punch')

  const onChange = ({ target }) => {

    setInputValue( target.value )

  }

  const onSubmit = (event) => {

    event.preventDefault()

    console.log(inputValue)

  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder="Buscar gifs"
          onChange={onChange}
          value={inputValue}
        />
      </form>
    </>
  )
}
