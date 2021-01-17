import React from 'react';
import styles from './Layout.module.scss'
import SearchContainer from './SearchContainer/SearchContainer';
import WeatherContainer from './WeatherContainer/WeatherContainer';

// Get the value from the input
// call ajax function upon submit
// if success, chage state with results. if fail, return null.
// pass down the city data as props to Weather container and so on. 



class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            items: [],
            submitted: false, 
            inputValue: ''
        }
    }

    //AJAX
    getWeatherFromCity(city) {
        const APP_ID = "42f31002a9e81edcd1aa8cd52b456cc9";
        fetch(`http://api.openweathermap.org/data/2.5/forecast/?units=metric&q=${city}&APPID=${APP_ID}`)
        .then((res) => res.json())
        .then(
            (result) => {
                console.log(result)
                if (result.cod === '200') {
                    this.setState({
                    isLoaded: true,
                    items: result
                })
                }
            },
            (error) => {
                console.log(error)
                this.setState({
                    isLoaded: true,
                    error: error,
                });
            }
        )
    }

    handleSubmit = () => {
        if (this.state.inputValue.length > 2) {
            this.getWeatherFromCity(this.state.inputValue)
            this.setState({inputValue: ''})
        } else {
            return null
        }
    }

    handleChange = (city) => {
        console.log(city)
        this.setState({inputValue: city})
    }



    render() {
        return (
            <div className={styles.Layout}>
                <h2>Weather App</h2>
                <SearchContainer inputValue={this.state.inputValue} submit={this.handleSubmit} handleChange={this.handleChange}/>
                <WeatherContainer weatherData={this.state.items}/>
            </div>
        )
    }

}

export default Layout