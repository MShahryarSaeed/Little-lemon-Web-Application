import React from 'react';
import './Booking.css';

const FormField = ({children,label,htmlFor, hasError, errorMessage}) => {
  return (
    <div className='form-field'>
        <label htmlFor={htmlFor}>{label}</label>
        {children}
        {
            hasError && errorMessage ? <p className='error-message'>{errorMessage}</p> :null
        }

    </div>
  )
}

export default FormField