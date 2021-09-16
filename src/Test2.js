import React from "react";

class Test2 extends React.Component {
    constructor(props, {latitude, longitude}){
        super(props);
        this.state = {
            logitude: longitude,
            latitude: latitude,
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount(){
        fetch('https://api.weather.gov/points/' + this.props.latitude +',' + this.props.longitude +'/forecast')
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        items: data.properties.periods
                    })
                    console.log(data.properties.periods);
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    render(){
        return(
            <div>
                {this.state.items.map(item => (
                    <ul id={item.number} key={item.number}> 
                        <img src={item.icon} alt="icon"/>
                        <li>Day: {item.name}</li>
                        <li>Temp: {item.temperature}</li>
                        <li>Wind Speed: {item.windSpeed}</li>
                        <li>Wind Direction: {item.windDirection}</li>
                        <li>Forecast: {item.shortForecast}</li>
                        <li>Details: {item.detailedForecast}</li>
                        <br></br>
                    </ul>
                ))}
            </div>
        )
    }
}

export default Test2;