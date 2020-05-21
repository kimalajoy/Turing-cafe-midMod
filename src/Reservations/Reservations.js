import React from 'react';
import ReservationCards from '../ReservationCards/ReservationCards';


const Reservations = (props) => {
  console.log(props)

  return(
    <div>
      <section>
        {props.reservations.map(reservationCard => {
          return (
            <ReservationCards 
                key={reservationCard.id}
                id={reservationCard.id}
                name={reservationCard.name}
                date={reservationCard.date}
                time={reservationCard.time}
                number={reservationCard.number}
              />
          )
        })}
      </section>
    </div>
  )
}

export default Reservations;

// 0: {id: 1, name: "Christie", date: "12/29", time: "7:00", number: 12}