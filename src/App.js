import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/movies/:movieId" element={<MovieDetail/>} />
   </Routes>
  );
}

export default App;
