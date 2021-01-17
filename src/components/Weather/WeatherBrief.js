import React from 'react';
import styles from './WeatherBrief.module.scss'

const WeatherBrief = (props) => {
    let imgSrc = "http://openweathermap.org/img/wn/"+props.icon+"@2x.png"    

    return (
        <div className={styles.WeatherBrief}>
            <img src={imgSrc} alt="weatherIcon"/>
            <p>{props.temp}°</p>
            <p>{props.desc}</p>
            <h4>{props.day}</h4>         
        </div>
    )
}

export default WeatherBrief;