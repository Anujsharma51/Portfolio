import "./App.css";
// import Home from "./components/Home";
import Navbar from "./components/Navbar";
import MainRoutes from "./Routes/MainRoutes";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Navbar />
      <MainRoutes />
      {/* <Home /> */}
    </div>
  );
}

export default App;
