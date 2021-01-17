import React from 'react';
import WeatherMain from '../../components/Weather/WeatherMain'
import Aux from '../../hoc/Aux'
import WeatherBrief from '../../components/Weather/WeatherBrief';

class WeatherContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }

    //FUNCTION TO RETURN DAY OF WEEK
    getDay = (timestamp) => {
    let daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let myDate = new Date(timestamp*1000);
    return (daysArray[myDate.getDay()]);
    }



    render() {
        let cards = <p>Please search for a location...</p>
        if (this.props.weatherData.cod === '200') {
            let weatherInfo = {...this.props.weatherData}
            cards = [];
            cards.push(
                <WeatherMain
                    key={0}
                    data={weatherInfo.list[0]}
                    cityName={weatherInfo.city.name}
                    day={this.getDay(weatherInfo.list[0].dt)}
                />)
            for(let i = 8; i<weatherInfo.list.length; i+=8) {
                let data = weatherInfo.list[i]
                let icon = data.weather[0].icon;
                let temp = data.main.temp;
                let desc = data.weather[0].description;
                cards.push(
                    <WeatherBrief
                        key={i}
                        temp={temp} 
                        desc={desc}
                        icon={icon}
                        day={this.getDay(data.dt)}
                    />
                    )
            }
        }
        return (
            <Aux>
                {cards}
            </Aux>
        )
    }
}

export default WeatherContainer;