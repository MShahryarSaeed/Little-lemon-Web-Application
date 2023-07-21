import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import './Booking.css';
import { fetchAPI,submitAPI } from './fetchAPI';
import BookingForm from './BookingForm';
import MainLayout from '../Layouts/MainLayout';

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return (response.length !== 0) ? response : availableTimes; 
};



  

const Bookings = () => {
    const initializeTimes = initialAvailableTimes =>  [...initialAvailableTimes, ...fetchAPI(new Date())];
  const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitData = formData => {
    const response = submitAPI(formData);
    alert("Table booked")
    if (response) navigate('/');
  }; 

  return (
    <MainLayout>
    <div className="bookings">
      <h2>Table reservation</h2>
      <BookingForm 
        availableTimes={availableTimes} 
        dispatchOnDateChange={dispatchOnDateChange} 
        submitData={submitData} 
      />
    </div>
    </MainLayout>
  );
};

export default Bookings;
