import React from 'react'
import Form from './Form'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Form', () => {
  it('should render correctly', () => {
    
    const {getByPlaceholderText} = render(
    <Form />)

  expect(getByPlaceholderText('name')).toBeInTheDocument();
  expect(getByPlaceholderText('date')).toBeInTheDocument();
  expect(getByPlaceholderText('time')).toBeInTheDocument();
  expect(getByPlaceholderText('number of guests')).toBeInTheDocument();
  });
  
  it('should display what is entered in the box', () => {
    const {ByDisplayValue} = render(
    <Form 
    />)


    // expect(ByDisplayValue('beans')).toBeInTheDocument();
  });
  
});
