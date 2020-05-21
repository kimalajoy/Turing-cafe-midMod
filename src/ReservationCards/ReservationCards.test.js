import React from 'react'
import ReservationCards from './ReservationCards'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('ReservationCards', () => {
  it('renders correctly', () => {

    const {getByText} = render(
    <ReservationCards 
      name='Beans McGee'
      date="2022-03-03"
      time={3}
      number={5}
    />)

    expect(getByText('Beans McGee')).toBeInTheDocument();
    expect(getByText('Date: 2022-03-03')).toBeInTheDocument();
    expect(getByText('Time: 3')).toBeInTheDocument();
    expect(getByText('Number in Party: 5')).toBeInTheDocument();

  });
});
