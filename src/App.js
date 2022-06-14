import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/style.css";
import Header from './components/Header';
import Content from "./components/Content";
import Feature from "./components/Feature";
import Graph from "./components/Graph";
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header/>
      <Content/>
      <Feature/>
      <Graph/>
      <Footer/>
    </div>
  );
}

export default App;
