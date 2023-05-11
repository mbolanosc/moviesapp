import Navigation from '../components/Nav/Navigation';
import Footer from '../components/Nav/footer';
import * as Constants from '../const';
import React, { useState , useEffect} from 'react'
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Link,} from "react-router-dom";

const Home = () => {
    const [ popularData, setPopularData ] = useState([]);
   
    const AuthStr = 'Bearer '.concat(Constants.APIKEY); 
      const getPopularMovies = React.useCallback(async () => {
        const response = await axios.get("https://api.themoviedb.org/3/movie/popular?page=3",{ headers:{Authorization: AuthStr }});
        setPopularData(response.data.results);
      }, []);

      React.useEffect(() => {
        getPopularMovies();
      }, [getPopularMovies]);

  return (
    <>
      <Navigation />
      <h1>Trending</h1>
      <hr></hr>
      <Container fluid="md">
        <Row>
        
            {popularData.map((movie) => (
                <><>
                  <Card key={movie.id} className="flex-fill"style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                    <Card.Body>
                      <Card.Title>{movie.title}</Card.Title>
                      <Card.Text>{movie.overview}</Card.Text>
                      <Card.Text>Audience score {movie.vote_average}</Card.Text>
                      <Link to={`movies/${movie.id}`}>See more</Link>
                    </Card.Body>
                  </Card>
                </></>
              ))}
         
        </Row>
        </Container>
      <Footer />
    </>
  )
}

export default Home;