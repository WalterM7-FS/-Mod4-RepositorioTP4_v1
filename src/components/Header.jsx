import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { useCart } from '../context/CartContext'

const Header = () => {
  const { onOpenModal } = useTheme()
  const { cart } = useCart()

  return (
    <header className='bg-gray-800 text-white p-4 shadow-md flex justify-between items-center'>
      <h1 className='text-xl font-bold'>Rick and Morty App</h1>
      <button
        className='bg-blue-900 text-cyan-200 p-2 rounded-2xl hover:bg-blue-600 transition cursor-pointer'
        onClick={onOpenModal}
      >
        Ver Favoritos ({cart.length})
      </button>
    </header>
  )
}

export default Header