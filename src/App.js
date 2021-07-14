import Header from "./components/Header/Header";
import { Container } from "@material-ui/core";
import { Route } from "react-router-dom";
import { BrowserRouter} from "react-router-dom";
import './App.css';

import SimpleBottomNavigation from "./components/BNav";
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';
function App() {
  return (
    <BrowserRouter>
    <SimpleBottomNavigation />
    <Header/>
      <div className="app">
        <Container>
            <Route path='/' component={Trending} exact/>
            <Route path='/movies' component={Movies}/>
            <Route path='/series' component={Series}/>
            <Route path='/search' component={Search}/> 
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
