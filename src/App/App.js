import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations';
import {getReservations} from '../apiCalls';
import Form from '../Form/Form'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  addReservation = newReservation => {
    this.setState({reservations: [...this.state.reservations, newReservation]})
  }

  componentDidMount = async () => {
    const reservations = await getReservations();
    this.setState({reservations: [...this.state.reservations, ...reservations]})
  }

    render() {
      return (
        <div className="App">
          <h1 className='app-title'>Turing Cafe Reservations!</h1>
          <div className='resy-form'>
            <Form addReservation={this.addReservation}/>
          </div>
          <div className='resy-container'>
            <Reservations 
              reservations={this.state.reservations}
            />
          </div>
        </div>
      )
    }
  
}

export default App;
