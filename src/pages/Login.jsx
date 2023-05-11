import React, { useState } from 'react'
import Navigation from '../components/Nav/Navigation'
import Button from 'react-bootstrap/Button';
import "../styles/styles.css";
import { auth, app } from "../services/firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Nav/footer';

function Login() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate("");

const signIn = (e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        navigate("/"); //homepage
    })
    .catch((error) => {
        console.log(error.code);
        console.log(error.message);
    });
}

  return (
    <>
        <Navigation/>
        <div className='container-signin'>
            <section className="wrapper">
                <div className="heading">
                    <h1 className="text text-large">Hello again!</h1>
                    <p className="text text-normal">New user? <span><a  href="/signup" className="text text-links">Create a free account!</a></span></p>
                </div>
                <form onSubmit={signIn}>
                    <div className="input-control">
                        <input type="email" placeholder="your email goes here" value={email} className="input-field" onChange={(e) => setEmail(e.target.value)} ></input>
                    </div>
                    <div className="input-control">
                        <input type="password" placeholder="your password goes here" value={password} className="input-field" onChange={(e) => setPassword(e.target.value)} ></input>
                    </div>
                    <Button type="submit" variant="outline-dark">Sign In</Button>
                </form>
            </section>
        </div>
        <Footer/>
    </>
  )
}

export default Login