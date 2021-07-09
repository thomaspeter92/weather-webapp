import React from 'react'
import styles from '../styles/card-small.module.scss'
import Cloudy from "../assets/images/cloudy.png"


function CardSmall({info}) {

    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed','Thur', 'Fri', 'Sat']
    const D = new Date(info.dt * 1000)
    const day = weekDays[D.getDay(info.main.temp_min)]


    const temp = Math.floor(info.main.temp)


    console.log(info)

    return (
        <div className={styles.cardSmall}>
            <h4>{day}</h4>
            <img className={styles.img} src={Cloudy} />
            <p>{temp}°</p>
        </div>
    )
}

export default CardSmall
