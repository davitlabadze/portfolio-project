
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Route,BrowserRouter as Router, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Home from './components/Home';




function App() {
  
  return (
    <Router>
      <div className="App">
      <Header />
      <Navbar />
        <Switch>
          
          <Route path="/portfolio-project/about" component={About} />
          <Route path="/portfolio-project/skills" component={Skills} />
          <Route path="/portfolio-project/projects" component={Projects} />
          <Route path="/portfolio-project/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
