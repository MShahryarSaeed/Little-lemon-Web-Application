import React from 'react';
import MainLayout from '../Layouts/MainLayout';

import './Booking.css';

import { useState } from 'react';


const Booking = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState(
        {
            value: "",
            isTouched: false
        }
    );
    const [Role, setRole] = useState("role");

    const PasswordErrorMessage = () => {
        return (
            <p className="FieldError">Password should have at least 8 characters</p>
        )
    }

    const getIsFormValid = () => {
        return (
            firstName &&
            lastName &&
            validateEmail(Email) &&
            Password.value.length >= 8 &
            Role !== "role"
        )
    }

    const ClearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword({
            value: "",
            isTouched: false
        });
        setRole("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account Created");
        ClearForm();
    }

    return (
      <div className="container">
        <MainLayout>
        <br/>

        <div className='App '>
          
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h1 >Book a Table</h1>
                    <div className="Field">
                        <label htmlFor="fname">
                            First Name <sup>*</sup>
                        </label>
                        <input type="text" name="fname" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='Enter First Name' />

                    </div>
                    <div className="Field">
                        <label htmlFor="lname">
                            Last Name <sup>*</sup>
                        </label>
                        <input type="text" name="lname" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Enter Last Name' />
                    </div>
                    <div className="Field">
                        <label htmlFor="email">
                            Email Address <sup>*</sup>

                        </label>
                        <input type="text" name="email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' />
                    </div>
                    <div className="Field">
                        <label htmlFor="pw">
                            Password <sup>*</sup>
                        </label>
                        <input type="password" name="pw" value={Password.value} onChange={(e) => setPassword({ ...Password, value: e.target.value })} onBlur={() => setPassword({ ...Password, isTouched: true })} placeholder='Enter Password' />
                        {
                            Password.isTouched && Password.value.length < 8 ? (<PasswordErrorMessage />) : null
                        }
                    </div>
                    <div className="Field">
                        <label htmlFor="role">
                            Role <sup>*</sup>
                        </label>
                        <select name="role" value={Role} onChange={(e) => setRole(e.target.value)}>
                            <option value="role">Role</option>
                            <option value="individual">Individual</option>
                            <option value="business">Business</option>
                        </select>
                    </div>
                    <button type='submit' disabled={!getIsFormValid()}>Create Account</button>
                </fieldset>
            </form>

        </div>
        </MainLayout>
        </div>
    )
}

export default Booking;

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};




