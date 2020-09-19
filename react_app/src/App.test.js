import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Register members statement', () => {
  
  test('Login form should be in the document', ()=>{
    const component = render(<App />)
    let emailInput = component.getByText('First Name:');
    expect(emailInput).toBeInTheDocument()
  })

  test('Input fields should have label', ()=>{
    const component = render(<App />)
    let emailInput = component.getByLabelText('Email:');
    expect(emailInput.getAttribute('name')).toBe('email');
  })

  test('email field should accept text value', () => {
    const handleChange = jest.fn();
    const component = render(<App handleChange={handleChange} />);
    const emailInputNode = component.getByLabelText('Last Name:');
    fireEvent.change(emailInputNode, {target: {value: 'testing'}});
    expect(emailInputNode.value).toBe('testing');
  })

  test('Form should submit for valid input', ()=>{
    const mockSubmit = jest.fn();
    const component = render(<App handleSubmit={mockSubmit} />);
    const inputNodeFirstName = component.getByLabelText('First Name:');
    const inputNodeLastName = component.getByLabelText('Last Name:');
    const inputNodeEmail = component.getByLabelText('Email:');
    fireEvent.change(inputNodeFirstName, {target: {value: 'Sagar'}});
    fireEvent.change(inputNodeLastName, {target: {value: 'Ekhe'}});
    fireEvent.change(inputNodeEmail, {target: {value: 'sagar@gmail.com'}});
    fireEvent.click(component.getByRole('button'));
    expect(mockSubmit).toHaveBeenCalledTimes(1);
  })

  test('Form should not submit for invalid inputs', ()=>{
    const mockSubmit = jest.fn();
    const component = render(<App handleSubmit={mockSubmit} />);
    const inputNodeFirstName = component.getByLabelText('First Name:');
    const inputNodeLastName = component.getByLabelText('Last Name:');
    const inputNodeEmail = component.getByLabelText('Email:');
    fireEvent.change(inputNodeFirstName, {target: {value: 'Sagar3'}});
    fireEvent.change(inputNodeLastName, {target: {value: 'Ekhe4'}});
    fireEvent.change(inputNodeEmail, {target: {value: 'sagar@gil.com'}});
    fireEvent.click(component.getByRole('button'));
    expect(mockSubmit).toHaveBeenCalledTimes(0);
  })
})