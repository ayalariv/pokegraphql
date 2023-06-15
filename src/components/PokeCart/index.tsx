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

const Cart = () => {
  const { loading, error, data } = useQuery(UrlDePokes)

  if (loading) {
    return <p>Cargando...</p>
  } else if (error) {
    return <p>Error: {error.message}</p>
  }

  return (
    <div className="Container">
      {data.pokemons.results.map((pokemon: any) => (
        <div key={pokemon.id} className="Card">
          <div className="CardInfo">
            <p>
              <b>{pokemon.name}</b>
            </p>
            <img className="PokeImg" src={pokemon.image} alt={pokemon.name} />
            <button className="Button">
              Ver info de <b>{pokemon.name}</b>
            </button>
            <p>{pokemon.id}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cart
