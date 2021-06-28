
import React from 'react';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';

import './css/NavBar.css';
import 'bulma/css/bulma.css';

export const CoderApp = () => {
	const greeting = "Productos destacados";
	return (
		<>
			<NavBar/>
			<ItemListContainer greeting = {greeting}/>
		</>
	)
}
