import React from 'react'
import styles from "../styles/card-big.module.scss"
import Cloudy from "../assets/images/cloudy.png"


function CardBig({city}) {

    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday']
    const cityInfo = city?.city
    const D = new Date(city.list[0].dt * 1000)
    const day = weekDays[D.getDay()]

    const temp = city.list[0].main.temp
    const tempLow = city.list[0].main.temp_min
    const tempHigh = city.list[0].main.temp_max

    return (
        <div className={styles.cardBig}>
            <h2>{cityInfo?.name}, {cityInfo?.country}</h2>
            <h4>{day}</h4>

            <img src={Cloudy} className={styles.img}/>

            <h3>{temp}°</h3>
            <div style={{display: 'flex', justifyContent: 'space-around', }}>
                <h4>low: {tempLow}</h4>
                <h4>high: {tempHigh}</h4>
            </div>
            
            <h5>Scattered Clouds</h5>

        </div>
    )
}

export default CardBig
