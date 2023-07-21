import React, { useState } from 'react';
import FormField from './FormField';
import './Booking.css';

const BookingForm = ({ availableTimes, dispatchOnDateChange, submitData }) => {

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // submitData({ date, time, numberOfGuests, occassion, });
    submitData(date,Time,numberofGuests,submitData,occasion);
  }

const minimumDate=new Date().toISOString().split('T')[0];
const minimumnumberofGuests=1;
const maximumNumberOfGuests=10;
const occasions=['Birthday','Aniversary'];
const invalidDateErrorMessage='Please Choose a Valid Date';
const invalidTimeErrorMessage='Please choose a valid Time';
const invalidNumberOfGuestsErrorMessage='Please enter a number between 1 and 10';
const invalidOccasionErrorMessage='Please choose a valid occasion';
const defaultTime=availableTimes[0];
//  States
const[date,setDate]=useState(minimumDate);
const[Time,setTime]=useState(defaultTime);
const[numberofGuests,setNumberofGuests]=useState(minimumnumberofGuests);
const[occasion,setOccasion]=useState(occasions[0]);

const handleDateChange=(e)=>{
  setDate(e.target.value);
  dispatchOnDateChange(e.target.value);

}
const handleTimeChange=(e)=>setTime(e.target.value);
const isDateValid=()=>date!=='';
const isTimeValid=()=>Time!=='';
const isNumberofGuestsValid=()=>numberofGuests!=='';
const isOccasionValid=()=>occasion!=='';

  

  const areAllFieldsVaid=()=>isDateValid() && isTimeValid() && isNumberofGuestsValid() && isOccasionValid();
  return (
    <div className="form-container">
    <form onSubmit={handleFormSubmit}>

      <FormField label="Date" htmlFor="booking-date" hasError={!isDateValid()} errorMessage={invalidDateErrorMessage}>
        <input type="date" name="booking-date" id="booking-date" min={minimumDate} value={date} required={true} onChange={handleDateChange}/>
      </FormField>

      <FormField label="Time" htmlFor="booking-time" hasError={!isTimeValid()} errorMessage={invalidTimeErrorMessage}>
        <select id="booking-time" name="booking-time" value={Time} required={true} onChange={handleTimeChange}>
          {availableTimes.map(times => 
            <option data-testid="booking-time-option" key={times}>{times}</option>)
          }
        </select>
      </FormField>

      {/* <FormField label="Time" htmlFor="booking-time" hasError={!isTimeValid()} errorMessage={invalidTimeErrorMessage}>
        <select name="booking-time" id="booking-time" value={Time} required onChange={handleTimeChange}>
          {availableTimes.map((times)=>
          <option value="" data-testid='Booking-time-option' key={times}>{times}</option>
          )}
        </select>

      </FormField> */}

      <FormField label="Number of guests" htmlFor="booking-number-guests" hasError={!isNumberofGuestsValid()} errorMessage={invalidNumberOfGuestsErrorMessage}>
      <input type="number" id="booking-number-guests" name="booking-number-guests" value={numberofGuests} min={minimumnumberofGuests} max={maximumNumberOfGuests}  required={true} onChange={e => setNumberofGuests(e.target.value)}/>

      </FormField>

      <FormField label="Occasion" htmlFor="booking-occasion" hasError={!isOccasionValid()} errorMessage={invalidOccasionErrorMessage}>
        <select id="booking-occasion" name="booking-occasion" value={occasion} required={true} onChange={e => setOccasion(e.target.value)}>
          {
            occasions.map(occasion=>
              <option data-testid="booking-occasion-option" key={occasion} >{occasion}</option>
              )
          }
        </select>

      </FormField>
      <button className='button-primary' type='submit' disabled={!areAllFieldsVaid()}> 
        Make your Reservation
      </button>

    </form>
    </div>
  )
}

export default BookingForm;