import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import House from "./components/pages/house";
import Saints from "./components/pages/saints";
import History from "./components/pages/history";
import Prayer from "./components/pages/prayer";
import Souls from "./components/pages/soul";
import AboutUs from "./components/pages/aboutUs";
import Admin from "./components/pages/admin";

function App() {
    return (

        <Router>
            <Navbar/>
            <Routes>
                <Route path='/admin'  element={<Admin/>} />
                <Route path='/about-us'  element={<AboutUs/>}/>
                <Route path='/house'  element={<House/>}/>
                <Route path='/saints'  element={<Saints/>}/>
                <Route path='/history'  element={<History/>}/>
                <Route path='/prayer'  element={<Prayer/>}/>
                <Route path='/soul'  element={<Souls/>}/>
            </Routes>
        </Router>
    );
}

export default App;
