import React from 'react';


const ReservationCards = (props) => {
  return (
    <section>
      <h1>{props.name}</h1>
      <h2>{props.date}</h2>
      <h3>{props.time}</h3>
      <h3>{props.number}</h3>
    </section>
  )
}

export default ReservationCards;

// 0: {id: 1, name: "Christie", date: "12/29", time: "7:00", number: 12}