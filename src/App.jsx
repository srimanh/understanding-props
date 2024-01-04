import "./App.css";
import pic from "./images/elephant.jpeg";
import Image from "./components/DataComponent";

function App() {
  return (
    <div>
      <h1>Kalvium Gallery</h1>
      <div className="container">
        <Image img={pic} />
        <Image img={pic} />
        <Image img={pic} />
        <Image img={pic} />
      </div>
    </div>
  );
}

export default App;