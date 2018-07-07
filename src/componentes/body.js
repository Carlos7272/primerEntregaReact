import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';  
import Home from './home/home.js';
import Peliculas from './peliculas/peliculas.js';
import Series from './series/series.js';

class Body extends Component {

	render(){
    const {borrarUnaPelicula, peliculas, series} = this.props;
		return(
			<div>
      			<Switch>
        			<Route exact path='/' 
              component= {() => <Home borrar= {borrarUnaPelicula} peliculas={peliculas} series={series}/>}/>     
        			<Route path= '/peliculas' 
               component= {() => <Peliculas borrar= {borrarUnaPelicula} lista={peliculas}/>}/>
        		  <Route path= '/series' 
        			 component= {() => <Series borrar= {borrarUnaPelicula} lista={series}/>}/>
      			</Switch>
      	    </div>
			);
	}
}
export default Body;


