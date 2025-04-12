import React from 'react'
import { useCart } from '../context/CartContext'
import { useTheme } from '../context/ThemeContext'

const Cart = () => {
  const { isModalOpen, onClose } = useTheme()
  const { removeFromCart, cart } = useCart()

  if (!isModalOpen) return null

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-gray-700 rounded-lg shadow-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-hidden relative'>

        <button
          className='absolute top-2 right-4 text-2xl hover:rotate-180 cursor-pointer transition'
          onClick={onClose}
        >
          ✖️
        </button>

        <p className='text-cyan-200 text-center text-lg font-semibold mb-4'>
          Lista de Personajes Favoritos:
        </p>

        {
          cart.length === 0 ? (
            <p className='text-white text-center'>No tienes personajes seleccionados como favoritos</p>
          ) : (
            <div className='max-h-[60vh] overflow-y-auto space-y-4 pr-2'>
              {cart.map((character) => (
                <div
                  className='bg-gray-600 p-4 rounded-xl shadow-md text-white'
                  key={character.id}
                >
                  <img
                    src={character.image}
                    alt={character.name}
                    className='w-24 h-24 object-cover rounded-lg mx-auto mb-2'
                  />
                  <p className='text-lg font-semibold text-center'>{character.name}</p>
                  <p className='text-sm text-center'>Estado: {character.status}</p>
                  <p className='text-sm text-center'>Especie: {character.species}</p>

                  <button
                    className='bg-red-500 p-2 mt-2 w-full rounded-2xl hover:bg-red-700 transition text-white'
                    onClick={() => removeFromCart(character.id)}
                  >
                    Remover de favoritos
                  </button>
                </div>
              ))}
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Cart