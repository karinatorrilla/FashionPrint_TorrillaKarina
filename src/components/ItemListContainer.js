import React, { useState, useEffect } from 'react';
import { ProductosApp } from './ProductosApp';

// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);


export const ItemListContainer = ({greeting}) => {

	const [items, setItems] = useState([])
	const [number, setNumbero] = useState(0)
	//PRODUCTOS
	const [productos, setProductos] = useState([])

	//Suma producto
	const sumaProducto = () => {
		setNumbero(number + 1)
	};

	//Resta producto
	const restaProducto = () => {
		setNumbero(number - 1)
	};
	//promesa
	const promiseCargando  = () =>{

		return new Promise((resolve, reject) => {
			//aca va a ir la consulta a la API simulada 
			setTimeout(
				() => {
					setItems(items)
					resolve(ProductosApp)
				},2000);
		})
	};

	const consultaPromesa = () => {
		promiseCargando().then((data) => {
			const productoFiltrado = data.filter((producto) => producto.destacado )
			setProductos(productoFiltrado)
		})
	};
	useEffect(() => {
		consultaPromesa();
	}, [])
	return (
		<>
			{productos.length === 0 ? (<h1 className="title_home">Cargando...</h1>) : (
				<>
					<div id="content_body_page">
						<h2 className="title_home">{greeting} <i className="fas fa-fire"></i></h2>
						<div className="_padding_box">
							<div className="columns is-12 ">
								{productos.map((producto) => (
									<div className="column is-3 is_zoom " key={producto.id}>
										<div className="card">
										  <div>
										    <figure>
										    	<img className="imagen_producto" src={producto.img} alt={producto.nombre}/>
										    </figure>
										  </div>
										  <div className="card-content">
										      <div className="w100 text_aling_center margin_top_bot">
										        <span className="title is-6 ">{producto.nombre}</span>
										      </div>
										      <div className="w100 margin_top_bot">
												    <div className="lado_izquiero_linea">
												       <span className="txt_left_negrita">STOCK: </span><span className="txt_left_negrita_claro"> {producto.stock}</span>
											      	</div><div className="lado_derecho_linea">
												       <span className="txt_left_negrita">COMPRAR: </span><span className="txt_left_negrita_claro">{number} </span>
											      	</div>  
										      </div>

										    <div className="w100 text_aling_center margin_top_bot">
										     <button className="button is-rounded" onClick={restaProducto}><i className="fas fa-minus"></i></button><span className="cant_number_producto">{number}</span><button className="button is-rounded"  onClick={sumaProducto}><i className="fas fa-plus"></i></button>
										    </div>
										  </div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</>
			) }
		</>
	);
};
