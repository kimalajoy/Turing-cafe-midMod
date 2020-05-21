import React from 'react';


const ReservationCards = (props) => {
  return (
    <section className='card-container'>
      <h1>{props.name}</h1>
      <p>Date: {props.date}</p>
      <p>Time: {props.time}</p>
      <p>Number in Party: {props.number}</p>
    </section>
  )
}

export default ReservationCards;

// 0: {id: 1, name: "Christie", date: "12/29", time: "7:00", number: 12}