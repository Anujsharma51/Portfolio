import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
// import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projuect";
// import MainRoutes from "./Routes/MainRoutes";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Navbar />
      {/* <MainRoutes /> */}

      <Home />
      <About />
      <Projects />
      <Footer />
      {/* <Home /> */}
    </div>
  );
}

export default App;
