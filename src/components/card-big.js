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
    const icon = city.list[0].weather[0].icon
    const humidity = city.list[0].main.humidity
    const pressure = city.list[0].main.pressure
    const wind = city.list[0].wind.speed
    const description = city.list[0].weather[0].description



    return (
        <div className={styles.cardBig}>
            <h2>{cityInfo?.name}, {cityInfo?.country}</h2>
            <h4>{day}</h4>

            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} className={styles.img}/>

            <h3>{temp}°</h3>
            <h5>{description}</h5>

            <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                <div>
                    <p>Humidity:</p>
                    <h4>{humidity}%</h4>
                </div>
                <div>
                    <p>Pressure:</p>
                    <h4>{pressure} hPa</h4>
                </div>
                <div>
                    <p>Wind:</p>
                    <h4>{wind} m/sec</h4>
                </div>
            </div>
            

        </div>
    )
}

export default CardBig
