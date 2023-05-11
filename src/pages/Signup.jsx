import Navigation from '../components/Nav/Navigation';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import "../styles/styles.css";
import { auth, app } from "../services/firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Nav/footer';

function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate("");
    
    const signUp = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/login"); //after the user created the register, will be redirected to the login page
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    }

    return (
        <>
            <Navigation />
            <div className='container-signin'>
                <section class="wrapper">
                    <div class="heading">
                        <h1 class="text text-large">Hello, nice to meet you!</h1>
                        <p class="text text-normal">You have an user already? <span><a href="/signup" class="text text-links">Login here</a></span></p>
                    </div>
                    <form onSubmit={signUp}>
                        <div class="input-control">
                            <input type="email" placeholder="your email goes here" value={email} class="input-field" onChange={(e) => setEmail(e.target.value)} ></input>
                        </div>
                        <div class="input-control">
                            <input type="password" placeholder="your password goes here" value={password} class="input-field" onChange={(e) => setPassword(e.target.value)} ></input>
                        </div>
                        <Button type="submit" variant="outline-dark">Sign Up</Button>
                    </form>
                </section>
            </div>
            <Footer/>
        </>
    )
}

export default Signup