/* eslint-disable no-undef */
import './App.css';
import Footer from './views/component/Footer';
import Header from './views/component/Header';

import Homepage from './views/pages/Homepage';
import About from './views/pages/About';
import Contact from './views/pages/Contact';
import Post from './views/pages/Post';


import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>3
        <Header />
        <Route path="/" exact component={Homepage} />
        <Route path="/about" component={About} />
        <Route payh="/post" component={Post} />
        <Route path="/contact" component={Contact} />
        <Footer />

      </div>
    </Router>
  );
}

export default App;
