import React from 'react'
import Style from '@/components/Card/style.module.css'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { useQuery } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.graphcdn.app/',
  cache: new InMemoryCache(),
})

const PokeQuery = gql`
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
  //Alerta que aparece al dar click en boton de "Ver info"
  const Alert = () => {
    alert(`Haz hecho click en un boton`)
  }
  
  //Function para poner Mayuscula
  const FirstLetter = (str: any) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const { loading, error, data } = useQuery(PokeQuery)

  if (loading) {
    return <p>Cargando...</p>
  } else if (error) {
    return <p className={Style.Error}>A Ocurrido Un Error :( </p>
  }

  return (
    <div className={Style.Container}>
      {data.pokemons.results.map((pokemon: any) => (
        <div key={pokemon.id} className={Style.Card}>
          <div className={Style.CardInfo}>
            <p>
              <b>{pokemon.name.toUpperCase()}</b>
            </p>
            <img src={pokemon.image} className={Style.PokeImg}/>
            <button className={Style.Button} onClick={Alert}>
              Ver info de: <b>{FirstLetter(pokemon.name)}</b>
            </button>
            <p>{pokemon.id}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card