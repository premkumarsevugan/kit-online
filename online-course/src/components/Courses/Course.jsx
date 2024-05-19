import React from 'react'
import './Course.css'
import img1 from './image1.jpg'
import img2 from './image2.jpg'
import img3 from './image3.jpg'
const Course = () => {
  return (
    <div>
         <h1 class="title">CHOOSE YOUR COURSES WITH US</h1>
    <div class="course-container">
        <div class="course-block">
            <h2>Course 1: CSE</h2>
            <img src={img1} alt="CSE Course Image" class="course-image"/>
            <p>CSE is an amazing course and one who studies this has been a better aspiring engineer in today's world.</p>
            <a href="registration_form.html" class="register-btn">Register Now</a>
        </div>
        <div class="course-block">
            <h2>Course 2: ECE</h2>
            <img src={img2} alt="ECE Course Image" class="course-image"/>
            <p>ECE offers a broad foundation in electronic and communication engineering, equipping students with skills for diverse careers.</p>
            <a href="registration_form.html" class="register-btn">Register Now</a>
        </div>
        <div class="course-block">
            <h2>Course 3: ME</h2>
            <img src={img3} alt="ME Course Image" class="course-image"/>
            <p>ME focuses on mechanical engineering principles, preparing students for challenges in manufacturing and design.</p>
            <a href="registration_form.html" class="register-btn">Register Now</a>
        </div>
    </div>
    </div>
  )
}

export default Course