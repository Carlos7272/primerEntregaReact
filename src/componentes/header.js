import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
render(){
	return(
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container"> 
              <a href="" className="navbar-brand" >React Movie DB APP</a>   
              <button className="navbar-toggler" type="button" data-toggle="collapse"  data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false"  aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarsExample07">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    	<Link to='/' className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item" > 
                        <Link to='peliculas' className="nav-link">Peliculas</Link>
                    </li>
                    <li className="nav-item">
                         <Link to='series' className="nav-link">Series</Link>
                    </li>
                   
                </ul>
              </div>    
            </div>      
          </nav>  
        </header>
   	);
   }  
}
export default Header;
      