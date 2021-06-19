import React from 'react';
import { CartWidget } from './CartWidget';
import logo_wonder from '../assets/img/logo_wonder.png';

export const NavBar = () => {
	return (
		<>
			<nav className="navbar is-dark" role="navigation" aria-label="main navigation">
			  <div className="navbar-brand">
			  		<a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"  href="/">
					  <span aria-hidden="true"></span>
					  <span aria-hidden="true"></span>
					  <span aria-hidden="true"></span>
					</a>
			  </div>
			  <div className="navbar-menu">
			  	<div className="lado_izquierdo">
			  		<figure className="logo_img">
			  			<img src={logo_wonder} alt="logo"/>
					</figure>
			  	</div><div className="lado_derecho">
			   		<div className="navbar-end">
			   			<div className="navbar-item">
			   				<div className="panel-block">
							    <p className="control has-icons-left">
							      <input className="input" type="text" placeholder="Buscar.."/>
							      <span className="icon is-left">
							        <i className="fas fa-search" aria-hidden="true"></i>
							      </span>
							    </p>
							</div>
			   			</div>
			   			<a className="navbar-item" href="/" >Productos</a>
					    <a className="navbar-item" href="/" >Contacto</a>
					    <a className="navbar-item cntent_after_line" href="/">
					        <span className="icon-text">
							  <span className="icon">
							   <i className="fas fa-user"></i>
							  </span>
							  <span>Usuario</span>
							</span>
					    </a>
					    <a className="navbar-item" href="/">
					       <CartWidget/>
					    </a>
			   		</div>
			  	</div>
			  </div>
			</nav>
		</>
	)
}
