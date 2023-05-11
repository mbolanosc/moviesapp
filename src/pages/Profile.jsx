/* import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from '../components/Nav/Navigation';
import Footer from '../components/Nav/footer';
import {  db } from "../services/firebase";
import { collection, getDocs } from "@firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useState , useEffect} from 'react'
import { getDatabase, ref, onValue} from "firebase/database";

const Profile = () => {
    const [ currentUXid , setCurrentUxId] = useState();
    const auth = getAuth();
    const user = auth.currentUser;
    const [myMovies, setMyMovies] = useState([]);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setCurrentUxId(user.uid);
       // console.log("#ALOOOO",currentUXid);
      } else {
        // User is signed out
      }
    });

        const db = getDatabase();
        const starCountRef = ref(db, "movies/");
        onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data)
        //updateStarCount(postElement, data);
        });
     
    return (
        <>
            <Navigation />
            <br></br>
            <Container fluid="md">
                <Row>
                <Col xs={6} md={4}>
                    <h3>My favorites</h3>
                    <hr />
                </Col>
                <Col xs={6} md={4}>
                </Col>
                </Row>
            </Container>
            <Footer />
        </>
      )

        
            
 }

export default Profile;
       
*/