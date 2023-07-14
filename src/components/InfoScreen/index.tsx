import React from 'react'
import Style from '@/components/InfoScreen/styles.module.css'
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  cache: new InMemoryCache(),
})

type Ability = {
  ability: {
    name: string
  }
}
const Habilidades = ({ abilities }: { abilities: Ability[] }) => {
  return (
    <div>
      <div className={Style.Izquierda}>
        <p className={Style.descripcion}>SKILLS</p>
        {abilities.map((ability: any) => (
          <p key={ability.ability.name}>{ability.ability.name}...</p>
        ))}
      </div>
    </div>
  )
}

type Move = {
  move: {
    name: string
  }
}

const Movimiento = ({ moves }: { moves: Move[] }) => {
  return (
    <p className={Style.movimientoos}>
      MOVE
      {moves.map((move: any) => (
        <p key={move.move.name}>{move.move.name}</p>
      ))}
    </p>
  )
}

const InfoScreen = () => {
  const { loading, error, data } = useQuery(
    gql`
      query Pokemon($id: String!) {
        pokemon(name: $id) {
          name
          id
          moves {
            move {
              name
            }
          }
          sprites {
            front_default
          }
          abilities {
            ability {
              name
            }
          }
          types {
            type {
              name
            }
          }
        }
      }
    `,
    {
      variables: {
        id: '50',
      },
    }
  )

  if (loading) {
    return <p className={Style.TextLoading}>Ten Pasiencia...</p>
  } else if (error) {
    return <p className={Style.Error}>¡Tienes un error!</p>
  }

  const types = data.pokemon.types.map((type: any) => type.type.name)

  const pokemon = data.pokemon

  const sprite = pokemon.sprites.front_default

  return (
    <div className={Style.Container}>
      <div key={pokemon.id} className={Style.InfoScreen}>
        <div className={Style.Derecha}>
          {sprite && <img src={sprite} className={Style.Imagen} />}
          <div className={Style.Nombre}>
            <p>{pokemon.name}</p>
          </div>
          <div className={Style.Veneno}>
            {types.map((type: any) => (
              <p key={type} className={Style.Texto}>
                {type}
              </p>
            ))}
          </div>
          <p className={Style.Id}>{pokemon.id}</p>
        </div>
        <hr />
        <div className={Style.Descripciones}>
          <Habilidades abilities={pokemon.abilities} />
          <hr />
          <Movimiento moves={pokemon.moves} />
        </div>
      </div>
    </div>
  )
}

export default InfoScreen
