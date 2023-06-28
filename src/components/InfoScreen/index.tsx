import React from 'react'
import Style from '@/components/InfoScreen/styles.module.css'

const InfoScreen = () => {
  return (
    <div className={Style.Container}>
      <div className={Style.Derecha}>
        <img src="3.png" width={290} height={290} className={Style.Imagen} />
        <div className={Style.Nombre}>
          <p>Venusaur</p>
        </div>
        <div className={Style.Veneno}>
          <p className={Style.Texto}>Cesped</p>
          <p className={Style.Texto1}>Veneno</p>
        </div>
      </div>
      <hr/>
      <div className={Style.Izquierda}>
          <p>HABILIDADES</p>
          <p>SE MUEVE</p>
      </div>
    </div>
  )
}

export default InfoScreen
