
import Filmkarten from './components/Filmkarten';
import movies from './Data';
import './App.css';

function App() {
  return (
    <div className="App">
      {movies.map((elt, i) =>
        < Filmkarten
          key={i}
          titel={elt.title}
          jahr={elt.year}
          direktor={elt.director}
          dauer={elt.duration}
          Genre={elt.genre}
          Rate={elt.rate}
        />
      )}
    </div>
  );
}

export default App;

