import React from "react";
import Test2 from "./Test2";

class Test extends React.Component {
    constructor(props, zipcode){
        super(props);
        this.state = {
            zipcode: zipcode,
            error: null,
            isLoaded: false,
            items: []
        }
    };

    componentDidMount(){
        fetch('https://api.promaptools.com/service/us/zip-lat-lng/get/?zip=' + this.props.zipcode + '&key=17o8dysaCDrgv1c')
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        items: data.output[0]
                    });
                    console.log(data.output[0]);
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    };

    render(){
        const {error, isLoaded, items} = this.state;
        if(error){
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading ...</div>
        } else {
            return (
                <ul>
                    <li>Latitude: {items.latitude}</li>
                    <li>Longitude: {items.longitude}</li>
                    <li>ZipCode: {items.zip}</li>
                    <li>Forecast: </li>
                    <Test2 latitude={items.latitude} longitude={items.longitude}/>
                </ul>
                
            )
        }
    }
}

export default Test;