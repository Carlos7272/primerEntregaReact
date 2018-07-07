import React, {Component} from 'react';
import Peliculas from './../peliculas/peliculas.js';
import Series from './../series/series.js'

class Home extends Component {
  render(){
  	 const {borrar, peliculas, series} = this.props;
	 return(
			<div>
            <Peliculas borrar= {borrar} lista={peliculas}/>	
            <Series borrar= {borrar} lista={series}/>
      		</div>
			);
	}
}
export default Home;
