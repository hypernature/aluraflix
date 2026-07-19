import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Header from './components/header';
import GlobalStyle from './globalstyle';
import Page404 from './Page404'
import NuevoVideo from './NuevoVideo';
import NuevaCategoria from './NuevaCategoria';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/nuevovideo' element={ <NuevoVideo /> }/>
          <Route path='/nuevacategoria' element={ <NuevaCategoria /> }/>
          <Route path='*' element={ <Page404/> } />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;