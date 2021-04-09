
import './App.css';
import Navbar from './Components/Navbar';
import Upload from './Screens/Upload';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Gallery from './Screens/Gallery';
import { useState } from 'react';
import SideDrawer from './Components/Sidedrawer';
import BackDrop from './Components/Backdrop';
import Photo from './Screens/Photo';

function App() {

  const [sideToggle, setSideToggle] = useState(false);
  return (
    <div className="App">
      <Router>
        <Navbar click={() => setSideToggle(true)} />
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
        <BackDrop show={sideToggle} click={() => setSideToggle(false)} />


        <Route path="/" exact component={Upload} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/photo/:id" exact component={Photo} />
      </Router>

    </div>
  );
}

export default App;
