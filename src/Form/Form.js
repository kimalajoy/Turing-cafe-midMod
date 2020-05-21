import React, {Component} from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state ={
      name:'',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  submitNewReservation = e => {
    e.preventDefault();
    const {addReservation} = this.props;
    const newReservation = {...this.state, id: Date.now()};
    addReservation(newReservation);
  }

  render() {
    return(
      <form>
        <input
          type='text'
          placeholder='name'
          name='name'
          onChange={this.handleChange}
        />
        <input
          type='date'
          placeholder='date'
          name='date'
          onChange={this.handleChange}
        />
        <input
          type='text'
          placeholder='time'
          name='time'
          onChange={this.handleChange}
        />
        <input
          type='number'
          placeholder='number of guests'
          name='number'
          onChange={this.handleChange}
        />
        <button onClick={this.submitNewReservation}>Make Reservation</button>
      </form>
    )
  }
}




//name, date, time, number of guests, button


export default Form;