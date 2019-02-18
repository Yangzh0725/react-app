import React,{Component} from 'react'
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import List from "../common/List/List";

import Home from "./Home/Home";
import Nav from "./Nav/Nav";

import Column from "./Column/Column";
import Detail from "./Detail/Detail";

import Follow from "./Follow/Follow";


import Error from "../common/Error/Error";

import {Route,Redirect,Switch} from 'react-router-dom';
class App extends Component{
    render(){
        return(
            <div className="App">
                <Header/>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/detail" component={Detail} />
                    <Route path="/column" component={Column} />
                    <Route path="/follow" component={Follow} />
                    <Route path="/nav" component={Nav} />
                    <Redirect exact from="/" to="/home" />
                    <Route component={Error} />
                </Switch>
                <Footer/>
            </div>
        )
    }
}

export default App;