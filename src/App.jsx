
import React, { useState } from 'react'
import Header from "./components/Header"
import Cart from "./components/Cart"
import ProductList from "./components/ProductList"
import ThemeToggleButton from './components/ThemeToggleButton'
import Data from './components/Data'

function App() {
  const [characters, setCharacters] = useState([]) 

  return (
    <>
      <Header />
      <ProductList characters={characters} setCharacters={setCharacters} />
      <Cart />
      <ThemeToggleButton />
      <Data characters={characters} setCharacters={setCharacters} />
    </>
  )
}

export default App
