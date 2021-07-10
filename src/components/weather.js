import React, {useState} from 'react'
import styles from '../styles/weather.module.scss'
import CardSmall from './card-small'
import CardBig from './card-big'
import Search from './search'
import Cloudy from "../assets/images/cloudy.png"
import Modal from "../components/modal"

function Weather() {

    const [currentCity, setCurrentCity] = useState("")
    const [searchError, setError] = useState(false)

    console.log(searchError)

    const getWeatherFromCity = (city) => {
        const APP_ID = "42f31002a9e81edcd1aa8cd52b456cc9";
        fetch(`http://api.openweathermap.org/data/2.5/forecast/?units=metric&q=${city}&APPID=${APP_ID}`)
        .then((res) => res.json())
        .then(
            (result) => {
                if (result.cod === '200') {
                    let city = {
                        city: result.city,
                        list: []
                    }
                    result.list.forEach((item, index) => {
                        if(index === 0 || index % 8 === 0) {
                            city.list.push(item)
                        }
                    });
                    // console.log(city)
                    setCurrentCity(city)
                    setError(false)

                } else {
                    setError(true)
                }

            },
            (error) => {
                console.log(error)
                setError(true)
                console.log(searchError)
            }
        )
    }

    console.log(currentCity)


    return (
        <div className={styles.weather}>
            <div className={styles.column_left}>
                <img className={styles.logo} src={Cloudy} />
                <h1>Weather App</h1>
                <Search search={getWeatherFromCity} />
                <div className={styles.side_panel}>More Info</div>
                <div className={styles.side_panel}>Applications</div>
                <div className={styles.side_panel}>Downloads</div>
            </div>
            <div className={styles.column_right}>
                {currentCity.list ? <CardBig city={currentCity}/> : null}
                <div className={styles.card_container}>

                    {currentCity.list ? currentCity.list.map((item, index) => {
                        if (index === 0) {
                            return null
                        } else {
                            return (
                                <CardSmall key={item.dt} info={item} />
                            )
                        }
                    }): null}

                </div>
                {searchError === true ? 
                <Modal close={() => setError(false)}/>
                : null}
            </div>
        </div>
    )
}

export default Weather
