import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { dataMovies } from "./Data"
import MovieList from './components/MovieList/MovieList';
import Add from './components/Add/Add';
import MovieDetails from "./components/MovieDetails/MovieDetails"
import { Route, Routes } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function App() {
  const [newList, setNewList] = useState(dataMovies)
  const handleAdd = (movie) => {
    setNewList([...newList, { ...movie, id: newList.length + 2 }])
  }
  return (
    <div className="App">
      <h1>Movie App</h1>
      <Routes> {/*<Switch></Switch>*/}
        <Route path="/" element={<MovieList movies={newList} />}/> 
        {/* <Route exact path="/" component={MovieList} */}
         {/* <Route exact path="/" render={(props)=><MovieList movies={newList} {...props} />} */} 
        <Route path="/add" element={<Add />}/>
        <Route path="/movieDetails/:id" element={<MovieDetails movies={newList}/>}/>
      </Routes>
    </div>
  );
}

export default App;