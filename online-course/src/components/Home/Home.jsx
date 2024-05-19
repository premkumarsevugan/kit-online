import React from 'react'
import './Home.css'
<script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>

const Home = () => {
  return (
    <div>
        <div class="main">
            <div class="navbar">
                <div class="icon">
                    <h2 class="logo">KIT-CBE</h2>
                </div>

                <div class="menu">
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">COURSES</a></li>
                        <li><a href="#">REGISTER</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                </div>

                <div class="search">
                    <input class="srch" type="search" name="" placeholder="Type To text"/>
                    <a href="#"> <button class="btn">Search</button></a>
                </div>

            </div> 
            <div class="content">
                <h1>KIT - Kalaignarkarunanidhi<br/><span>Institute of Technology</span> <br/> </h1>
                    <p class="par">KIT-Kalaignarkarunanidhi Institute of Technology established in 2008<br/> 
                    by Vijayalakshmi Palanisamy Charitable Trust, <br/>
                    strives to make a mark in the field of engineering and technology globally. <br/> KIT with its magnificent ambience, modern high-tech facilities and universal recognition 
                    <br/> has been accredited by NAAC with ‘A’ Grade & NBA.</p>

                    <button class="cn"><a href="course.html">JOIN US</a></button>

                    <div class="form">
                        <h2>Login Here</h2>
                        <input type="email" name="email" placeholder="Enter Email Here"/>
                        <input type="password" name="" placeholder="Enter Password Here"/>
                        <button class="btnn"><a href="#">Login</a></button>

                        <p class="link">Don't have an account<br/>
                        <a href="#">Sign up </a> here</p>
                        <p class="liw">Log in with</p>

                        <div class="icons flex w-full justify-around text-3xl">
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-google"></i></a>
                            <a href="#"><i class="fa-brands fa-skype"></i></a>
                        </div>

                    </div>
                        </div>
                    </div>
            </div>
       
  )
}

export default Home