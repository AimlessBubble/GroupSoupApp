import logo from './logo.svg';
import burger from './images/Burger.webp'
import './App.css';

function App() {
  return (
    <div className="App">

      <header id='Banner'>
        <img src={burger} alt='Menu icon' id='Burger'></img>
        <h1>
          GroupSoup Rochester
        </h1>
      </header>
      
      <section id='SearchBar'>
        <input type='text' placeholder='Search...'>
          
        </input>
      </section>

      <section>
        <p>Map</p>
      </section>
    </div>
  );
}

export default App;
