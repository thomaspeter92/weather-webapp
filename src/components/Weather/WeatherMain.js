import React from 'react';
import styles from './WeatherMain.module.scss';

const WeatherMain = (props) => {
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed','Thur', 'Fri', 'Sat']
    let icon = props.data.weather[0].icon;
    let temp = props.data.main.temp;
    let desc = props.data.weather[0].description;
    let minTemp = props.data.main.temp_min;
    let maxTemp = props.data.main.temp_max;
    let humidity = props.data.main.humidity;
    let imgSrc = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    let imgurl = 'http://openweathermap.org/img/wn/'+icon+'.png';



    return (
        <div className={styles.WeatherMain}>
            <h4>{props.day}</h4>
            <div><img src={imgSrc} alt="weatherIcon"/></div>
            <p>{desc}</p>
            <h3>{props.cityName}</h3>
            <p>Temp: {temp}°</p>
            <p>High: {maxTemp}°</p>    
            <p>Low: {minTemp}°</p>  
            <p>Humidity: {humidity}%</p>  

        </div>
    )

}

export default WeatherMain;