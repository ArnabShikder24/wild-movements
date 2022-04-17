import "./App.css";
import Banner from "./components/Banner/Banner";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Banner></Banner>
    </div>
  );
}

export default App;
