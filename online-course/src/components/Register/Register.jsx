import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        course: 'cse',
        age: '',
        dob: '',
        cutoff: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
      console.log('called')
        e.preventDefault();
        axios.post('http://localhost:5000/api/register', formData)
            .then(response => {
                alert('Registration successful');
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    course: 'cse',
                    age: '',
                    dob: '',
                    cutoff: '',
                    address: ''
                });
            })
            .catch(error => {
                console.error('There was an error registering!', error);
            });
    };

    return (
        <div className="form-container">
            <h1>Course Registration</h1>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                <label htmlFor="course">Course Interested</label>
                <select id="course" name="course" value={formData.course} onChange={handleChange} required>
                    <option value="cse">CSE</option>
                    <option value="ece">ECE</option>
                    <option value="me">ME</option>
                </select>

                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />

                <label htmlFor="dob">Date of Birth</label>
                <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />

                <label htmlFor="cutoff">Cut Off</label>
                <input type="text" id="cutoff" name="cutoff" value={formData.cutoff} onChange={handleChange} required />

                <label htmlFor="address">Address</label>
                <textarea id="address" name="address" rows="4" value={formData.address} onChange={handleChange} required></textarea>

                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
};

export default Register;
