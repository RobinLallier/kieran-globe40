import React from 'react';

import { ReactComponent as Boat } from './assets/images/boat_icon.svg';
import './Navigation.css';



function Navigation(props) {

	//TODO : populate navigationPages with the active state
	const navigationPages = [
		{name: "Le Projet", link: "#project"},
		{name: "La Course", link: "#race"},
		{name: "L'Actu", link: "#news"},
		{name: "Le Bateau", link: "#boat"},
		{name: "L'Équipage", link: "#crew"},
		{name: "La Mission", link: "#mission"}
	];

	function renderNavLinks() {
		return navigationPages.map((navElem, index) => {
			return (
				<a className="NavElement" key={index} href={navElem.link}> 
					{renderIcon(navElem.link)}
					{navElem.name}
				</a>);
		})	
	}

	function computeProgress(link) {
		let list = navigationPages.map(navElem => navElem.link); 
		if (list.indexOf(link) > list.indexOf(props.active)) return '';
		else if (list.indexOf(link) === list.indexOf(props.active)) return 'active';
		else return 'passed';
	}

	function renderIcon(link) {
		let progress = computeProgress(link); 
		const classes = `fas fa-times ${progress}`;
		return (
			<React.Fragment>
				{progress === 'active' ? <Boat /> : <i className={classes} ></i>}
			</React.Fragment>);
	}

	return (
    <nav className="Nav">
      {renderNavLinks()}
    </nav>
	);
}

export default Navigation;
