import Navigation from "./Navigation";

function Home() {

  return (
    <div>   
      <Navigation />
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

export default Home;