import React from 'react'
import { useQuery } from '@apollo/client'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.graphcdn.app/',
  cache: new InMemoryCache(),
})

const UrlDePokes = gql`
  query {
    pokemons {
      results {
        name
        image
        id
      }
    }
  }
`

const Card = () => {
  const { loading, error, data } = useQuery(UrlDePokes)

  if (loading) {
    return <p>Cargando...</p>
  } else if (error) {
    return <p>Error: {error.message}</p>
  }

  const Alert = () => {
    alert(`Haz hecho click en el boton de: {pokemon.name}`) 
  }

  function capitalizeFirstLetter(str: any) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <div className="Container">
      {data.pokemons.results.map((pokemon: any) => (
        <div key={pokemon.id} className="Card">
          <div className="CardInfo">
            <p>
              <b>{pokemon.name.toUpperCase()}</b>
            </p>
            <img className="PokeImg" src={pokemon.image} alt={pokemon.name} />
            <button className="Button" onClick={Alert}>
              Ver info de: <b>{capitalizeFirstLetter(pokemon.name)}</b>
            </button>
            <p>{pokemon.id}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
