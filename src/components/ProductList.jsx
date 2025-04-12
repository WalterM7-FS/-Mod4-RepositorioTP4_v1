import React from 'react'
import { useCart } from '../context/CartContext'

const ProductList = ({ characters }) => {

  const {addToCart} = useCart()
  
  
  return (
    <div className='p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {characters.map((character) => (
        <div
          key={character.id}
          className='bg-gray-600 p-4 rounded-2xl shadow-md text-center'
        >
          
          <h3 className='p-2 text-3xl text-amber-100 font-semibold'>{character.name}</h3>
          <p className='p-2 text-3xl text-amber-100 font-semibold'>Estado: {character.status}</p>
          <img
            src={character.image}
            alt={character.name}
            className='w-full h-48 object-cover rounded-lg mb-4 mx-auto'
          />
          <button
            className='bg-blue-900 text-cyan-200 p-2 rounded-2xl hover:bg-blue-600 transition cursor-pointer'
            onClick={() => addToCart(character) }
          >
            Agregar a favoritos
          </button>
        </div>
      ))}


    </div>
  )
}

export default ProductList 