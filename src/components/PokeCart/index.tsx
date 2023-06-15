import React from "react"


const PokeCart = () => {
  const Alerta = () => {
    alert("Haz hecho click en el boton")
  }
  return (
    <div className="Container">
      <div className="ContainerFT">
        <img
          className="PokeImg"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          alt="PokeImg"
        />
        <p className="Name"><b>Nombre</b></p>
        <button className="Button" onClick={Alerta}> Ver info</button>
      </div>
    </div>
  )
}

export default PokeCart