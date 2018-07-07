import React, { Component } from 'react';
import './App.css';
import './style.css';
import Header from './componentes/header.js'; 
import Body from './componentes/body.js';

class App extends Component {
  constructor(){
     super(); 
     this.state = {
      peliculas: [{"titulo": "Liga de la Justicia",
                   "imagen": "https://image.tmdb.org/t/p/w500/eifGNCSDuxJeS1loAXil5bIGgvC.jpg",
                   "descripcion": "2017 ‧ Cine fantástico/Cine de ciencia ficción ‧ 2 horas"},
                  {"titulo": "Mujer Maravilla",
                   "imagen": "https://image.tmdb.org/t/p/w500/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg",
                   "descripcion": "2017 ‧ Cine fantástico/Cine de ciencia ficción ‧ 2h 29m"}
                 ],                 
      series:    [ {"titulo": "Six Feet Under",
                   "imagen": "https://lavozdelmuro.net/wp-content/uploads/2015/02/2663928097_c53995685f-1.jpg",
                   "descripcion": "La ironía y el humor sobre el tema de la muerte."},
                   {"titulo": "Friends",
                   "imagen": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7buCWBTpiPrCF5Lt023dSC60rgS.jpg",
                   "descripcion": "Año 1994"}
                   ],   
      miLista: []  
     }
  }

  borrarUnaPelicula = (titulo) => {
    const { peliculas } = this.state 
    this.setState({
      peliculas: peliculas.filter(peli => peli.titulo !== titulo)
    })
  }

  componentDidMount(){
    console.log(this.state)
  }

  render() {
    const {peliculas, series, miLista} = this.state;
    return (
      <div>
        <Header/>
        <Body borrarUnaPelicula = {this.borrarUnaPelicula}  peliculas = {peliculas} series = {series} />
      </div>
    );
  }
}

export default App;
