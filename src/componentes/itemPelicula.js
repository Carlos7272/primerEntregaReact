import React, {Component} from 'react';

const ItemPelicula = (props) => {return(
									props.listado.map(item =>
		                                <article className="col-md-2">
	                            			<div className="grid-item">
		                                		<img src={item.imagen} alt="Movie Image" className="img-fluid"/>
		                                		<span className="grid-item-body">
		                                    		<span className="grid-item-title">{item.titulo}</span>
		                                    	</span>
	                            			</div>
	                        			</article>) 
                        		)}
export default ItemPelicula;                        		