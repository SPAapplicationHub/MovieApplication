import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails';
import Login from './components/Login'

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element = {<Login />} />
        <Route path="/movielist" exact  element = { <MovieList />} />
        <Route path="/movielist/:id" element = {<MovieDetails />} />
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
