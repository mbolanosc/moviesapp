import {Link, useParams} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from '../components/Nav/Navigation';
import Footer from '../components/Nav/footer';
import * as Constants from '../const';
import React, { useState , useEffect} from 'react'
import axios from "axios";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import {  db } from "../services/firebase";


const MovieDetail = () =>{
    const { movieId } = useParams();
    const [ movieData , setMovieData] = useState([]);
    const [ movieName, setMovieName ] = useState();
    const [ movieImg, setMovieImg ] = useState();
    const [ movieDetailId, setMovieDetailId ] = useState();
    const [ currentUXid , setCurrentUxId] = useState();
    const AuthStr = 'Bearer '.concat(Constants.APIKEY); 

    const getMovieDetail = React.useCallback(async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,{ headers:{Authorization: AuthStr }});
        setMovieData(response.data);
        console.log(movieData);
        setMovieName(response.data.title); //firebase
        setMovieImg(response.data.poster_path); //firebase
        //movieDetailId(response.data.id); //firebase
      }, []);

      React.useEffect(() => {
        getMovieDetail();
      }, [getMovieDetail]);

        const auth = getAuth();
        const user = auth.currentUser;
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

        const handleAddFavs = ( ) =>{
            const dbRef = collection(db, "movies" );
            const data = {
                movieTitle: movieName,
                movieImage: movieImg,
                providedUser:currentUXid 
             };
             addDoc(dbRef, data)
                .then(docRef => {
                    console.log("Document has been added successfully");
                })
                .catch(error => {
                    console.log(error);
                })
         } 

    return (
        <>
            <Navigation />
            <br></br>
            <Container fluid="md">
                <Row>
                <Col xs={6} md={4}>
                    <Image src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} thumbnail />
                </Col>
                <Col xs={6} md={4}>
                    <h3>{movieData.title}</h3>
                    <Button onClick={() => handleAddFavs()}variant="outline-success" size="sm">
                    Save movie
                    </Button>
                    <hr />
                    <small>Release date: {movieData.release_date}</small>
                    <p>Overview: {movieData.overview}</p>
                    <hr/>
                   
                </Col>
                </Row>
            </Container>
            
            <Footer />
        </>
      )

}

export default MovieDetail;
