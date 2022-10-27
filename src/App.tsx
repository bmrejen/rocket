import "./App.scss";
import rocket from "./assets/rocket.png";
import hero from "./assets/hero.png";
import { Counter } from "./components/Counter";

const NUMBER_OF_COUNTERS = 3;

function App() {
  const countersArray = Array.from({ length: NUMBER_OF_COUNTERS }, (_, i) => i + 1);
  const counters = countersArray.map((num) => <Counter num={num} key={num} />);
  return (
    <div className="wrapper">
      <div className="logo">
        <img src={rocket} alt="Rocket logo" />
      </div>
      <main className="main">
        <div className="container">
          <div>
            <h1>Get your seat to Mars</h1>
            <h2>
              Earth is doomed, but don't worry! The last rocket is leaving for Mars soon, so hurry
              up and book your flight!
            </h2>
          </div>
          <div className="hero">
            <img src={hero} alt="Our cosmonaut hero" />
          </div>
        </div>
      </main>
      <div>
        <h3>Countdown to lift-off</h3>
        <div className="counter-container">{counters}</div>
      </div>
    </div>
  );
}

export default App;
