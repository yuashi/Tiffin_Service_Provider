import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Home from './Home';
import Footer from './Footer';


const Main = ()=>{
    return(
        <div>
        <BrowserRouter>
        <NavigationBar/>
        <Route path="/home" component={Home} exact/>
        <Footer/>
        </BrowserRouter>
        </div>
    );
}
export default Main;