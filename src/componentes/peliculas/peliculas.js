import React, {Component} from 'react';
import ItemPelicula from './../itemPelicula.js';

class Peliculas extends Component {	
	    
	render(){
		const {borrar, lista} = this.props;		
		return(
      		<main role="main">
			    <div className="py-5 bg-light">
			        <div className="container">
			            <h1>Películas</h1>			           
			            <section className="items-section">
			                <div className="items-section-body">
			                    <div className="row">
			                      <ItemPelicula borra= {borrar} listado= {lista}/>
			                    </div>
			                </div>
			            </section>
			        </div>
			    </div>
			</main>
			);
	}
}
export default Peliculas;


