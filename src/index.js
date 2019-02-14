import React from 'react'; 
import ReactDOM from'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{
    //constructor function is a js function, auto have props 
    constructor(props){
        //super is a reference the the parent's constructor function.
        super(props);

        this.state = { lat: null };

        //place the window.navigator to save the time, cuz it runs every time at the render()
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //we called setState!!!
                this.setState({ lat:position.coords.latitude});

                //we did not
                //this.state.lat = lat:position.coords.latitude;
            },
            (err)=> console.log(err) //error call back 
        ); 
    }

    //React says we have to define rendre !!
    render(){
        

        return <div>Latitude: {this.state.lat} </div>
    }
}
ReactDOM.render(<App/>, document.querySelector('#root'));
