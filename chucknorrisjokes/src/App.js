import "./App.css";
import Jokes from "./components/Jokes";

function App() {
  return (
    <div className="App">
      <h1>Random Chuck Norris Jokes</h1>
      <img
        src="https://i.pinimg.com/originals/13/f4/09/13f4093020fc96ba87eae8221d071af7.jpg"
        alt="chuck norris"
      ></img>
      <Jokes />
    </div>
  );
}

export default App;
