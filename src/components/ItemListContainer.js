import React from 'react';


export const ItemListContainer = ({greeting}) => {
	return (
		<>
			<div>
				<h2 className="title_home">{greeting} <i className="fas fa-music"></i></h2>
			</div>
		</>
	)
}