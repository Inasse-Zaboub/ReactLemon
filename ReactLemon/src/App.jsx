import "./App.css";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <NavBar />
      <section className="hero-wrapper">
        <div className="hero-container innerWidth">
          <div className="hero-header">
            <h1>
              Little Lemon <br />
              <span>Chicago</span>
            </h1>
          </div>
          <div className="hero-desc">
            <p>
              We are a family-owned Mediterranean restaurant, specializing in
              traditional recipes with a<br /> modern twist to offer a unique
              and memorable dining experience.
            </p>
          </div>
          <div className="hero-button">
            <button>BOOK A TABLE</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
