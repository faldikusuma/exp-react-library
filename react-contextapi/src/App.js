import Nav from './component/Nav';
import './App.css';
import MovieList from './component/MovieList';
import { MovieProvider } from './context/MovieContext';
import Addmovie from './component/AddMovie';
function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Nav />
        <Addmovie />
        <MovieList />
      </MovieProvider>
    </div>
  );
}

export default App;
