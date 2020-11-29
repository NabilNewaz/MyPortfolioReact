import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Testimonials from './components/Testimonials'
import Resume from './components/Resume'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div>
      <Router>
      <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
          <Route path='/resume' component={Resume} />
        </Switch>
        <Testimonials />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
