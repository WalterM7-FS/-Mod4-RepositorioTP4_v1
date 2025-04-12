import React, { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

const Data = ({ characters, setCharacters }) => {
  
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)


  const handleSubmit = async (e) => {
    e.preventDefault()
    toast.info('Obteniendo el personaje...')
    

    if (!query.trim()) {
      toast.error('Ingrese nombre de personaje')
      setError('El dato ingresado es inválido')
      return
    }

    try {
      const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
      setCharacters(data.results)
      setError(null)
    } catch (err) {
      setError(err.message)
      setCharacters([])
      toast.error('Error al obtener el personaje')
    }
  }
  
  return (
    <>
      <div className='p-6 bg-gray-900 text-white text-center mt-2'>
        <h1 className='text-3xl font-bold'>Rick and Morty</h1>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-4'>
          
          <label className='text-xl'>Personajes de Rick and Morty 
            <input
              type='text'
              placeholder='Búsqueda de personajes'
              value={query}
              onChange={e => setQuery(e.target.value)}
              className='bg-gray-800 p-2 w-full text-white rounded'
            />
            
          </label>

          <button
            type='submit'
            className='bg-blue-500 p-2 rounded-2xl m-4'>
            Obtener el/los Personaje/s
          </button>
        </form>
        <hr />
        <div>
          <h2 className='mt-4 text-xl italic '>Nombre de los personajes:</h2>
          {characters.length > 0 && characters.map((character) => (
          <p key={character.id} className='mt-4 text-xl text-cyan-400 italic '>
            
             {character.name}: estado {character.status} - especie {character.species} (id: {character.id})
             
             {characters.length === 0 && !error && query.trim() !== '' && (
            <p className='text-yellow-400 mt-4'>No se encontraron personajes con ese nombre.</p>
          )}
          </p>
          ))}
            
        </div>
        
        {error && <p className='text-red-500 mt-4'>{error}</p>}    

      </div>
    </>
  )
}

export default Data